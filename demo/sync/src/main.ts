import * as PLUS from 'iofod-sdk'

const { SwitchItem, Textarea, SubHeader, ButtonGroup } = PLUS.components
const log = console.log
const format = (data: { msg: string }) => JSON.stringify(data)

var $: any

let isReadAccess = false
let instans: WebSocket[] = []

async function gotAccess() {
  if (!isReadAccess) {
    isReadAccess = await PLUS.withAccess([
      'CTTReadAccess',
      'ModelsReadAccess',
      'ConfigReadAccess',
    ])
  }
}

async function startSync() {
  await gotAccess()

  if (!isReadAccess) {
    PLUS.setState({
      isStart: false,
    })

    return alert('Sync fail')
  }

  alert('Start Sync')

  let links = $('syncLinks').split('\n')

  links.forEach((url: string | URL) => {
    let ws = new WebSocket(url)

    instans.push(ws)

    ws.onopen = () => {
      ws.send(
        format({
          msg: 'hello',
        })
      )
    }

    ws.onmessage = (evt) => {
      log(evt)
    }

    ws.onerror = () => {
      alert(url + 'sync error')
    }

    ws.onclose = () => {
      alert(url + 'stop sync')

      let I = instans.indexOf(ws)

      instans.splice(I, 1)
    }
  })

  setTimeout(() => {
    pullTree()

    PLUS.off('UpdateTree')
    PLUS.on('UpdateTree', (res: any) => {
      syncData({
        type: 'OT',
        payload: res,
      })
    })
  }, 100)
}

function stopSync() {
  instans.forEach((ws) => ws.close())

  alert('Stop sync')
}

function syncData(data: any) {
  instans.forEach((ws) => ws.send(format(data)))
}

function pullTree() {
  PLUS.pullStruct('ALL').then((res) => {
    log('pull', res)

    syncData({
      type: 'ALL',
      payload: res,
    })
  })
}

export async function main() {
  $ = await PLUS.init({
    state: {
      isStart: false,
      canPush: false,
      useLoading: false,
      syncLinks: 'ws://127.0.0.1:8888',
    },
    persisted: false,
    version: '1.0.0',
  })

  await PLUS.render([
    SubHeader('Settings'),
    SwitchItem(
      {
        name: 'Start Sync',
        value: '$isStart',
      },
      'initSync'
    ),
    SwitchItem({
      name: 'Allowed push',
      value: '$canPush',
    }),
    Textarea(
      {
        name: 'Origin',
        value: '$syncLinks',
        placeholder: 'Please fill in URL, line break',
      },
      'changeSyncSource'
    ),
    ButtonGroup(
      {
        group: [
          {
            value: 'Full Volume',
          },
        ],
      },
      'syncALl'
    ),
  ])
}

export function initSync(e: any) {
  if (e.value) {
    startSync()
  } else {
    stopSync()
  }
}

export function changeSyncSource(e: any) {
  if (e.type == 'blur') {
    log('changeSyncSource', e)
  }
}

export async function syncALl(e: any) {
  if (e.value === 0) {
    if (!$('isStart')) return alert('Please start syncing first')

    if (isReadAccess) {
      pullTree()
    } else {
      alert('Sync fail')
    }
  }
}
