import * as PLUS from 'iofod-sdk'

const { SwitchItem, SubHeader, IFstructContainer, Code } = PLUS.components

var $: any
let isReadAccess = false
let cache: any

async function gotAccess() {
  if (!isReadAccess) {
    isReadAccess = await PLUS.withAccess([
      'CTTReadAccess',
      'ModelsReadAccess',
      'ConfigReadAccess',
    ])
  }
}

export async function main() {
  $ = await PLUS.init({
    state: {
      isStart: false,
      canPush: false,
      useLoading: false,
      replaceXY: true,
      replacePositon: true,
      currentTree: {},
    },
    persisted: false,
    version: '1.0.0',
    size: 360,
  })

  await PLUS.render([
    SubHeader('Struct Preview'),
    Code(
      {
        lang: 'json',
        value: '$currentTree',
        style: {
          height: '200px',
        },
      },
      'copyDone'
    ),
    SubHeader('Setting'),
    SwitchItem(
      {
        name: 'Init X and Y',
        value: '$replaceXY',
      },
      'updateCode'
    ),
    SwitchItem(
      {
        name: 'Remove Position',
        value: '$replacePositon',
      },
      'updateCode'
    ),
    SubHeader('Current Selected'),
    IFstructContainer({
      dragAndDrop: true,
      value: '$currentTree',
      style: {
        transform: 'scale(0.8)',
        transformOrigin: 'left top',
        minHeight: '50px',
        margin: '4px 0',
      },
    }),
  ])

  await gotAccess()

  if (!isReadAccess) {
    return alert('Lack of read and write access.')
  }

  PLUS.on('ActiveComponentChange', setCurrentTree)
}

function setCurrentTree(res: any) {
  let { hid, tree } = res

  //Cache it
  cache = JSON.parse(JSON.stringify(res))

  if (hid) {
    tree[hid].status.forEach((state: any) => {
      if ($('replaceXY')) {
        if (state.props.x) {
          state.props.x = 0
        }

        if (state.props.y) {
          state.props.y = 0
        }
      }

      if ($('replacePositon')) {
        if (state.props.style.position) {
          delete state.props.style.position
        }
      }
    })

    PLUS.setState({
      currentTree: tree,
    })
  } else {
    PLUS.setState({
      currentTree: {},
    })
  }
}

export function updateCode() {
  setCurrentTree(cache)
}

export function copyDone() {}
