import * as PLUS from 'iofod-sdk'
import { Icase } from './type'
const { Header, Text, Textarea, ButtonGroup, SelectItem } = PLUS.components

var $: any

let isReadAccess = false

const format = (data: any) => JSON.stringify(data)

async function gotAccess() {
  if (!isReadAccess) {
    isReadAccess = await PLUS.withAccess([
      'CTTReadAccess',
      'ModelsReadAccess',
      'ConfigReadAccess',
    ])
  }
}

let cache: any

async function initView() {
  let struct = await PLUS.pullStruct('Config.testCases.cases')

  cache = struct

  return await PLUS.render([
    Header('Description'),
    Text({
      value:
        'Select the use case/group for the current project, configure the target source and click [Run] to allow the project connected to the target source to receive the use case/group and execute the automated test.',
      style: {
        color: 'rgb(0, 184, 255)',
      },
    }),
    SelectItem({
      name: 'Case/Group',
      value: '$selectCase',
      filterable: true,
      changeable: false,
      options: (struct as Icase[]).map((obj) => {
        return {
          value: obj.id,
          label: obj.name,
        }
      }),
    }),
    Textarea({
      name: 'Origin',
      value: '$syncLinks',
      placeholder: 'Please fill in URL, line break',
    }),
    ButtonGroup(
      {
        group: [
          {
            value: 'Run',
          },
        ],
      },
      'runCase'
    ),
  ])
}

export async function main() {
  $ = await PLUS.init({
    state: {
      syncLinks: 'ws://127.0.0.1:5210',
      selectCase: '',
    },
    persisted: false,
    version: '1.0.0',
  })

  await gotAccess()

  if (!isReadAccess) {
    return await PLUS.render([Header('Lack of permission to run')])
  }

  await initView()

  PLUS.off('UpdateTree')
  PLUS.on('UpdateTree', (res: any) => {
    let flag = res
      .map((o: any) => o.path)
      .some((v: String) => v.includes('/Config/testCases/cases'))

    if (flag) initView()
  })

  return
}

export function runCase() {
  if (!isReadAccess) {
    return alert('Run fail')
  }

  let item = cache.filter((obj: Icase) => obj.id == $('selectCase'))[0]

  if (!item) return PLUS.toast.error('Please select the use Case/Group first')

  alert('Extension: Start running use cases/groups - ' + item.name)

  let links = $('syncLinks').split('\n')

  links.forEach((url: string | URL) => {
    let ws = new WebSocket(url)

    ws.onopen = () => {
      ws.send(
        format({
          type: 'INIT_AUTO',
        })
      )

      setTimeout(() => {
        ws.send(
          format({
            type: 'START_AUTO',
            payload: {
              cases: cache,
              item: item,
            },
          })
        )
      }, 3000)
    }

    ws.onmessage = (evt) => {
      const { type, payload } = JSON.parse(evt.data)

      if (type == 'CALLBACK') {
        PLUS.toast.success(url + ' : Case/Group ' + item.name + ' Run Done!')
        PLUS.log(JSON.stringify(payload))
      }
    }

    ws.onerror = () => {
      PLUS.toast.error(url + 'Run fail')
    }

    ws.onclose = () => {
      alert(url + 'End of run')
    }
  })
}
