import * as PLUS from 'iofod-sdk'
import { COM } from './pkg'

const {
  Tabs,
  SubHeader,
  Container,
  IFstructContainer,
} = PLUS.components

var $

function calcList(part: string) {
  let list = COM[part]

  return list.map((obj: any) => {
    let { type, tree, scale = 1.0 } = obj

    let name = type
      .split('-')
      .slice(1)
      .join('-')
      .toLowerCase()
      .replace(/( |^)[a-z]/g, (L: string) => L.toUpperCase())

    return Container({
      children: [
        SubHeader(name),
        IFstructContainer(
          {
            dragAndDrop: true,
            style: {
              cursor: 'alias',
              opacity: '0.8',
              transition: 'all 0.2s ease',
              filter: 'grayscale(10%)',
              transform: `scale(${scale})`,
              transformOrigin: 'left top'
            },
            payload: { type },
            hoverStyle: {
              filter: 'grayscale(0%)',
              opacity: '1',
            },
            value: tree,
          },
          'dragend'
        ),
      ],
    })
  })
}

export async function main() {
  $ = await PLUS.init({
    state: {
      tabType: 'base',
    },
    persisted: true,
    version: '1.0.0',
    size: 320,
  })

  await PLUS.render([
    Tabs({
      value: '$tabType',
      list: {
        base: 'Base',
        form: 'Form',
        combined: 'Combined'
      },
      sticky: true,
    }),

    Container({
      render: '# $tabType == "base"',
      children: calcList('base'),
    }),

    Container({
      render: '# $tabType == "form"',
      children: calcList('form'),
    }),

    Container({
      render: '# $tabType == "combined"',
      children: calcList('combined'),
    }),

    Container({ style: { padding: '4px' }, children: [] }),
  ])
}

export async function dragend() {
}
