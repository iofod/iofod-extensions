import * as PLUS from 'iofod-sdk'
import { COM } from './pkg'
import { getStyle } from './helper'

let $: any
let isReadAccess = false

const {
  Tabs,
  Header,
  Container,
  IFstructContainer,
  Text,
  SwitchItem,
  SliderItem,
  OptionGroup,
  ColorPicker,
} = PLUS.components

async function gotAccess() {
  if (!isReadAccess) {
    isReadAccess = await PLUS.withAccess(['CTTReadAccess', 'CTTWriteAccess'])
  }
}

function calcList(part: string) {
  let list = COM[part]

  return list.map((obj: any) => {
    let { type, tree, style = {}, containerStyle = {} } = obj

    let name = type
    let color = part == 'dark' ? '#ffffffab' : '#102452ab'

    return Container({
      style: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '24px',
        paddingLeft: '16px',
        ...containerStyle
      },
      children: [
        IFstructContainer(
          {
            dragAndDrop: true,
            style: {
              cursor: 'alias',
              padding: `0px`,
              transition: 'all 0.2s ease',
              ...style,
            },
            subStyle: {
              maxWidth: '320px',
            },
            payload: { type },
            hoverStyle: {
              transform: `scale(1.03)`,
            },
            value: tree,
          },
          'dragend'
        ),
        Text({
          value: name,
          style: {
            width: '100%',
            height: '20px',
            color: color,
            fontSize: '14px',
            textAlign: 'right',
            padding: '0px 16px'
          },
        }),
      ],
    })
  })
}

const IconStyle = {
  fill: 'none',
  strokeWidth: '6px',
}

const BaseTip = 'Please select the container or component first.'
const defaultConf = {
  selectedColor: '#e0e0e0',
  distance: 8,
  intensity: 0.2,
  blur: 16,
  shape: 0,
  toward: 145,
}
const previewCOMStyle = {
  minHeight: '100%',
  backgroundColor: '#E0EAF5',
  padding: '10px 10px 20px 0px'
}

