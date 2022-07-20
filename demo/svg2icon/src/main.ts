import * as PLUS from 'iofod-sdk'

const {
  Text,
  Textarea,
  Image,
  SubHeader,
  Container,
  UploadItem,
} = PLUS.components

// @ts-ignore
import { pathThatSvg } from './pathThatSvg.js'

var $: any

export async function main() {
  $ = await PLUS.init({
    state: {
      file1: '',
      src1: '',
      text1: ''
    },
    persisted: false,
    version: '1.0.1'
  })

  await PLUS.render([
    SubHeader('Upload SVG file'),
    UploadItem(
      {
        value: '$file1',
        multiple: false
      },
      'changeUpload'
    ),
    Textarea(
      {
        name: 'SVG Text',
        value: '$text1',
        placeholder: 'Please fill in.'
        // readonly: true
      },
      'changeInput'
    ),
    Container({
      style: {
        padding: '20px 0'
      },
      children: [
        Image({
          render: '# !!$src1',
          dragAndDrop: true,
          droppableType: ['level', 'container'],
          style: {
            cursor: 'alias',
            opacity: '0.6',
            transition: 'all 0.2s ease'
          },
          hoverStyle: {
            opacity: '1',
          },
          value: '$src1',
        }, 'dragend')
      ]
    }),
    Text({
      render: '# !!$src1',
      value: 'You can drag to add icons to current page.'
    })
  ])
}

let d = ''
let viewBox = '0 0 48 48'

export async function dragend(e: any) {
  let flag = await PLUS.withAccess([
    'CTTReadAccess', 'CTTWriteAccess',
    'ModelsReadAccess', 'ModelsWriteAccess',
  ])

  if (!flag) return PLUS.toast.warning('Lack of read/write access.')

  let path = d

  let { x, y, d: deg, target, width, height } = e.value

  let id = PLUS.suid('A')

  let parent: any = await PLUS.pullStruct(`CTT.T.HSS.${target}`)

  if (parent.type == 'unit') return console.log('The added type is incorrect.')

  PLUS.setStruct('CTT.T.HSS', {
    [id]: {
      name: 'icon',
      type: 'unit',
      lock: false,
      parent: target,
      children: [],
      content: 'base/icon',
      remarks: '',
      status: [
        {
          name: 'default',
          id: 'default',
          active: true,
          props: {
            option: {},
            style: {
              width,
              height,
              color: '#fff',
              fill: '#fff'
            },
            x, y, d: deg
          }
        }
      ],
      model: {
        viewBox: {
          value: viewBox,
          subscribe: '',
          ZI: 0
        },
        d: {
          value: path,
          subscribe: '',
          ZI: 0
        },
      },
      events: []
    },
    [target]: {
      ...parent,
      children: [
        ...parent.children,
        id
      ]
    }
  }).then(res => {
    if (res.code == 0) {
      PLUS.toast.success('Added components successfully.')
    }
  })
}

function transform(str: any) {
  try {
    d = str.match(/d="(.+?)"/g).map((v: any) => v.substring(3, v.length - 1)).filter((v: any) => v.length > 20).join(' ')
    viewBox = str.match(/viewBox="(.*?)"/)[1]
  } catch (e) {
    console.warn(e)

    PLUS.toast.error('Failed to parse content.')
  }

  let fill = '#fff'
  let p = `<path d="${d}" fill="${fill}"></path>`
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${p}</svg>`
  let src = 'data:image/svg+xml;base64,' + btoa(svg)

  PLUS.setState({
    'src1': src,
  })
}

export async function changeUpload(e: any) {
  let text = await e.value[0].text()
  let str = await pathThatSvg(text)

  PLUS.setState({
    'text1': text
  })

  transform(str)

  console.log('changeUpload', e)
}

export async function changeInput(e: any) {
  if (e.type == 'change') {
    console.log(e)

    try {
      let str = await pathThatSvg(e.value)
      transform(str)
    } catch (e) {
      PLUS.toast.error('SVG is not recognized.')
    }
  }
}
