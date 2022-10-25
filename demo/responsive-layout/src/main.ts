import * as PLUS from 'iofod-sdk'
const {
  Header,
  Tabs,
  Container,
  Text,
  Button,
  SubHeader,
  SwitchItem,
  Checkbox,
} = PLUS.components

import { ViewTypeMap, calcViewportList } from './pkg'

let isReadAccess = false

var $: any

const ModeTipStyle = {
  color: 'rgba(0, 184, 255, 0.9)',
}

async function gotAccess() {
  if (!isReadAccess) {
    isReadAccess = await PLUS.withAccess([
      'CTTReadAccess',
      'CTTWriteAccess',
      'ModelsReadAccess',
      'ConfigReadAccess',
    ])
  }
}

async function checkReady() {
  let pre: any = await PLUS.pullStruct(`CTT.T.HSS.device`)

  if (pre && pre.name) {
    await PLUS.setState({
      isReady: true,
    })
  } else {
    await PLUS.setState({
      isReady: false,
    })
  }

  return
}

let currentSelect = ''

function setCurrentTree(res: any) {
  let { hid } = res

  if (hid) {
    currentSelect = hid
  } else {
    currentSelect = ''
  }
}

export async function main() {
  $ = await PLUS.init({
    state: {
      tabType: 'adaptation',
      useSimple: true,
      selected: '',
      isReady: false,
      MobileS: false,
      MobileM: true,
      MobileL: false,
      Tablet: true,
      LaptopS: true,
      LaptopM: false,
      LaptopL: true,
      WQHD: false,
      UltraHD: false,
    },
    version: '1.0.0',
    persisted: true,
  })

  await gotAccess()

  if (!isReadAccess) {
    return await PLUS.render([Header('Lack of read and write access.')])
  }

  await checkReady()

  await PLUS.render([
    Tabs({
      value: '$tabType',
      list: {
        adaptation: 'Adaptation',
        viewport: 'Viewport',
      },
      sticky: true,
    }),

    Container({
      render: '# $tabType == "adaptation" && !$isReady',
      children: [
        Header('Description'),
        Text({
          value:
            'The current project responsive layout feature is not enabled, please click [Apply Responsive] to add the feature first.',
          style: ModeTipStyle,
        }),
        Button(
          {
            icon: 'vibration',
            value: 'Apply Responsive',
          },
          'applyResponsive'
        ),
      ],
    }),

    Container({
      render: '# $tabType == "adaptation" && $isReady',
      children: [
        Header('Description'),
        Text({
          value:
            'Select the corresponding breakpoint conditions according to the actual adaptation needs of the project and click [Generate Template] to generate a status template to the selected component.',
          style: ModeTipStyle,
        }),
        SubHeader('Conditions'),
        ...Object.keys(ViewTypeMap).map((type) => {
          let v = ViewTypeMap[type]

          return Checkbox({
            name: `${v}px - ${type}`,
            value: `$${type}`,
          })
        }),
        Button(
          {
            value: 'Generate Template',
          },
          'genAdaptationTemp'
        ),
      ],
    }),

    Container({
      render: '# $tabType == "viewport"',
      children: [
        Header('Description'),
        Text({
          value:
            'Click on the device type to adjust the viewport of the current project for a quick preview of the responsive design.',
          style: ModeTipStyle,
        }),
        SwitchItem({
          name: 'Lean mode',
          value: '$useSimple'
        }),
        Container({
          render: '# $useSimple',
          style: {
            width: '300px',
          },
          children: calcViewportList(true),
        }),
        Container({
          render: '# !$useSimple',
          style: {
            width: '300px',
          },
          children: calcViewportList(false),
        }),
        Container({
          style: {
            padding: '8px',
          },
          children: [],
        }),
      ],
    }),
  ])

  PLUS.off('UpdateTree')
  PLUS.on('UpdateTree', (e: any) => {
    console.log('UpdateTree', e)
    checkReady()
  })

  PLUS.off('ActiveComponentChange')
  PLUS.on('ActiveComponentChange', setCurrentTree)

  return
}

export async function applyResponsive() {
  let parent: any = await PLUS.pullStruct(`CTT.T.HSS.Global`)

  PLUS.setStruct('CTT.T.HSS', {
    device: {
      name: 'device',
      type: 'container',
      lock: false,
      parent: 'Global',
      children: [],
      content: 'base/container',
      remarks: '',
      status: [
        {
          name: 'default',
          id: 'default',
          active: true,
          props: {
            option: {},
            style: {
              display: 'none',
            },
            x: 0,
            y: 0,
          },
        },
      ],
      model: {
        vw: {
          value: 500,
          subscribe: '',
          ZI: 0,
        },
        vh: {
          value: 500,
          subscribe: '',
          ZI: 0,
        },
        render: {
          value: false,
          subscribe: '',
          ZI: 0,
          RM: true,
        },
      },
      events: [],
    },
    Global: {
      ...parent,
      children: ['device', ...parent.children],
    },
  }).then((res) => {
    if (res.code == 0) {
      PLUS.toast.success('Success.')
    }
  })
}

export async function genAdaptationTemp() {
  if (!currentSelect) return PLUS.toast.warning('Please select the container or component first.')

  let target: any = await PLUS.pullStruct(`CTT.T.HSS.${currentSelect}`)
  let { status } = target
  let metaState = target.status.filter(
    (state: any) =>
      state.active && !state.name.includes(':') && state.name != '$mixin'
  )[0]
  let metaName = metaState.name
  let i = status.map((state: any) => state.id).indexOf(metaState.id)
  let left = status.slice(0, i + 1)
  let right = status.slice(i + 1)
  let breakpoints: Number[] = []

  Object.keys(ViewTypeMap).forEach((type) => {
    if ($(type)) {
      let v = ViewTypeMap[type]

      if (status.filter((state: any) => state.id == metaName + v).length == 0) {
        breakpoints.push(v)
      }
    }
  })

  if (breakpoints.length == 0) return PLUS.toast.warning('There is no content that needs to be generated.')

  breakpoints = breakpoints.reverse()

  PLUS.setStruct(`CTT.T.HSS.${currentSelect}`, {
    status: [
      ...left,
      ...breakpoints.map((v) => {
        return {
          active: true,
          id: metaName + v,
          name: `${metaName}:$vw<device> <= ${v}`,
          props: {
            option: {},
            style: {},
          },
        }
      }),
      ...right,
    ],
  }).then((res) => {
    if (res.code == 0) {
      PLUS.toast.success('Success.')

      PLUS.call(
        'UI:LEFT_TAB_TYPE',
        {
          tab: 'status',
        }
      )
    }
  })
}

export function selectDevice(e: any) {
  let { device, vw, vh } = e.$data.payload

  PLUS.setState({
    selected: device,
  })

  PLUS.call(
    'DATA:SET_VIEWPORT',
    {
      payload: {
        vw, vh
      },
    }
  )
}