export async function main() {
  $ = await PLUS.init({
    state: {
      tabType: 'base',
      currentValue: '',
      currentTree: {},
      usePreview: false,
      useFontColor: true,
      tip: BaseTip,
      ...defaultConf
    },
    persisted: false,
    version: '1.0.0',
    size: 420,
  })

  await PLUS.render([
    Tabs({
      value: '$tabType',
      list: {
        base: 'Base',
        form: 'Form',
        combined: 'Combined',
        dark: 'Dark',
        custom: 'Custom',
      },
      sticky: true,
    }),

    Container({
      render: '# $tabType == "base"',
      style: previewCOMStyle,
      children: calcList('base'),
    }),

    Container({
      render: '# $tabType == "form"',
      style: previewCOMStyle,
      children: calcList('form'),
    }),

    Container({
      render: '# $tabType == "combined"',
      style: previewCOMStyle,
      children: calcList('combined'),
    }),

    Container({
      render: '# $tabType == "dark"',
      style: {
        padding: '10px 10px 20px 0px'
      },
      children: calcList('dark'),
    }),

    Container({
      render: '# $tabType == "custom"',
      children: [
        Header('Description'),
        Text({
          value: 'Soft UI customisation tool, select the component and change the configuration below to apply a new mimetic design style to the component.',
          style: {
            color: 'rgb(0 184 255)',
          },
        }),
        SwitchItem({
          name: 'Preview components',
          value: '$usePreview',
        }),
        Container({
          style: {
            position: 'sticky',
            top: '40px',
            backgroundColor: '#2c2c2c',
            zIndex: '9',
            marginTop: '12px',
          },
          children: [
            Container({
              render: '# $usePreview',
              children: [
                IFstructContainer({
                  proxyCurrentTarget: true,
                  value: '{}',
                  style: {
                    minHeight: '80px',
                    padding: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItem: 'center',
                    marginBottom: '12px',
                  },
                  subStyle: {
                    top: '0px',
                    left: '0px',
                    position: 'absolute',
                  },
                }),
              ],
            }),
          ],
        }),

        ColorPicker(
          {
            name: 'Color',
            value: '$selectedColor',
          },
          'calcStyle'
        ),

        SliderItem(
          {
            name: 'Distance',
            value: '$distance',
            min: 1,
            max: 50,
          },
          'calcStyle'
        ),
        SliderItem(
          {
            name: 'Intensity',
            value: '$intensity',
            min: 0.01,
            max: 0.7,
            step: 0.01,
          },
          'calcStyle'
        ),
        SliderItem(
          {
            name: 'Blur',
            value: '$blur',
            min: 0,
            max: 100,
          },
          'calcStyle'
        ),

        OptionGroup(
          {
            name: 'Shape',
            value: '$shape',
            options: [
              {
                value: 0,
                label: 's1',
                viewBox: '0 0 145 24',
                style: { ...IconStyle },
                tip: 'Flat',
                icon: 'M0 22H7C15.2843 22 22 15.2843 22 7.00001V3C22 2.44772 22.4477 2 23 2H121C121.552 2 122 2.44772 122 3V7.00001C122 15.2843 128.716 22 137 22H145',
              },
              {
                value: 2,
                label: 's2',
                viewBox: '0 0 145 24',
                style: { ...IconStyle },
                tip: 'Concave',
                icon: 'M0 22H7C15.2843 22 22 15.2843 22 7.00001V3.39336C22 2.7091 22.6808 2.2299 23.3304 2.44485C59.2066 14.3156 85.7767 12.9047 120.7 2.39438C121.343 2.20072 122 2.67921 122 3.3512V7.00001C122 15.2843 128.716 22 137 22H145',
              },
              {
                value: 3,
                label: 's3',
                viewBox: '0 0 145 33',
                style: { ...IconStyle },
                tip: 'Convex',
                icon: 'M0 31H7C15.2843 31 22 24.2843 22 16V11.7329C22 11.2966 22.2898 10.9083 22.7061 10.7779C60.0722 -0.924818 84.913 -0.925978 121.302 10.7745C121.714 10.9071 122 11.2935 122 11.727V16C122 24.2843 128.716 31 137 31H145',
              },
              {
                value: 1,
                label: 's4',
                viewBox: '0 0 145 24',
                style: { ...IconStyle },
                tip: 'Pressed',
                icon: 'M0 2H22V21C22 21.5523 22.4477 22 23 22H121C121.552 22 122 21.5523 122 21V2H145',
              },
            ],
          },
          'calcStyle'
        ),

        OptionGroup(
          {
            name: 'Light source',
            value: '$toward',
            options: [
              {
                value: 145,
                label: 'TL',
                tip: 'Top Left'
              },
              {
                value: 225,
                label: 'TR',
                tip: 'TopRight'
              },
              {
                value: 315,
                label: 'BR',
                tip: 'Bottom Right'
              },
              {
                value: 45,
                label: 'BL',
                tip: 'Bottom Left'
              },
            ],
          },
          'calcStyle'
        ),

        Text({
          value: '$tip',
          style: {
            color: 'rgb(175 175 175)',
            fontSize: '15px',
            textAlign: 'center',
            marginTop: '20px'
          }
        }),
        Container({ style: { padding: '12px' }, children: [] }),
      ],
    })
  ])

  await gotAccess()

  if (!isReadAccess) {
    return alert('Lack of permissions.')
  }

  PLUS.on('ActiveComponentChange', async (res: any) => {
    let { hid } = res

    if (!hid) {
      PLUS.setState({
        ...defaultConf,
        tip: BaseTip
      })

      return
    }

    let style = await PLUS.getCurrentStyle()

    if (style.backgroundColor) {
      PLUS.setState({
        selectedColor: style.backgroundColor,
      })
    } else {
      PLUS.setState({
        selectedColor: '#ffffff',
      })
    }

    PLUS.call(
      'DATA:GET_CURRENT_OPTION',
      {
        payload: {},
      },
      (data: any) => {
        if (data.softui) {
          let [distance, intensity, blur, shape, toward] = data.softui

          PLUS.setState({
            distance,
            intensity,
            blur,
            shape,
            toward,
            tip: ''
          })
        }
      }
    )
  })
}

export function calcStyle() {
  let style: any = getStyle($)

  PLUS.setCurrentStyle(style)
  PLUS.call(
    'DATA:SET_CURRENT_OPTION',
    {
      payload: {
        softui: [
          $('distance'),
          $('intensity'),
          $('blur'),
          $('shape'),
          $('toward'),
        ],
      },
    },
    () => {}
  )
}

export function dragend() {
}
