import * as PLUS from 'iofod-sdk'
import { COM, Colors, lightTextColor, ThemeTitle, LikeText } from './pkg'

const {
  Tabs,
  Header,
  SubHeader,
  Container,
  IFstructContainer,
  Text,
  Code,
  SwitchItem,
} = PLUS.components

let $: any
let isReadAccess = false
let currentTarget: any

async function gotAccess() {
  if (!isReadAccess) {
    isReadAccess = await PLUS.withAccess(['CTTReadAccess', 'CTTWriteAccess'])
  }
}

function calcList(part: string) {
  let list = COM[part]

  return list.map((obj: any) => {
    let { type, tree, style = {} } = obj

    let name = type

    return Container({
      style: {
        display: 'flex',
        marginTop: '16px',
        paddingRight: '16px',
      },
      children: [
        Text({
          value: name,
          style: {
            width: '100%',
            color: '#ebebeb',
          },
        }),
        IFstructContainer(
          {
            dragAndDrop: true,
            style: {
              cursor: 'alias',
              padding: `0px`,
              marginTop: '12px',
              transition: 'all 0.2s ease',
              ...style,
            },
            subStyle: {
              maxWidth: '320px',
            },
            payload: { type },
            hoverStyle: {
              transform: `translate(0px, -3px)`,
            },
            value: tree,
          },
          'dragend'
        ),
      ],
    })
  })
}

function calcTile() {
  return Object.keys(Colors).map((key) => {
    let part = Colors[key]

    return Container({
      children: [
        SubHeader(ThemeTitle[key]),
        Container({
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            padding: '8px 16px',
          },
          children: part.map((item: any, index: number) => {
            let { text, bg, color = '#fff' } = item

            let isGradient = bg.startsWith('linear-gradient(')
            let attr = isGradient ? 'backgroundImage' : 'backgroundColor'
            let style: any = {}
            let textStyle: any = {}

            if (key == 'light') {
              style.backgroundColor = '#fff'
            }

            if (key.includes('light')) {
              textStyle.color = lightTextColor[index]
            } else {
              textStyle.color = color
            }

            return Container(
              {
                style: {
                  margin: '4px',
                  transform: 'scale(1.0)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  ...style,
                },
                hoverStyle: {
                  transform: `translate(0px, -6px)`,
                },
                children: [
                  Container({
                    style: {
                      width: '56px',
                      height: '90px',
                      [attr]: bg,
                      display: 'flex',
                      alignItems: 'center',
                    },
                    children: [
                      Text({
                        value: text,
                        style: {
                          width: '100%',
                          fontSize: '14px',
                          textAlign: 'center',
                          padding: '0px',
                          ...textStyle,
                        },
                      }),
                    ],
                  }),
                ],
                payload: {
                  key: attr,
                  value: bg,
                  color: textStyle.color,
                },
              },
              'copyColor'
            )
          }),
        }),
      ],
    })
  })
}

export async function main() {
  $ = await PLUS.init({
    state: {
      tabType: 'base',
      currentValue: '',
      currentTree: {},
      usePreview: false,
      useFontColor: true,
    },
    persisted: true,
    version: '1.0.0',
    size: 420,
  })

  await PLUS.render([
    Tabs({
      value: '$tabType',
      list: {
        base: 'Base',
        avator: 'Tags',
        form: 'Form',
        combined: 'Combined',
        theme: 'Theme',
      },
      sticky: true,
    }),

    Container({
      render: '# $tabType == "base"',
      children: calcList('base'),
    }),

    Container({
      render: '# $tabType == "avator"',
      children: calcList('avator'),
    }),

    Container({
      render: '# $tabType == "form"',
      children: calcList('form'),
    }),

    Container({
      render: '# $tabType == "combined"',
      children: calcList('combined'),
    }),

    Container({
      render: '# $tabType == "theme"',
      children: [
        Header('Description'),
        Text({
          value: 'Click to apply the colour to the background of the currently selected state of the component',
          style: {
            color: 'rgb(0 184 255)',
          },
        }),
        SwitchItem({
          name: 'Show active components',
          value: '$usePreview',
        }),
        SwitchItem({
          name: 'Apply font color',
          value: '$useFontColor',
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
            SubHeader('Current color'),
            Code(
              {
                lang: 'css',
                value: '$currentValue',
                style: {
                  height: '60px',
                  overflow: 'hidden',
                },
              },
              'copyDone'
            ),
            Container({
              render: '# $usePreview',
              children: [
                SubHeader('Current active components'),
                IFstructContainer({
                  proxyCurrentTarget: true,
                  value: '{}',
                  style: {
                    minHeight: '80px',
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
        ...calcTile(),
      ],
    }),

    Container({ style: { padding: '12px' }, children: [] }),
  ])

  await gotAccess()

  if (!isReadAccess) {
    return alert('Lack of permissions.')
  }

  PLUS.on('ActiveComponentChange', setCurrentTree)
}

function setCurrentTree(res: any) {
  let { hid, tree } = res

  currentTarget = tree[hid]
}

export async function dragend() {}

export async function copyColor(e: any) {
  let { value, color } = e.$data.payload

  PLUS.setState({
    currentValue: value,
  })

  let isGradient = value.startsWith('linear-gradient(')
  let merge: any

  if (isGradient) {
    merge = {
      backgroundColor: undefined,
      backgroundImage: value,
    }
  } else {
    merge = {
      backgroundColor: value,
      backgroundImage: undefined,
    }
  }

  if (currentTarget && $('useFontColor')) {
    let isTextLike = LikeText.includes(currentTarget.content)

    if (isTextLike) {
      merge.color = color
    }
  }

  PLUS.setCurrentStyle(merge)
}

export async function copyDone() {}
