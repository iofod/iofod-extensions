export const COM: any = {
  base: [
    {
      type: 'md-tab',
      scale: 0.88,
      tree: {
        md_tab: {
          name: 'md-tab',
          type: 'container',
          lock: false,
          parent: null,
          children: ['md_tab_line', 'md_tab_item'],
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
                  height: '48px',
                  backgroundColor: '#2196F3',
                  display: 'flex',
                  width: '320px',
                  justifyContent: 'flex-start',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            value: {
              value: 't1',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            active: {
              value: 0,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_tab_line: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'md_tab',
          children: [],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    marginLeft: "# $ml + 'px'",
                  },
                },
                style: {
                  backgroundColor: '#FF01BE',
                  height: '2px',
                  width: '90px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 0,
                y: 46,
              },
            },
          ],
          model: {
            ml: {
              value: '# $active<md_tab> * $itemWidth<md_tab_item>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_tab_item: {
          name: 'item',
          type: 'unit',
          lock: false,
          parent: 'md_tab',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    width: "# $itemWidth + 'px'",
                  },
                },
                style: {
                  width: '90px',
                  position: 'static',
                  height: '48px',
                  lineHeight: '48px',
                  textAlign: 'center',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.66)',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 164,
                y: 15,
              },
            },
            {
              name: 'default:$i==$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  color: '#FFFFFF',
                },
              },
            },
          ],
          model: {
            copy: {
              value: '3',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            index: {
              value: [0, 1, 2],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            active: {
              value: '$active<md_tab>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            msg: {
              value: ['item1', 'item2', 'item3'],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            tab: {
              value: ['t1', 't2', 't3'],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            itemWidth: {
              value: 90,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'tap',
              actions: [
                {
                  fn: 'getModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'index',
                    exp: 'n',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'md_tab',
                    key: 'active',
                    exp: 'N',
                    value: '$response',
                  },
                },
                {
                  fn: 'getModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'tab',
                    exp: 'n',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'md_tab',
                    key: 'value',
                    exp: 'N',
                    value: '$response',
                  },
                },
              ],
              gesture: true,
              expand: true,
            },
          ],
        },
      },
    },
    {
      type: 'md-tab-icon',
      scale: 0.88,
      tree: {
        md_tab_icon: {
          name: 'md-tab-icon',
          type: 'container',
          lock: false,
          parent: null,
          children: ['C55265320x6y_0_line', 'md_tab_icon_item'],
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
                  height: '72px',
                  backgroundColor: '#2196F3',
                  display: 'flex',
                  width: '320px',
                  justifyContent: 'flex-start',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            value: {
              value: 't2',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            active: {
              value: 1,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        C55265320x6y_0_line: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'md_tab_icon',
          children: [],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    marginLeft: "# $ml + 'px'",
                  },
                },
                style: {
                  backgroundColor: '#FF01BE',
                  height: '2px',
                  width: '90px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 0,
                y: 70,
              },
            },
          ],
          model: {
            ml: {
              value: '# $active<md_tab_icon> * $itemWidth<md_tab_icon_item>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_tab_icon_item: {
          name: 'item',
          type: 'container',
          lock: true,
          parent: 'md_tab_icon',
          children: ['md_tab_icon_label', 'md_tab_icon_ico'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    width: "# $itemWidth + 'px'",
                  },
                },
                style: {
                  width: '90px',
                  position: 'static',
                  height: '72px',
                  lineHeight: '48px',
                  textAlign: 'center',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.66)',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            copy: {
              value: '3',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            active: {
              value: '$active<md_tab_icon>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            index: {
              value: [0, 1, 2],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            tab: {
              value: ['t1', 't2', 't3'],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            itemWidth: {
              value: 90,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'tap',
              actions: [
                {
                  fn: 'getModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'index',
                    exp: 'n',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'md_tab_icon',
                    key: 'active',
                    exp: 'N',
                    value: '$response',
                  },
                },
                {
                  fn: 'getModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'tab',
                    exp: 'n',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'md_tab_icon',
                    key: 'value',
                    exp: 'N',
                    value: '$response',
                  },
                },
              ],
              gesture: true,
              expand: true,
            },
          ],
        },
        md_tab_icon_label: {
          name: 'txt',
          type: 'unit',
          lock: false,
          parent: 'md_tab_icon_item',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.66)',
                  width: '100%',
                  textAlign: 'center',
                },
                x: 0,
                y: 44,
              },
            },
            {
              name: 'default:$i==$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  fontSize: '14px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                },
              },
            },
          ],
          model: {
            msg: {
              value: ['item1', 'item2', 'item3'],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            active: {
              value: '$active<md_tab_icon>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_tab_icon_ico: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'md_tab_icon_item',
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
                  color: 'rgba(255,255,255,0.66)',
                  fill: 'rgba(255,255,255,0.66)',
                  width: '27px',
                  height: '27px',
                },
                x: 32,
                y: 13,
              },
            },
            {
              name: 'default:$i==$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  color: '#FFFFFF',
                  fill: '#FFFFFF',
                },
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value: [
                'M44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM25 16h-3v12l9.49 5.71L33 31.24l-8-4.74V16zm-1.01-8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14z',
                'M33 24c2.76 0 4.98-2.24 4.98-5s-2.22-5-4.98-5c-2.76 0-5 2.24-5 5s2.24 5 5 5zm-15-2c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm15 6c-3.67 0-11 1.84-11 5.5V38h22v-4.5c0-3.66-7.33-5.5-11-5.5zm-15-2c-4.67 0-14 2.34-14 7v5h14v-4.5c0-1.7.67-4.67 4.74-6.94C21 26.19 19.31 26 18 26z',
                'M25.99 6C16.04 6 8 14.06 8 24H2l7.79 7.79.14.29L18 24h-6c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14c-3.87 0-7.36-1.58-9.89-4.11l-2.83 2.83C16.53 39.98 21.02 42 25.99 42 35.94 42 44 33.94 44 24S35.94 6 25.99 6zM24 16v10l8.56 5.08L34 28.65l-7-4.15V16h-3z',
              ],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            active: {
              value: '$active<md_tab_icon>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'md-sub-header',
      tree: {
        md_sub_header: {
          name: 'md-sub-header',
          type: 'unit',
          lock: false,
          parent: null,
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  width: '100%',
                  lineHeight: '48px',
                  height: '48px',
                  padding: '0px 0px 0px 16px',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.7)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Sub Header',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'md-button-raised',
      tree: {
        md_button_raised: {
          name: 'md-button-raised',
          type: 'unit',
          lock: false,
          parent: null,
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    cursor: 'pointer',
                  },
                },
                style: {
                  width: '87px',
                  height: '36px',
                  lineHeight: '36px',
                  textAlign: 'center',
                  backgroundColor: '#E8E8E8',
                  boxShadow:
                    '0px 2px 2px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset, 0px 1px 5px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset',
                  fontSize: '14px',
                  color: '#000000',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  borderRadius: '2px 2px 2px 2px',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {
                  customKeys: {},
                },
                style: {
                  boxShadow:
                    '0px 4px 5px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 1px 10px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset, 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset',
                },
              },
            },
          ],
          model: {
            msg: {
              value: 'BUTTON',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
      },
    },
    {
      type: 'md-button-color',
      tree: {
        md_button_color: {
          name: 'md-button-color',
          type: 'unit',
          lock: false,
          parent: null,
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    cursor: 'pointer',
                  },
                },
                style: {
                  width: '87px',
                  height: '36px',
                  lineHeight: '36px',
                  textAlign: 'center',
                  backgroundColor: '#283593',
                  boxShadow:
                    '0px 2px 2px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset, 0px 1px 5px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  borderRadius: '2px 2px 2px 2px',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {
                  customKeys: {
                    cursor: 'pointer',
                  },
                },
                style: {
                  backgroundColor: '#3F51B5',
                  boxShadow:
                    '0px 4px 5px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 10px 1px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset, 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset',
                },
              },
            },
          ],
          model: {
            msg: {
              value: 'BUTTON',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: true,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
      },
    },
    {
      type: 'md-button-flat',
      tree: {
        md_button_flat: {
          name: 'md-button-flat',
          type: 'unit',
          lock: false,
          parent: null,
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    cursor: 'pointer',
                  },
                },
                style: {
                  width: '87px',
                  height: '36px',
                  lineHeight: '36px',
                  textAlign: 'center',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  borderRadius: '2px 2px 2px 2px',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {
                  customKeys: {},
                },
                style: {
                  backgroundColor: 'rgba(255,255,255,0.09)',
                },
              },
            },
          ],
          model: {
            msg: {
              value: 'BUTTON',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
      },
    },
    {
      type: 'md-button-icon-rect',
      tree: {
        md_button_icon_rect: {
          name: 'md-button-icon-rect',
          type: 'container',
          lock: true,
          parent: null,
          children: ['md_button_icon_rect_icon', 'md_button_icon_rect_label'],
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
                  width: '100px',
                  height: '36px',
                  lineHeight: '36px',
                  textAlign: 'center',
                  backgroundColor: '#F9A825',
                  boxShadow:
                    '0px 2px 2px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset, 0px 1px 5px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  borderRadius: '2px 2px 2px 2px',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: '#FDD835',
                  boxShadow:
                    '0px 4px 5px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 10px 1px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset, 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset',
                },
              },
            },
          ],
          model: {
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
        md_button_icon_rect_icon: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'md_button_icon_rect',
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
                  color: '#FFFFFF',
                  fill: '#FFFFFF',
                  width: '25px',
                  height: '25px',
                },
                d: 0,
                x: 8,
                y: 5,
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M24 34.54L36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        md_button_icon_rect_label: {
          name: 'label',
          type: 'unit',
          lock: false,
          parent: 'md_button_icon_rect',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  fontSize: '14px',
                  color: '#FFFFFF',
                  textAlign: 'left',
                  width: '58px',
                },
                d: 0,
                x: 39,
                y: 7,
              },
            },
          ],
          model: {
            msg: {
              value: 'STAR',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'md-button-fab',
      tree: {
        md_button_fab: {
          name: 'md-button-fab',
          type: 'unit',
          lock: false,
          parent: null,
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
                  borderRadius: '40px 40px 40px 40px',
                  backgroundColor: '#E8E8E8',
                  boxShadow:
                    '0px 1px 2px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset, 0px 1px 1px 0px rgba(0,0,0,0.24), 0px 0px 0px 0px #000 inset',
                  padding: '8px 8px 8px 8px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: '#D5D5D5',
                  boxShadow:
                    '0px 4px 5px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 1px 10px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset, 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset',
                },
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value: 'M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
      },
    },
    {
      type: 'md-button-fab-color',
      tree: {
        md_button_fab_color: {
          name: 'md-button-fab-color',
          type: 'unit',
          lock: false,
          parent: null,
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
                  borderRadius: '40px 40px 40px 40px',
                  backgroundColor: '#FF4081',
                  boxShadow:
                    '0px 1px 2px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset, 0px 1px 1px 0px rgba(0,0,0,0.24), 0px 0px 0px 0px #000 inset',
                  padding: '8px 8px 8px 8px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  color: '#FFFFFF',
                  fill: '#FFFFFF',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  boxShadow:
                    '0px 4px 5px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 1px 10px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset, 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset',
                },
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value: 'M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
      },
    },
    {
      type: 'md-button-icon-flat',
      tree: {
        md_button_icon_flat: {
          name: 'md-button-icon-flat',
          type: 'unit',
          lock: false,
          parent: null,
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
                  borderRadius: '40px 40px 40px 40px',
                  padding: '8px 8px 8px 8px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  color: '#FF4081',
                  fill: '#FF4081',
                  backgroundColor: 'rgba(255,64,129,0)',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: 'rgba(255,64,129,0.08)',
                },
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M13.25 21.59a30.12 30.12 0 0013.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49C35.1 30.6 37.51 31 40 31c1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2C21.22 42 6 26.78 6 8a2 2 0 012-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
      },
    },
    {
      type: 'md-chip',
      tree: {
        md_chip: {
          name: 'md-chip',
          type: 'container',
          lock: true,
          parent: null,
          children: ['md_chip_label', 'md_chip_icon'],
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
                  width: '146px',
                  height: '32px',
                  lineHeight: '32px',
                  textAlign: 'center',
                  backgroundColor: '#9CCC65',
                  boxShadow:
                    '0px 2px 2px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset, 0px 1px 5px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  borderRadius: '50px 50px 50px 50px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px 4px 4px 4px',
                  justifyContent: 'space-between',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: '#7CB342',
                  boxShadow:
                    '0px 4px 5px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 10px 1px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset, 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset',
                },
              },
            },
          ],
          model: {
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
        md_chip_label: {
          name: 'label',
          type: 'unit',
          lock: false,
          parent: 'md_chip',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  fontSize: '13px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  width: '102px',
                  position: 'static',
                  height: '22px',
                },
                d: 0,
                x: 39,
                y: 7,
              },
            },
          ],
          model: {
            msg: {
              value: 'Deletable Chip',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        md_chip_icon: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'md_chip',
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
                  color: 'rgba(255,255,255,0.7)',
                  fill: 'rgba(255,255,255,0.7)',
                  width: '24px',
                  height: '24px',
                  position: 'static',
                },
                d: 0,
                x: 8,
                y: 5,
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 27.17L31.17 34 24 26.83 16.83 34 14 31.17 21.17 24 14 16.83 16.83 14 24 21.17 31.17 14 34 16.83 26.83 24 34 31.17z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
  ],
  form: [
    {
      type: 'md-checkbox',
      tree: {
        md_checkbox: {
          name: 'md-checkbox',
          type: 'container',
          lock: true,
          parent: null,
          children: ['md_checkbox_label', 'md_checkbox_off', 'md_checkbox_on'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  ghost: false,
                },
                style: {
                  height: '36px',
                  width: '146px',
                },
                d: 0,
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$disabled',
              id: 1,
              active: true,
              props: {
                option: {
                  customKeys: {
                    cursor: 'not-allowed',
                  },
                },
                style: {
                  filter: 'grayscale(100%)',
                  opacity: 0.5,
                },
              },
            },
          ],
          model: {
            value: {
              value: true,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            disabled: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'tap',
              actions: [
                {
                  fn: 'assert',
                  active: true,
                  exp: '$disabled',
                  O: [
                    {
                      fn: 'ended',
                      active: true,
                      param: 'return',
                    },
                  ],
                  X: [],
                  expand: true,
                },
                {
                  fn: 'assert',
                  active: true,
                  exp: '$value == true',
                  O: [
                    {
                      fn: 'setModel',
                      active: true,
                      params: {
                        target: '$current',
                        key: 'value',
                        exp: 'N',
                        value: false,
                      },
                    },
                  ],
                  X: [
                    {
                      fn: 'setModel',
                      active: true,
                      params: {
                        target: '$current',
                        key: 'value',
                        exp: 'N',
                        value: true,
                      },
                    },
                  ],
                  expand: true,
                },
              ],
              gesture: true,
              expand: true,
            },
          ],
        },
        md_checkbox_label: {
          name: 'label',
          type: 'unit',
          lock: false,
          parent: 'md_checkbox',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  color: '#FFFFFF',
                  fontSize: '16px',
                  width: '109px',
                  height: '22px',
                },
                d: 0,
                x: 29,
                y: 7,
              },
            },
          ],
          model: {
            msg: {
              value: 'Checkbox',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        md_checkbox_off: {
          name: 'icon_off',
          type: 'unit',
          lock: false,
          parent: 'md_checkbox',
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
                  width: '20px',
                  height: '20px',
                  fill: 'rgba(255,255,255,0.7)',
                },
                x: 0,
                y: 8,
              },
            },
            {
              name: 'default:$off',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  opacity: 0,
                },
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M38 10v28H10V10h28m0-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z',
              subscribe: '',
              ZI: 0,
            },
            off: {
              value: '# $value<md_checkbox>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_checkbox_on: {
          name: 'icon_on',
          type: 'unit',
          lock: false,
          parent: 'md_checkbox',
          children: [],
          content: 'base/icon',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  V: true,
                },
                style: {
                  width: '20px',
                  height: '20px',
                  fill: '#2196F3',
                  display: 'block',
                  transition: 'all 0.15s cubic-bezier(0.23,1,0.32,1)',
                },
                x: 0,
                y: 8,
                s: 1,
              },
            },
            {
              name: 'default:$on',
              id: 1,
              active: true,
              props: {
                option: {
                  V: true,
                },
                style: {
                  fill: '#2196F3',
                },
                s: 100,
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM20 34L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z',
              subscribe: '',
              ZI: 0,
            },
            on: {
              value: '# $value<md_checkbox>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'md-switch',
      tree: {
        md_switch: {
          name: 'md-switch',
          type: 'container',
          lock: true,
          parent: null,
          children: ['md_track', 'md_thumb'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  V: true,
                },
                style: {
                  width: '42px',
                  height: '24px',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$disabled',
              id: 1,
              active: true,
              props: {
                option: {
                  V: true,
                  customKeys: {
                    cursor: 'not-allowed',
                  },
                },
                style: {
                  opacity: 0.5,
                  filter: 'grayscale(100%)',
                },
              },
            },
          ],
          model: {
            value: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            disabled: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              name: 'click - 点击',
              event: 'click',
              actions: [
                {
                  fn: 'assert',
                  active: true,
                  exp: '$disabled == true',
                  O: [
                    {
                      fn: 'ended',
                      active: true,
                      param: 'return',
                    },
                  ],
                  X: [],
                  expand: true,
                },
                {
                  fn: 'assert',
                  active: true,
                  exp: '$value == false',
                  O: [
                    {
                      fn: 'setModel',
                      active: true,
                      params: {
                        target: '$current',
                        key: 'value',
                        exp: 'N',
                        value: true,
                      },
                    },
                  ],
                  X: [
                    {
                      fn: 'setModel',
                      active: true,
                      params: {
                        target: '$current',
                        key: 'value',
                        exp: 'N',
                        value: false,
                      },
                    },
                  ],
                  expand: true,
                },
              ],
              native: true,
              expand: true,
              select: [],
            },
          ],
        },
        md_track: {
          name: 'track',
          type: 'container',
          lock: false,
          parent: 'md_switch',
          children: [],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: false,
              props: {
                option: {
                  V: true,
                },
                style: {
                  width: '72px',
                  height: '28px',
                },
                d: 0,
                x: 0,
                y: 0,
              },
            },
            {
              name: 'state',
              id: 2,
              active: true,
              props: {
                option: {
                  V: true,
                },
                style: {
                  backgroundColor: '#808080',
                  width: '36px',
                  height: '12px',
                  borderRadius: '14px 14px 14px 14px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 2,
                y: 6,
              },
            },
            {
              name: 'state:$value',
              id: 1,
              active: true,
              props: {
                option: {
                  V: true,
                },
                style: {
                  backgroundColor: 'rgba(33,150,243,0.5)',
                },
              },
            },
          ],
          model: {
            value: {
              value: '$value<md_switch>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_thumb: {
          name: 'thumb',
          type: 'container',
          lock: false,
          parent: 'md_switch',
          children: [],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: false,
              props: {
                option: {
                  V: true,
                  customKeys: {
                    'box-shadow':
                      '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
                  },
                },
                style: {
                  backgroundColor: '#FAFAFA',
                  width: '40px',
                  height: '40px',
                  borderRadius: '20px 20px 20px 20px',
                },
                d: 0,
                x: 18,
                y: -8,
              },
            },
            {
              name: 'state',
              id: 1,
              active: true,
              props: {
                option: {
                  V: true,
                  customKeys: {},
                },
                style: {
                  backgroundColor: '#FAFAFA',
                  width: '20px',
                  height: '20px',
                  borderRadius: '20px 20px 20px 20px',
                  boxShadow:
                    '0px 2px 1px -1px rgba(0,0,0,.2), 0px 0px 0px 0px #000 inset, 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 1px 2px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 2,
                y: 2,
              },
            },
            {
              name: 'state:$value',
              id: 2,
              active: true,
              props: {
                option: {
                  V: true,
                  customKeys: {},
                },
                style: {
                  backgroundColor: '#2196F3',
                },
                x: 18,
                y: 2,
              },
            },
          ],
          model: {
            value: {
              value: '$value<md_switch>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'md-radios',
      scale: 0.9,
      tree: {
        md_radios: {
          name: 'md-radios',
          type: 'container',
          lock: false,
          parent: null,
          children: ['md_radios_item'],
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
                  height: '36px',
                  width: '347px',
                  display: 'flex',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$disabled',
              id: 1,
              active: true,
              props: {
                option: {
                  customKeys: {
                    cursor: 'not-allowed',
                  },
                },
                style: {
                  height: '36px',
                  width: '347px',
                  display: 'flex',
                  opacity: 0.5,
                  filter: 'grayscale(100%)',
                },
                d: 0,
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            value: {
              value: 'r1',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            active: {
              value: 0,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            disabled: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_radios_item: {
          name: 'radios',
          type: 'container',
          lock: true,
          parent: 'md_radios',
          children: ['md_radios_label', 'md_radios_off', 'md_radios_on'],
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
                  position: 'static',
                  height: '100%',
                  width: '106px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            copy: {
              value: '3',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            choose: {
              value: ['r1', 'r2', 'r3'],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            active: {
              value: '$active<md_radios>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            index: {
              value: [0, 1, 2],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            disabled: {
              value: '$disabled<md_radios>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'tap',
              actions: [
                {
                  fn: 'assert',
                  active: true,
                  exp: '$disabled',
                  O: [
                    {
                      fn: 'ended',
                      active: true,
                      param: 'return',
                    },
                  ],
                  X: [],
                  expand: true,
                },
                {
                  fn: 'getModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'index',
                    exp: 'n',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'md_radios',
                    key: 'active',
                    exp: 'N',
                    value: '$response',
                  },
                },
                {
                  fn: 'getModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'choose',
                    exp: 'n',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'md_radios',
                    key: 'value',
                    exp: 'N',
                    value: '$response',
                  },
                },
              ],
              gesture: true,
              expand: true,
            },
          ],
        },
        md_radios_label: {
          name: 'label',
          type: 'unit',
          lock: false,
          parent: 'md_radios_item',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  color: '#FFFFFF',
                  fontSize: '16px',
                  width: '72px',
                  height: '22px',
                },
                x: 27,
                y: 7,
              },
            },
          ],
          model: {
            msg: {
              value: ['Radio1', 'Radio2', 'Radio3'],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
          },
          events: [],
        },
        md_radios_off: {
          name: 'off',
          type: 'unit',
          lock: false,
          parent: 'md_radios_item',
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
                  width: '20px',
                  height: '20px',
                  color: 'rgba(255,255,255,0.7)',
                  fill: 'rgba(255,255,255,0.7)',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 0,
                y: 8,
                s: 100,
              },
            },
            {
              name: 'default:$i==$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  fill: 'rgba(255,255,255,0.7)',
                },
                s: 1,
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: '$active<md_radios>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_radios_on: {
          name: 'on',
          type: 'unit',
          lock: false,
          parent: 'md_radios_item',
          children: [],
          content: 'base/icon',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  V: true,
                },
                style: {
                  width: '20px',
                  height: '20px',
                  fill: '#2196F3',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 0,
                y: 8,
                s: 1,
              },
            },
            {
              name: 'default:$i==$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  fill: '#2196F3',
                },
                s: 100,
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: '$active<md_radios>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'md-slider',
      scale: 0.9,
      tree: {
        md_slider: {
          name: 'md-slider',
          type: 'container',
          lock: true,
          parent: null,
          children: ['md_slider_wrap', 'md_slider_controller'],
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
                  width: '300px',
                  height: '24px',
                  padding: '0px 12px 0px 12px',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$disabled',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  height: '24px',
                  padding: '0px 12px 0px 12px',
                  opacity: 0.5,
                  filter: 'grayscale(100%)',
                },
                d: 0,
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            value: {
              value: 30,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            disabled: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_slider_wrap: {
          name: 'wrap',
          type: 'container',
          lock: true,
          parent: 'md_slider',
          children: ['md_slider_progress'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  V: true,
                },
                style: {
                  position: 'static',
                  width: '100%',
                  backgroundColor: '#757575',
                  height: '2px',
                  margin: '11px 0px 0px 0px',
                },
                x: 9,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_slider_progress: {
          name: 'progress',
          type: 'container',
          lock: false,
          parent: 'md_slider_wrap',
          children: [],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    width: "# $pl + '%'",
                  },
                },
                style: {
                  backgroundColor: '#FF4081',
                  height: '2px',
                  width: '30px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<md_slider>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_slider_controller: {
          name: 'controller',
          type: 'container',
          lock: true,
          parent: 'md_slider',
          children: ['md_slider_ball'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    margin: "# '0px 0px 0px ' + $pl + 'px'",
                  },
                },
                style: {
                  width: '24px',
                  height: '24px',
                  opacity: 1,
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<md_slider> * 3 * 0.92',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            disabled: {
              value: '$disabled<md_slider>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'assert',
                  active: true,
                  exp: '$disabled',
                  O: [
                    {
                      fn: 'ended',
                      active: true,
                      param: 'return',
                    },
                  ],
                  X: [],
                  expand: true,
                },
                {
                  fn: 'useInteractionFlow',
                  active: true,
                  params: {
                    target: 'md_slider',
                    state: '',
                    key: 'value',
                    exp: 'Math.round($dx / (3 * 0.92 * $ds))',
                    map: 'RX.Limit(0, 100)',
                    async: false,
                  },
                },
              ],
              expand: true,
            },
          ],
        },
        md_slider_ball: {
          name: 'ball',
          type: 'container',
          lock: false,
          parent: 'md_slider_controller',
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
                  backgroundColor: '#FF4081',
                  width: '12px',
                  height: '12px',
                  borderRadius: '12px 12px 12px 12px',
                },
                x: 6,
                y: 6,
              },
            },
            {
              name: 'default:$value<md_slider> == 0',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: '#585858',
                  borderWidth: '1px',
                  borderColor: '#AFA7A7',
                },
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'md-progress',
      scale: 0.9,
      tree: {
        md_progress: {
          name: 'md-progress',
          type: 'container',
          lock: true,
          parent: null,
          children: ['md_progress_wrap'],
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
                  height: '24px',
                  padding: '0px 12px 0px 12px',
                  width: '292px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            value: {
              value: 64,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_progress_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'md_progress',
          children: ['md_progress_bar'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  V: true,
                },
                style: {
                  position: 'static',
                  width: '100%',
                  backgroundColor: '#456246',
                  height: '4px',
                  margin: '11px 0px 0px 0px',
                },
                x: 9,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_progress_bar: {
          name: 'progress',
          type: 'container',
          lock: false,
          parent: 'md_progress_wrap',
          children: [],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    width: "# $pl + '%'",
                  },
                },
                style: {
                  backgroundColor: '#4CAF50',
                  height: '4px',
                  width: '30px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<md_progress>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'md-text-field',
      tree: {
        md_text_field: {
          name: 'md-text-field',
          type: 'container',
          lock: true,
          parent: null,
          children: ['md_text_field_input', 'md_text_field_wrap'],
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
                  width: '256px',
                  height: '39px',
                  display: 'block',
                  justifyContent: 'center',
                  flexDirection: 'row-reverse',
                  flexWrap: 'wrap',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            state: {
              value: 'input',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            disabled: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_text_field_input: {
          name: 'input',
          type: 'unit',
          lock: false,
          parent: 'md_text_field',
          children: [],
          content: 'base/input',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  width: '100%',
                  height: '32px',
                  lineHeight: '32px',
                  color: '#FFFFFF',
                  position: 'absolute',
                  fontSize: '16px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            name: {
              value: '',
              subscribe: '',
              ZI: 0,
            },
            type: {
              value: 'text',
              subscribe: '',
              ZI: 0,
            },
            placeholder: {
              value: 'Text...',
              subscribe: '',
              ZI: 0,
            },
            inputValue: {
              value: '',
              subscribe: '',
              ZI: 0,
            },
            value: {
              value: '',
              subscribe: '',
              ZI: 0,
            },
            disabled: {
              value: '# $disabled<md_text_field>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'focus',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'md_text_field',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: true,
            },
            {
              event: 'blur',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'md_text_field',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: true,
            },
          ],
        },
        md_text_field_wrap: {
          name: 'wrap',
          type: 'container',
          lock: true,
          parent: 'md_text_field',
          children: ['md_text_field_line'],
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
                  width: '100%',
                  height: '2px',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: '#757575',
                },
                x: 0,
                y: 32,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_text_field_line: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'md_text_field_wrap',
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
                  backgroundColor: '#e7e7e7',
                  position: 'static',
                  height: '2px',
                  width: '0%',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: '#00BCD4',
                  width: '100%',
                },
              },
            },
          ],
          model: {
            active: {
              value: '$active<md_text_field>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'md-text-field-float',
      tree: {
        md_text_field_float: {
          name: 'md-text-field-float',
          type: 'container',
          lock: true,
          parent: null,
          children: [
            'md_text_field_float_label',
            'md_text_field_float_input',
            'md_text_field_float_wrap',
          ],
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
                  width: '256px',
                  height: '57px',
                  display: 'block',
                  justifyContent: 'center',
                  flexDirection: 'row-reverse',
                  flexWrap: 'wrap',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            state: {
              value: 'input',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            disabled: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_text_field_float_label: {
          name: 'label',
          type: 'unit',
          lock: false,
          parent: 'md_text_field_float',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  color: 'rgba(255,255,255,0.5)',
                  width: '200px',
                  height: '32px',
                  fontSize: '16px',
                  lineHeight: '32px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 0,
                y: 20,
              },
            },
            {
              name: 'default:$active||$isFill',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  color: '#00BCD4',
                },
                x: -25,
                y: 1,
                s: 75,
              },
            },
          ],
          model: {
            msg: {
              value: 'Label Float',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: '$active<md_text_field_float>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            isFill: {
              value: '# !!$value<md_text_field_float_input>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_text_field_float_input: {
          name: 'input',
          type: 'unit',
          lock: false,
          parent: 'md_text_field_float',
          children: [],
          content: 'base/input',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  width: '100%',
                  height: '32px',
                  lineHeight: '32px',
                  color: '#FFFFFF',
                  position: 'absolute',
                  fontSize: '16px',
                },
                x: 0,
                y: 20,
              },
            },
          ],
          model: {
            name: {
              value: '',
              subscribe: '',
              ZI: 0,
            },
            type: {
              value: 'text',
              subscribe: '',
              ZI: 0,
            },
            placeholder: {
              value: '',
              subscribe: '',
              ZI: 0,
            },
            inputValue: {
              value: '',
              subscribe: '',
              ZI: 0,
            },
            value: {
              value: '',
              subscribe: '',
              ZI: 0,
            },
            disabled: {
              value: '# $disabled<md_text_field_float>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'focus',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'md_text_field_float',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'blur',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'md_text_field_float',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
        md_text_field_float_wrap: {
          name: 'wrap',
          type: 'container',
          lock: true,
          parent: 'md_text_field_float',
          children: ['md_text_field_float_line'],
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
                  width: '100%',
                  height: '2px',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: '#757575',
                },
                x: 0,
                y: 52,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_text_field_float_line: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'md_text_field_float_wrap',
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
                  backgroundColor: '#e7e7e7',
                  position: 'static',
                  height: '2px',
                  width: '0%',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active==true',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: '#00BCD4',
                  width: '100%',
                },
              },
            },
          ],
          model: {
            active: {
              value: '$active<md_text_field_float>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'md-table',
      scale: 0.85,
      tree: {
        md_table: {
          name: 'md-table',
          type: 'container',
          lock: false,
          parent: null,
          children: ['md_table_thead', 'md_table_tbody'],
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
                  width: '334px',
                  backgroundColor: '#2F2F2F',
                  height: '209px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_table_thead: {
          name: 'thead',
          type: 'container',
          lock: true,
          parent: 'md_table',
          children: ['md_table_th'],
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
                  position: 'static',
                  width: '100%',
                  height: '56px',
                  lineHeight: '48px',
                  display: 'flex',
                  borderWidth: '0px 0px 1px 0px',
                  borderColor: 'rgba(255,255,255,0.3)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_table_th: {
          name: 'th',
          type: 'unit',
          lock: false,
          parent: 'md_table_thead',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  position: 'static',
                  height: '56px',
                  lineHeight: '48px',
                  color: '#FFFFFF',
                  width: '80px',
                  fontSize: '12px',
                  padding: '0px 18px 0px 18px',
                  textAlign: 'right',
                },
                x: 49,
                y: 21,
              },
            },
            {
              name: 'default:$0',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  width: '160px',
                  textAlign: 'left',
                },
              },
            },
          ],
          model: {
            msg: {
              value: ['Material', 'Quantity', 'Price'],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            copy: {
              value: '3',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        md_table_tbody: {
          name: 'tbody',
          type: 'container',
          lock: false,
          parent: 'md_table',
          children: ['md_table_tr'],
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
                  position: 'static',
                  width: '100%',
                  height: '151px',
                  overflow: 'auto',
                  overflowX: 'hidden',
                  overflowY: 'auto',
                },
                x: 8,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_table_tr: {
          name: 'tr',
          type: 'container',
          lock: true,
          parent: 'md_table_tbody',
          children: ['md_table_td'],
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
                  position: 'static',
                  width: '100%',
                  height: '48px',
                  lineHeight: '48px',
                  display: 'flex',
                  borderWidth: '0px 0px 1px 0px',
                  borderColor: 'rgba(255,255,255,0.3)',
                },
                x: 15,
                y: 10,
              },
            },
            {
              name: 'default:$i==$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: '#292929',
                },
              },
            },
          ],
          model: {
            copy: {
              value: '3',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            active: {
              value: -1,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'getIndex',
                  active: true,
                  param: '-',
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: '$response',
                  },
                },
              ],
              expand: true,
            },
          ],
        },
        md_table_td: {
          name: 'td',
          type: 'unit',
          lock: false,
          parent: 'md_table_tr',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  position: 'static',
                  height: '48px',
                  lineHeight: '48px',
                  color: '#FFFFFF',
                  width: '80px',
                  fontSize: '12px',
                  padding: '0px 18px 0px 18px',
                  textAlign: 'right',
                },
                x: 11,
                y: 11,
              },
            },
            {
              name: 'default:$N:$0',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  width: '160px',
                  textAlign: 'left',
                },
              },
            },
          ],
          model: {
            msg: {
              value: [
                ['Frozen Yogurt', '159', '6'],
                ['Ice cream sandwich', '237', '9'],
                ['Eclair', '262', '16'],
                ['Cupcake', '305', '3.7'],
                ['Gingerbread', '356', '16'],
              ],
              subscribe: '',
              ZI: 2,
              RM: true,
            },
            copy: {
              value: '3',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
      },
    },
  ],
  combined: [
    {
      type: 'md-meau',
      scale: 0.81,
      tree: {
        md_meau: {
          name: 'md-meau',
          type: 'container',
          lock: false,
          parent: null,
          children: ['md_meau_wrap', 'md_meau_ball'],
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
                  width: '350px',
                  height: '81px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_meau_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'md_meau',
          children: ['md_meau_ico1', 'md_meau_wrap_right'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  V: true,
                },
                style: {
                  backgroundColor: '#00897B',
                  height: '53px',
                  width: '350px',
                  padding: '4px 4px 4px 4px',
                },
                x: 0,
                y: 27,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_meau_ico1: {
          name: 'md-button-icon-flat',
          type: 'unit',
          lock: false,
          parent: 'md_meau_wrap',
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
                  position: 'static',
                  borderRadius: '40px 40px 40px 40px',
                  padding: '8px 8px 8px 8px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  color: '#FFFFFF',
                  fill: '#FFFFFF',
                  backgroundColor: 'rgba(255,64,129,0)',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: 'rgba(255,64,129,0.08)',
                },
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
        md_meau_wrap_right: {
          name: 'right',
          type: 'container',
          lock: false,
          parent: 'md_meau_wrap',
          children: ['md_meau_ico2', 'md_meau_ico3'],
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
                  width: '95px',
                  height: '45px',
                  display: 'flex',
                  justifyContent: 'space-between',
                },
                d: 0,
                x: 247,
                y: 4,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_meau_ico2: {
          name: 'md-button-icon-flat',
          type: 'unit',
          lock: false,
          parent: 'md_meau_wrap_right',
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
                  position: 'static',
                  borderRadius: '40px 40px 40px 40px',
                  padding: '8px 8px 8px 8px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  color: '#FFFFFF',
                  fill: '#FFFFFF',
                  backgroundColor: 'rgba(255,64,129,0)',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: 'rgba(255,64,129,0.08)',
                },
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0a9 9 0 11.001-18.001A9 9 0 0119 28z',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
        md_meau_ico3: {
          name: 'md-button-icon-flat',
          type: 'unit',
          lock: false,
          parent: 'md_meau_wrap_right',
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
                  position: 'static',
                  borderRadius: '40px 40px 40px 40px',
                  padding: '8px 8px 8px 8px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  color: '#FFFFFF',
                  fill: '#FFFFFF',
                  backgroundColor: 'rgba(255,64,129,0)',
                  width: '45px',
                  height: '45px',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: 'rgba(255,64,129,0.08)',
                },
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M24 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
        md_meau_ball: {
          name: 'md-button-fab-color',
          type: 'unit',
          lock: false,
          parent: 'md_meau',
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
                  position: 'absolute',
                  borderRadius: '40px 40px 40px 40px',
                  backgroundColor: '#000000',
                  boxShadow:
                    '0px 1px 2px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset, 0px 1px 1px 0px rgba(0,0,0,0.24), 0px 0px 0px 0px #000 inset',
                  padding: '8px 8px 8px 8px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  color: '#FFFFFF',
                  fill: '#FFFFFF',
                },
                x: 153,
                y: 5,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  boxShadow:
                    '0px 4px 5px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 1px 10px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset, 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset',
                },
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 48 48',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value: 'M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
      },
    },
    {
      type: 'md-card',
      scale: 0.81,
      tree: {
        md_card: {
          name: 'md-card',
          type: 'container',
          lock: false,
          parent: null,
          children: [
            'md_card_media',
            'md_card_content',
            'md_card_p',
            'md_card_buttons',
          ],
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
                  backgroundColor: '#FFFFFF',
                  width: '344px',
                  borderRadius: '4px 4px 4px 4px',
                  boxShadow:
                    '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px #000 inset, 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px #000 inset, 0px 1px 3px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px #000 inset',
                  height: '384px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_card_media: {
          name: 'media',
          type: 'unit',
          lock: false,
          parent: 'md_card',
          children: [],
          content: 'base/photo',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  position: 'static',
                  height: '193px',
                  width: '100%',
                  objectFit: 'cover',
                  borderWidth: '1px',
                },
                x: 43,
                y: 31,
              },
            },
          ],
          model: {
            url: {
              value: 'https://static.iofod.cn/assets/iofod/photo.jpg',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [
            {
              event: 'click',
              name: 'click - router',
              native: true,
              actions: [
                {
                  active: true,
                  fn: 'router',
                  params: {
                    during: 300,
                    target: 'P560466230ej',
                    transition: 'slide',
                  },
                },
              ],
              expand: true,
            },
          ],
        },
        md_card_content: {
          name: 'content',
          type: 'container',
          lock: false,
          parent: 'md_card',
          children: ['md_card_h1', 'md_card_h2'],
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
                  position: 'static',
                  width: '100%',
                  height: '88px',
                  padding: '16px 16px 16px 16px',
                },
                x: 11,
                y: 212,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_card_h1: {
          name: 'h1',
          type: 'unit',
          lock: false,
          parent: 'md_card_content',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  position: 'static',
                  width: '259px',
                  height: '32px',
                  lineHeight: '32px',
                  letterSpacing: '1px',
                  fontWeight: 'bold',
                },
                x: 17,
                y: 30,
              },
            },
          ],
          model: {
            msg: {
              value: 'Card title',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        md_card_h2: {
          name: 'h2',
          type: 'unit',
          lock: false,
          parent: 'md_card_content',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  position: 'static',
                  height: '24px',
                  lineHeight: '24px',
                  fontSize: '14px',
                  color: '#989797',
                  width: '258px',
                  letterSpacing: '0px',
                },
                x: 16,
                y: 59,
              },
            },
          ],
          model: {
            msg: {
              value: 'Secondary text',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        md_card_p: {
          name: ' Supporting text',
          type: 'unit',
          lock: false,
          parent: 'md_card',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {},
                style: {
                  position: 'static',
                  height: '52px',
                  lineHeight: '24px',
                  fontSize: '14px',
                  color: '#989797',
                  width: '100%',
                  padding: '0px 16px 0px 16px',
                  letterSpacing: '0px',
                },
                x: 20,
                y: 300,
              },
            },
          ],
          model: {
            msg: {
              value:
                'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        md_card_buttons: {
          name: ' Buttons',
          type: 'container',
          lock: false,
          parent: 'md_card',
          children: ['md_card_action_1', 'md_card_action_2'],
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
                  position: 'static',
                  width: '195px',
                  height: '51px',
                  display: 'flex',
                  padding: '8px 8px 8px 8px',
                  justifyContent: 'space-between',
                },
                x: 35,
                y: 345,
              },
            },
          ],
          model: {},
          events: [],
        },
        md_card_action_1: {
          name: 'md-button-flat',
          type: 'unit',
          lock: false,
          parent: 'md_card_buttons',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    cursor: 'pointer',
                  },
                },
                style: {
                  width: '87px',
                  height: '36px',
                  lineHeight: '36px',
                  textAlign: 'center',
                  fontSize: '14px',
                  color: '#2196F3',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  position: 'static',
                  borderRadius: '2px 2px 2px 2px',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {
                  customKeys: {},
                },
                style: {
                  backgroundColor: 'rgba(33,150,243,0.15)',
                },
              },
            },
          ],
          model: {
            msg: {
              value: 'ACTION 1',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
        md_card_action_2: {
          name: 'md-button-flat',
          type: 'unit',
          lock: false,
          parent: 'md_card_buttons',
          children: [],
          content: 'base/text',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  customKeys: {
                    cursor: 'pointer',
                  },
                },
                style: {
                  width: '87px',
                  height: '36px',
                  lineHeight: '36px',
                  textAlign: 'center',
                  fontSize: '14px',
                  color: '#2196F3',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  position: 'static',
                  borderRadius: '2px 2px 2px 2px',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {
                  customKeys: {},
                },
                style: {
                  backgroundColor: 'rgba(33,150,243,0.15)',
                },
              },
            },
          ],
          model: {
            msg: {
              value: 'ACTION 2',
              subscribe: '',
              ZI: 0,
            },
            active: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [
            {
              event: 'pointerdown',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: true,
                  },
                },
              ],
              expand: false,
            },
            {
              event: 'pointerup',
              actions: [
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              expand: false,
            },
          ],
        },
      },
    },
  ],
}
