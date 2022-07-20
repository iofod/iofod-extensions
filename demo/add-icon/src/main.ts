import * as PLUS from 'iofod-sdk'
import { copyright, json } from './pkg'

const { Text, Image, Link, Header, Container } = PLUS.components

var $

export async function main() {
  $ = await PLUS.init({
    state: {
    },
    persisted: true,
    version: '1.0.0'
  })

  let fill = '#fff'

  await PLUS.render([
    Header('Icons'),
    Container({
      style: {
        padding: '8px 16px',
        display: 'flex',
        flexWrap: 'wrap'
      },
      children: json.map(obj => {
        let { viewBox, path, name } = obj
        let p = `<path d="${path}" fill="${fill}"></path>`
        let src =
          'data:image/svg+xml;base64,' +
          btoa(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${p}</svg>`
          )

        return Container({
          style: {
            width: '33.3%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5px 0'
          },
          children: [
            Image(
              {
                dragAndDrop: true,
                droppableType: ['level', 'container'],
                style: {
                  width: '36px',
                  margin: '0 10px',
                  cursor: 'alias',
                  opacity: '0.6',
                  transition: 'all 0.2s ease'
                },
                hoverStyle: {
                  opacity: '1'
                },
                payload: obj,
                value: src
              },
              'dragend'
            ),
            Text({
              style: {
                opacity: '0.8'
              },
              value: name
            })
          ]
        })
      })
    }),
    Link({
      name: copyright[0],
      value: copyright[1]
    })
  ])
}

export async function dragend(e: any) {
  let { viewBox, path, name } = e.$data.payload

  let flag = await PLUS.withAccess([
    'CTTReadAccess',
    'CTTWriteAccess',
    'ModelsReadAccess',
    'ModelsWriteAccess'
  ])

  if (!flag) return PLUS.toast.warning('Lack of read and write access.')

  let { x, y, d, target, struct, width, height } = e.value

  let id = PLUS.suid('A')

  let parent = struct

  if (parent.type == 'unit') return console.log('The added type is not correct.')

  PLUS.setStruct('CTT.T.HSS', {
    [id]: {
      name,
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
            x,
            y,
            d
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
        }
      },
      events: []
    },
    [target]: {
      ...parent,
      children: [...parent.children, id]
    }
  }).then(res => {
    if (res.code == 0) {
      PLUS.toast.success('Added components successfully.')
    }
  })
}
