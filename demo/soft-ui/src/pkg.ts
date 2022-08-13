const COM: any = {
  base: [
    {
      type: 'Container - Flat',
      tree: {
        sf_tile_1: {
          name: 'sf-tile-1',
          type: 'container',
          lock: false,
          parent: null,
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
                  softui: [20, 0.2, 40, 0, 225],
                },
                style: {
                  width: '91px',
                  height: '86px',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundColor: '#FFFFFF',
                  boxShadow:
                    '-20px 20px 40px 0px #cccccc, 0px 0px 0px 0px #000 inset, 20px -20px 40px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Container - Concave',
      tree: {
        sf_tile_2: {
          name: 'sf-tile-2',
          type: 'container',
          lock: false,
          parent: null,
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
                  softui: [20, 0.2, 40, 2, 225],
                },
                style: {
                  width: '91px',
                  height: '86px',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundColor: '#FFFFFF',
                  boxShadow:
                    '-20px 20px 40px 0px #cccccc, 0px 0px 0px 0px #000 inset, 20px -20px 40px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                  backgroundImage:
                    'linear-gradient(225deg, #e6e6e6 0%, #ffffff 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Container - Convex',
      tree: {
        sf_tile_3: {
          name: 'sf-tile-3',
          type: 'container',
          lock: false,
          parent: null,
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
                  softui: [20, 0.2, 40, 3, 225],
                },
                style: {
                  width: '91px',
                  height: '86px',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundColor: '#FFFFFF',
                  boxShadow:
                    '-20px 20px 40px 0px #cccccc, 0px 0px 0px 0px #000 inset, 20px -20px 40px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                  backgroundImage:
                    'linear-gradient(225deg, #ffffff 0%, #e6e6e6 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Container - Pressed',
      tree: {
        sf_tile_4: {
          name: 'sf-tile-4',
          type: 'container',
          lock: false,
          parent: null,
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
                  softui: [4, 0.2, 15, 1, 225],
                },
                style: {
                  width: '91px',
                  height: '86px',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundColor: '#FFFFFF',
                  boxShadow:
                    '0px 0px 0px 0px #000, -4px 4px 15px 0px #cccccc inset, 0px 0px 0px 0px #000, 4px -4px 15px 0px #ffffff inset',
                  borderWidth: '2px',
                  borderColor: 'rgba(255,255,255,0.2)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Container - Simple',
      tree: {
        sf_tile_5: {
          name: 'sf-tile-5',
          type: 'container',
          lock: false,
          parent: null,
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
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '140px',
                  height: '90px',
                  boxShadow:
                    '10px 10px 20px 0px #b6bec5, 0px 0px 0px 0px #000 inset, -10px -10px 20px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '20px 20px 20px 20px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Container - Float',
      tree: {
        sf_tile_6: {
          name: 'sf-tile-6',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_tile_6_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '140px',
                  height: '90px',
                  boxShadow:
                    '10px 10px 20px 0px #b6bec5, 0px 0px 0px 0px #000 inset, -10px -10px 20px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '20px 20px 20px 20px',
                  padding: '4px 4px 4px 4px',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #C3D3E2FF 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_tile_6_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_tile_6',
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
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  borderRadius: '16px 16px 16px 16px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Container - Concave',
      tree: {
        sf_tile_7: {
          name: 'sf-tile-7',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_tile_7_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [9, 0.12, 7, 1, 145],
                },
                style: {
                  backgroundColor: '#E0EAF5',
                  width: '140px',
                  height: '90px',
                  borderRadius: '20px 20px 20px 20px',
                  borderWidth: '2px',
                  borderColor: '#E0EAF5',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #D0D8E1FF 100%)',
                  padding: '2px 2px 2px 2px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_tile_7_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_tile_7',
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
                  softui: [6, 0.1, 9, 1, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '100%',
                  boxShadow:
                    '0px 0px 0px 0px #000, 6px 6px 9px 0px #cdd5dd inset, 0px 0px 0px 0px #000, -6px -6px 9px 0px #fbffff inset',
                  borderRadius: '16px 16px 16px 16px',
                  position: 'static',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Container - Concave',
      tree: {
        sf_tile_8: {
          name: 'sf-tile-8',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_tile_8_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [9, 0.12, 7, 1, 145],
                },
                style: {
                  backgroundColor: '#E0EAF5',
                  width: '140px',
                  height: '90px',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #D0D8E1FF 100%)',
                  padding: '4px 4px 4px 4px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_tile_8_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_tile_8',
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
                  softui: [6, 0.1, 9, 1, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '100%',
                  boxShadow:
                    '0px 0px 0px 0px #000, 6px 6px 9px 0px #cdd5dd inset, 0px 0px 0px 0px #000, -6px -6px 9px 0px #fbffff inset',
                  borderRadius: '16px 16px 16px 16px',
                  position: 'static',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Container - Decoration',
      tree: {
        sf_deco: {
          name: 'sf-deco',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_deco_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '90px',
                  height: '90px',
                  boxShadow:
                    '5px 5px 10px 0px rgba(182,190,197,0.58), 0px 0px 0px 0px #000 inset, -5px -5px 10px 0px rgba(255,255,255,0.59), 0px 0px 0px 0px #000 inset',
                  borderRadius: '45px 45px 45px 45px',
                  padding: '3px 3px 3px 3px',
                  backgroundImage:
                    'linear-gradient(145deg, #FFFFFFFF 0%, #FFFFFFFF 6%, #FFFFFFFF 8%, #CEDFF1FF 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_deco_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_deco',
          children: ['sf_deco_inner'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E5EFFA',
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  borderRadius: '45px 45px 45px 45px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_deco_inner: {
          name: 'inner',
          type: 'container',
          lock: false,
          parent: 'sf_deco_wrap',
          children: ['sf_deco_inner_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '60px',
                  height: '60px',
                  borderRadius: '45px 45px 45px 45px',
                  padding: '3px 3px 3px 3px',
                  position: 'absolute',
                  backgroundImage:
                    'linear-gradient(-45deg, #FFFFFFFF 0%, #FFFFFFFF 16%, #FFFFFFFF 19%, #CEDFF1FF 100%)',
                },
                x: 12,
                y: 12,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_deco_inner_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_deco_inner',
          children: ['C79741483e25_4'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E6EFF9',
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  borderRadius: '45px 45px 45px 45px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        C79741483e25_4: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'sf_deco_inner_wrap',
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
                  width: '30px',
                  height: '30px',
                  fill: '#8093AD',
                },
                x: 12,
                y: 12,
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
                'M6 34v4h12v-4H6zm0-24v4h20v-4H6zm20 32v-4h16v-4H26v-4h-4v12h4zM14 18v4H6v4h8v4h4V18h-4zm28 8v-4H22v4h20zm-12-8h4v-4h8v-4h-8V6h-4v12z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Tabs',
      tree: {
        sf_tab: {
          name: 'sf-tab',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_tab_line', 'sf_tab_item'],
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
                  backgroundColor: '#E4EDF6',
                  display: 'flex',
                  width: '248px',
                  justifyContent: 'flex-start',
                  boxShadow:
                    '3px 3px 12px 0px #b9c0c7, 0px 0px 0px 0px #000 inset, -3px -3px 12px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '15px 15px 15px 15px',
                  fill: '#8093AD',
                  alignItems: 'center',
                  padding: '0px 0px 0px 3px',
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
        sf_tab_line: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'sf_tab',
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
                  softui: [3, 0.1, 6, 1, 145],
                },
                style: {
                  height: '40px',
                  width: '80px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  borderRadius: '13px 13px 13px 13px',
                  boxShadow:
                    '0px 0px 0px 0px #000, 3px 3px 6px 0px rgba(207,213,221,0.8) inset, 0px 0px 0px 0px #000, -3px -3px 6px 0px rgba(253,255,255,0.8) inset',
                },
                x: 4,
                y: 4,
              },
            },
          ],
          model: {
            ml: {
              value: '# $active<sf_tab> * $itemWidth<sf_tab_item>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_tab_item: {
          name: 'item',
          type: 'unit',
          lock: false,
          parent: 'sf_tab',
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
                  width: '80px',
                  position: 'static',
                  height: '36px',
                  lineHeight: '36px',
                  textAlign: 'center',
                  fontSize: '13px',
                  color: '#8093AD',
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
                  color: '#416FDA',
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
              value: '$active<sf_tab>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            msg: {
              value: ['Tab1', 'Tab2', 'Tab3'],
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
              value: 80,
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
                    target: 'sf_tab',
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
                    target: 'sf_tab',
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
      type: 'Button - Rect',
      tree: {
        sf_button_rect: {
          name: 'sf-button-rect',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_button_rect_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [9, 0.12, 7, 1, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '64px',
                  height: '64px',
                  boxShadow:
                    '7px 7px 16px 0px #d9e1ea, 0px 0px 0px 0px #000 inset, -7px -7px 16px 0px #eff9ff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '15px 15px 15px 15px',
                  fill: '#8093AD',
                  transition: 'all 0.3s cubic-bezier(0.77, 0, 0.175, 1)',
                  backgroundImage:
                    'linear-gradient(0deg, #E4EDF6FF 10%, #E4EDF6FF 90%)',
                  padding: '2px 2px 2px 2px',
                  borderWidth: '2px',
                  borderColor: '#E6EDF5',
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
                  softui: [9, 0.12, 7, 1, 145],
                },
                style: {
                  width: '64px',
                  height: '64px',
                  borderWidth: '2px',
                  borderColor: '#E0EAF5',
                  backgroundImage:
                    'linear-gradient(145deg, #FFFFFF7A 0%, #D0D8E17D 100%)',
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
                  fn: 'assert',
                  active: true,
                  exp: '$active',
                  O: [
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
                  X: [
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
              ],
              expand: true,
            },
          ],
        },
        sf_button_rect_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_button_rect',
          children: ['C797287781fl_2'],
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
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '100%',
                  borderRadius: '11px 11px 11px 11px',
                  position: 'static',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow:
                    '0px 0px 0px 0px #000, 0px 0px 0px 0px #D2DAE2 inset, 0px 0px 0px 0px #000, 0px 0px 0px 0px #F6FFFF inset',
                  transition: 'all 0.3s cubic-bezier(0.77, 0, 0.175, 1)',
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
                  softui: [4, 0.08, 7, 1, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  boxShadow:
                    '0px 0px 0px 0px #000, 4px 4px 7px 0px #d2dae2 inset, 0px 0px 0px 0px #000, -4px -4px 7px 0px #f6ffff inset',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            active: {
              value: '$active<sf_button_rect>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        C797287781fl_2: {
          name: 'ic_person',
          type: 'unit',
          lock: false,
          parent: 'sf_button_rect_wrap',
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
                  width: '30px',
                  height: '30px',
                  fill: '#455773',
                  position: 'static',
                },
                x: 0,
                y: 0,
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
                'M24 24c4.42 0 8-3.59 8-8 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 4.41 3.58 8 8 8zm0 4c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Button - Cicle',
      tree: {
        sf_button_circle: {
          name: 'sf-button-circle',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_button_circle_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [9, 0.12, 7, 1, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '64px',
                  height: '64px',
                  boxShadow:
                    '7px 7px 16px 0px #d9e1ea, 0px 0px 0px 0px #000 inset, -7px -7px 16px 0px #eff9ff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '32px 32px 32px 32px',
                  fill: '#8093AD',
                  transition: 'all 0.3s cubic-bezier(0.77, 0, 0.175, 1)',
                  backgroundImage:
                    'linear-gradient(0deg, #E4EDF6FF 10%, #E4EDF6FF 90%)',
                  padding: '4px 4px 4px 4px',
                  borderWidth: '2px',
                  borderColor: '#E6EDF5',
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
                  softui: [9, 0.12, 7, 1, 145],
                },
                style: {
                  width: '64px',
                  height: '64px',
                  borderWidth: '2px',
                  borderColor: '#E0EAF5',
                  backgroundImage:
                    'linear-gradient(145deg, #FFFFFF7A 0%, #D0D8E17D 100%)',
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
                  fn: 'assert',
                  active: true,
                  exp: '$active',
                  O: [
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
                  X: [
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
              ],
              expand: true,
            },
          ],
        },
        sf_button_circle_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_button_circle',
          children: ['C79740881h3d_2'],
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
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '100%',
                  borderRadius: '32px 32px 32px 32px',
                  position: 'static',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow:
                    '0px 0px 0px 0px #000, 0px 0px 0px 0px #D2DAE2 inset, 0px 0px 0px 0px #000, 0px 0px 0px 0px #F6FFFF inset',
                  transition: 'all 0.3s cubic-bezier(0.77, 0, 0.175, 1)',
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
                  softui: [4, 0.08, 7, 1, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  boxShadow:
                    '0px 0px 0px 0px #000, 4px 4px 7px 0px #d2dae2 inset, 0px 0px 0px 0px #000, -4px -4px 7px 0px #f6ffff inset',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            active: {
              value: '$active<sf_button_circle>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        C79740881h3d_2: {
          name: 'ic_person',
          type: 'unit',
          lock: false,
          parent: 'sf_button_circle_wrap',
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
                  width: '30px',
                  height: '30px',
                  fill: '#455773',
                  position: 'static',
                },
                x: 0,
                y: 0,
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
                'M37 24c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zm-27-6v12h8l10 10V8L18 18h-8z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Button - Radius',
      tree: {
        sf_button: {
          name: 'sf-button',
          type: 'container',
          lock: false,
          parent: null,
          children: ['u79741849054'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '100px',
                  height: '36px',
                  boxShadow:
                    '5px 5px 10px 0px rgba(182,190,197,0.58), 0px 0px 0px 0px #D2DAE2 inset, -5px -5px 10px 0px rgba(255,255,255,0.59), 0px 0px 0px 0px #F6FFFF inset',
                  borderRadius: '45px 45px 45px 45px',
                  padding: '3px 3px 3px 3px',
                  backgroundImage:
                    'linear-gradient(166deg, #FFFFFFFF 0%, #FFFFFFFF 6%, #FFFFFFFF 8%, #CEDFF1FF 100%)',
                  transition: 'all 0.3s cubic-bezier(0.77, 0, 0.175, 1)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        u79741849054: {
          name: 'msg',
          type: 'unit',
          lock: false,
          parent: 'sf_button',
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
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '30px',
                  position: 'static',
                  borderRadius: '16px 16px 16px 16px',
                  fontSize: '14px',
                  color: '#102452',
                  textAlign: 'center',
                  lineHeight: '30px',
                  fontWeight: 'bold',
                },
                x: 0,
                y: 16,
              },
            },
          ],
          model: {
            msg: {
              value: 'Start',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    // {
    //   type: '平铺',
    //   tree: {},
    // },
  ],
  form: [
    {
      type: 'Input - 1',
      tree: {
        sf_input_top: {
          name: 'sf-input-top',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_input_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [9, 0.12, 7, 1, 145],
                },
                style: {
                  backgroundColor: '#E0EAF5',
                  width: '240px',
                  height: '42px',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #D0D8E1FF 100%)',
                  padding: '4px 4px 4px 4px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_input_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_input_top',
          children: ['sf_input_input'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [6, 0.1, 9, 1, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '100%',
                  boxShadow:
                    '0px 0px 0px 0px #000, 6px 6px 9px 0px #cdd5dd inset, 0px 0px 0px 0px #000, -6px -6px 9px 0px #fbffff inset',
                  borderRadius: '16px 16px 16px 16px',
                  position: 'static',
                  padding: '2px 8px 0px 8px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_input_input: {
          name: 'input',
          type: 'unit',
          lock: false,
          parent: 'sf_input_wrap',
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
                  padding: '0px 10px 0px 10px',
                  width: '100%',
                  position: 'static',
                  fontSize: '14px',
                  lineHeight: '30px',
                  color: '#102452',
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
              value: 'Type anything...',
              subscribe: '',
              ZI: 0,
            },
            disabled: {
              value: false,
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
          },
          events: [],
        },
      },
    },
    {
      type: 'Input - 2',
      tree: {
        sf_input: {
          name: 'sf-input',
          type: 'unit',
          lock: false,
          parent: null,
          children: [],
          content: 'base/input',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [3, 0.1, 6, 1, 145],
                },
                style: {
                  padding: '0px 8px 0px 8px',
                  backgroundColor: '#E3EAF3',
                  fontSize: '12px',
                  color: '#102452',
                  lineHeight: '36px',
                  boxShadow:
                    '0px 0px 0px 0px #000, 3px 3px 6px 0px #ccd3db inset, 0px 0px 0px 0px #000, -3px -3px 6px 0px #faffff inset',
                  borderRadius: '8px 8px 8px 8px',
                  width: '200px',
                  height: '36px',
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
              value: 'Type anything...',
              subscribe: '',
              ZI: 0,
            },
            disabled: {
              value: false,
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
          },
          events: [],
        },
      },
    },
    {
      type: 'Switch - 1',
      tree: {
        sf_switch_1: {
          name: 'sf-switch-1',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_switch_1_thumb'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [7, 0.05, 15, 0, 145],
                },
                style: {
                  backgroundColor: '#B4C6D9',
                  width: '48px',
                  height: '26px',
                  borderRadius: '15px 15px 15px 15px',
                  transition: 'all 0.2s cubic-bezier(0.645,0.045,0.355,1)',
                  overflow: 'visible',
                  boxShadow:
                    '7px 7px 15px 0px #d9e1ea, 0px 0px 0px 0px #000 inset, -7px -7px 15px 0px #eff9ff, 0px 0px 0px 0px #000 inset',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$value',
              id: 1,
              active: false,
              props: {
                option: {},
                style: {},
              },
            },
            {
              name: 'default:$disabled',
              id: 2,
              active: false,
              props: {
                option: {
                  customKeys: {
                    cursor: 'not-allowed',
                  },
                },
                style: {
                  backgroundColor: '#E03997',
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(100%) invert(0%) hue-rotate(0deg) blur(0px)',
                  opacity: 0.5,
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
        sf_switch_1_thumb: {
          name: 'thumb',
          type: 'container',
          lock: false,
          parent: 'sf_switch_1',
          children: ['sf_switch_1_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [2, 0.21, 8, 0, 145],
                },
                style: {
                  backgroundColor: '#FFFFFF',
                  width: '26px',
                  height: '26px',
                  borderRadius: '13px 13px 13px 13px',
                  transition: 'all 0.3s cubic-bezier(0.645,0.045,0.355,1)',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #B3C6D8FF 100%)',
                },
                x: -1,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {},
                x: 23,
                y: 0,
              },
            },
          ],
          model: {
            active: {
              value: '$value<sf_switch_1>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_switch_1_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_switch_1_thumb',
          children: ['sf_switch_1_deco'],
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
                  backgroundColor: '#E4F0F9',
                  width: '20px',
                  height: '20px',
                  borderRadius: '8px 8px 8px 8px',
                },
                x: 3,
                y: 3,
                tx: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_switch_1_deco: {
          name: 'flag',
          type: 'container',
          lock: false,
          parent: 'sf_switch_1_wrap',
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
                  backgroundColor: '#DC4444',
                  width: '2px',
                  height: '8px',
                  borderRadius: '4px 4px 4px 4px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 9,
                y: 6,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: '#5BCA9E',
                },
              },
            },
          ],
          model: {
            active: {
              value: '$value<sf_switch_1>',
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
      type: 'Switch - 2',
      tree: {
        sf_switch_4: {
          name: 'sf-switch-4',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_switch_4_thumb'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [1, 0.2, 6, 1, 145],
                },
                style: {
                  backgroundColor: '#E6EDF5',
                  width: '48px',
                  height: '26px',
                  borderRadius: '15px 15px 15px 15px',
                  transition: 'all 0.3s cubic-bezier(0.645,0.045,0.355,1)',
                  boxShadow:
                    '0px 0px 0px 0px #000, 1px 1px 6px 0px #b8bec4 inset, 0px 0px 0px 0px #000, -1px -1px 6px 0px #ffffff inset',
                  overflow: 'visible',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$value',
              id: 1,
              active: true,
              props: {
                option: {
                  softui: [1, 0.12, 4, 1, 145],
                },
                style: {
                  overflow: 'visible',
                  backgroundColor: '#E6EDF5',
                },
              },
            },
            {
              name: 'default:$disabled',
              id: 2,
              active: true,
              props: {
                option: {
                  customKeys: {
                    cursor: 'not-allowed',
                  },
                },
                style: {
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(100%) invert(0%) hue-rotate(0deg) blur(0px)',
                  opacity: 0.5,
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
            render: {
              value: true,
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
        sf_switch_4_thumb: {
          name: 'thumb',
          type: 'container',
          lock: false,
          parent: 'sf_switch_4',
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
                  softui: [1, 0.15, 5, 0, 145],
                },
                style: {
                  backgroundColor: '#E8EDF4',
                  width: '20px',
                  height: '20px',
                  borderRadius: '10px 10px 10px 10px',
                  transition: 'all 0.2s cubic-bezier(0.645,0.045,0.355,1)',
                  boxShadow:
                    '1px 1px 5px 0px #c4ccd3, 0px 0px 0px 0px #000 inset, -1px -1px 5px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                },
                x: 3,
                y: 3,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {
                  softui: [1, 0.3, 3, 0, 145],
                },
                style: {
                  boxShadow:
                    '1px 1px 3px 0px #B0C2CE, 0px 0px 0px 0px #000 inset, -2px -1px 5px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                  backgroundColor: '#F3F7FF',
                },
                x: 26,
                y: 3,
              },
            },
          ],
          model: {
            active: {
              value: '$value<sf_switch_4>',
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
      type: 'Switch - 3',
      tree: {
        sf_switch_3: {
          name: 'sf-switch-3',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_switch_3_thumb'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [7, 0.05, 15, 0, 145],
                },
                style: {
                  backgroundColor: '#B4C6D9',
                  width: '48px',
                  height: '26px',
                  borderRadius: '15px 15px 15px 15px',
                  transition: 'all 0.2s cubic-bezier(0.645,0.045,0.355,1)',
                  overflow: 'visible',
                  boxShadow:
                    '7px 7px 15px 0px #d9e1ea, 0px 0px 0px 0px #000 inset, -7px -7px 15px 0px #eff9ff, 0px 0px 0px 0px #000 inset',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$value',
              id: 1,
              active: false,
              props: {
                option: {},
                style: {},
              },
            },
            {
              name: 'default:$disabled',
              id: 2,
              active: false,
              props: {
                option: {
                  customKeys: {
                    cursor: 'not-allowed',
                  },
                },
                style: {
                  backgroundColor: '#E03997',
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(100%) invert(0%) hue-rotate(0deg) blur(0px)',
                  opacity: 0.5,
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
        sf_switch_3_thumb: {
          name: 'thumb',
          type: 'container',
          lock: false,
          parent: 'sf_switch_3',
          children: ['sf_switch_3_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [2, 0.21, 8, 0, 145],
                },
                style: {
                  backgroundColor: '#FFFFFF',
                  width: '26px',
                  height: '26px',
                  borderRadius: '13px 13px 13px 13px',
                  transition: 'all 0.3s cubic-bezier(0.645,0.045,0.355,1)',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #B3C6D8FF 100%)',
                },
                x: -1,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {},
                x: 23,
                y: 0,
              },
            },
          ],
          model: {
            active: {
              value: '$value<sf_switch_3>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_switch_3_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_switch_3_thumb',
          children: ['sf_switch_3_deco'],
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
                  backgroundColor: '#E4F0F9',
                  width: '20px',
                  height: '20px',
                  borderRadius: '8px 8px 8px 8px',
                },
                x: 3,
                y: 3,
                tx: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_switch_3_deco: {
          name: 'flag',
          type: 'container',
          lock: false,
          parent: 'sf_switch_3_wrap',
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
                  backgroundColor: '#B7C5D7',
                  width: '2px',
                  height: '8px',
                  borderRadius: '4px 4px 4px 4px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 9,
                y: 6,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: '#5BCA9E',
                },
              },
            },
          ],
          model: {
            active: {
              value: '$value<sf_switch_3>',
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
      type: 'Slider',
      tree: {
        sf_slider_1: {
          name: 'sf-slider-1',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_slider_1_wrap', 'sf_slider_1_control'],
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
                  width: '312px',
                  height: '36px',
                  padding: '0px 12px 0px 12px',
                  overflow: 'visible',
                  display: 'flex',
                  alignItems: 'center',
                },
                x: 0,
                y: 0,
                d: 0,
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
              value: 20,
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
        sf_slider_1_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_slider_1',
          children: ['sf_slider_1_progress'],
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
                  softui: [2, 0.12, 18, 0, 145],
                },
                style: {
                  position: 'static',
                  width: '100%',
                  backgroundColor: '#EEF4F9',
                  height: '16px',
                  borderRadius: '8px 8px 8px 8px',
                  boxShadow:
                    '2px 2px 18px 0px #d1d7db, 0px 0px 0px 0px #000 inset, -2px -2px 18px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                },
                x: 9,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_slider_1_progress: {
          name: 'progress',
          type: 'container',
          lock: false,
          parent: 'sf_slider_1_wrap',
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
                  backgroundColor: '#4579F3',
                  height: '16px',
                  width: '30px',
                  backgroundImage:
                    'linear-gradient(90deg, #4481eb 0%, #04befe 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<sf_slider_1>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_slider_1_control: {
          name: 'controller',
          type: 'container',
          lock: false,
          parent: 'sf_slider_1',
          children: ['sf_slider_1_ball'],
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
                  width: '36px',
                  height: '36px',
                  overflow: 'visible',
                  position: 'absolute',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<sf_slider_1> * 3 * 0.92',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            disabled: {
              value: '$disabled<sf_slider_1>',
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
                    target: 'sf_slider_1',
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
        sf_slider_1_ball: {
          name: 'ball',
          type: 'container',
          lock: false,
          parent: 'sf_slider_1_control',
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
                  softui: [3, 0.33, 17, 0, 145],
                },
                style: {
                  backgroundColor: '#4579F3',
                  width: '24px',
                  height: '24px',
                  borderRadius: '12px 12px 12px 12px',
                  boxShadow:
                    '3px 3px 9px 0px rgba(27,23,23,0.27), 0px 0px 0px 0px #000 inset, -3px -3px 9px 0px rgba(255,255,255,0.51), 0px 0px 0px 0px #000 inset',
                  backgroundImage:
                    'linear-gradient(0deg, #4481eb 0%, #04befe 100%)',
                },
                x: 6,
                y: 6,
              },
            },
            {
              name: 'default:$value<sf_slider_1> == 0',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  borderWidth: '1px',
                  borderColor: '#AFA7A7',
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(100%) invert(0%) hue-rotate(0deg) blur(0px)',
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
      type: 'Slider',
      tree: {
        sf_slider_2: {
          name: 'sf-slider-2',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_slider_2_wrap', 'sf_slider_2_control'],
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
                  width: '312px',
                  height: '36px',
                  padding: '0px 12px 0px 12px',
                  overflow: 'visible',
                  display: 'flex',
                  alignItems: 'center',
                },
                x: 0,
                y: 0,
                d: 0,
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
              value: 40,
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
        sf_slider_2_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_slider_2',
          children: ['sf_slider_2_progress'],
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
                  softui: [2, 0.12, 18, 0, 145],
                },
                style: {
                  position: 'static',
                  width: '100%',
                  backgroundColor: '#EEF4F9',
                  height: '16px',
                  borderRadius: '8px 8px 8px 8px',
                  boxShadow:
                    '2px 2px 18px 0px #d1d7db, 0px 0px 0px 0px #000 inset, -2px -2px 18px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                },
                x: 9,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_slider_2_progress: {
          name: 'progress',
          type: 'container',
          lock: false,
          parent: 'sf_slider_2_wrap',
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
                  backgroundColor: '#4579F3',
                  height: '16px',
                  width: '30px',
                  backgroundImage:
                    'linear-gradient(90deg, #00F5A0 50%, #00D9F5 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<sf_slider_2>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_slider_2_control: {
          name: 'controller',
          type: 'container',
          lock: false,
          parent: 'sf_slider_2',
          children: ['sf_slider_2_ball'],
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
                  width: '36px',
                  height: '36px',
                  overflow: 'visible',
                  position: 'absolute',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<sf_slider_2> * 3 * 0.92',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            disabled: {
              value: '$disabled<sf_slider_2>',
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
                    target: 'sf_slider_2',
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
        sf_slider_2_ball: {
          name: 'ball',
          type: 'container',
          lock: false,
          parent: 'sf_slider_2_control',
          children: ['sf_slider_2_point'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [3, 0.33, 17, 0, 145],
                },
                style: {
                  backgroundColor: '#FFFFFF',
                  width: '24px',
                  height: '24px',
                  borderRadius: '12px 12px 12px 12px',
                  boxShadow:
                    '3px 3px 9px 0px rgba(27,23,23,0.27), 0px 0px 0px 0px #000 inset, -3px -3px 9px 0px rgba(255,255,255,0.51), 0px 0px 0px 0px #000 inset',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                x: 6,
                y: 6,
              },
            },
            {
              name: 'default:$value<sf_slider_2> == 0',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(100%) invert(0%) hue-rotate(0deg) blur(0px)',
                },
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_slider_2_point: {
          name: 'point',
          type: 'container',
          lock: false,
          parent: 'sf_slider_2_ball',
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
                  softui: [1, 0.16, 2, 1, 145],
                },
                style: {
                  backgroundColor: '#e7e7e7',
                  width: '12px',
                  height: '12px',
                  borderRadius: '6px 6px 6px 6px',
                  boxShadow:
                    '0px 0px 0px 0px #000, 1px 1px 2px 0px #c2c2c2 inset, 0px 0px 0px 0px #000, -1px -1px 2px 0px #ffffff inset',
                  position: 'static',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Slider',
      tree: {
        sf_slider_3: {
          name: 'sf-slider-3',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_slider_3_deco', 'sf_slider_3_control'],
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
                  width: '312px',
                  height: '36px',
                  padding: '0px 12px 0px 12px',
                  overflow: 'visible',
                  display: 'flex',
                  alignItems: 'center',
                },
                x: 0,
                y: 0,
                d: 0,
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
              value: 20,
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
        sf_slider_3_deco: {
          name: 'deco',
          type: 'container',
          lock: false,
          parent: 'sf_slider_3',
          children: ['sf_slider_3_wrap'],
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
                  height: '8px',
                  padding: '1px 1px 1px 1px',
                  width: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px 20px 20px 20px',
                  position: 'static',
                  overflow: 'visible',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            value: {
              value: 40,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_slider_3_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_slider_3_deco',
          children: ['sf_slider_3_line'],
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
                  backgroundColor: '#E4EDF6',
                  height: '100%',
                  boxShadow:
                    '0px 0px 0px 0px #000, 1px 1px 3px 0px #cdd5dd inset, 0px 0px 0px 0px #000, -1px -1px 3px 0px #fbffff inset',
                  borderRadius: '16px 16px 16px 16px',
                  overflow: 'visible',
                },
                x: 9,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_slider_3_line: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'sf_slider_3_wrap',
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
                  height: '100%',
                  width: '30px',
                  borderRadius: '10px 10px 10px 10px',
                  backgroundColor: '#FD6585',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$0',
              id: 1,
              active: true,
              props: {
                option: {
                  customKeys: {},
                },
                style: {
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(4px)',
                  opacity: 0.76,
                },
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<sf_slider_3>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            copy: {
              value: 2,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_slider_3_control: {
          name: 'controller',
          type: 'container',
          lock: false,
          parent: 'sf_slider_3',
          children: ['sf_slider_3_icon'],
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
                  width: '36px',
                  height: '36px',
                  overflow: 'visible',
                  position: 'absolute',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<sf_slider_3> * 3 * 0.92',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            disabled: {
              value: '$disabled<sf_slider_3>',
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
                    target: 'sf_slider_3',
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
        sf_slider_3_icon: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'sf_slider_3_control',
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
                  softui: [2, 0.09, 8, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '30px',
                  height: '30px',
                  boxShadow:
                    '2px 2px 8px 0px #cfd8e0, 0px 0px 0px 0px #000 inset, -2px -2px 8px 0px #f9ffff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '30px 30px 30px 30px',
                  fill: '#677C9A',
                  position: 'absolute',
                  padding: '6px 6px 6px 6px',
                },
                x: 3,
                y: 3,
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
              value: 'M20 40h8V8h-8v32zM8 40h8V24H8v16zm24-22v22h8V18h-8z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Progress',
      tree: {
        sf_progress_1: {
          name: 'sf-progress-1',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_progress_1_wrap'],
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
                  height: '30px',
                  padding: '4px 4px 4px 4px',
                  width: '300px',
                  backgroundColor: '#E0EAF5',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #D0D8E1FF 100%)',
                  overflow: 'visible',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            value: {
              value: 40,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            render: {
              value: true,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_progress_1_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_progress_1',
          children: ['sf_progress_1_line'],
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
                  backgroundColor: '#E4EDF6',
                  height: '100%',
                  boxShadow:
                    '0px 0px 0px 0px #000, 6px 6px 9px 0px #cdd5dd inset, 0px 0px 0px 0px #000, -6px -6px 9px 0px #fbffff inset',
                  borderRadius: '16px 16px 16px 16px',
                  overflow: 'visible',
                },
                x: 9,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_progress_1_line: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'sf_progress_1_wrap',
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
                  height: '16px',
                  width: '30px',
                  borderRadius: '10px 10px 10px 10px',
                  backgroundImage:
                    'linear-gradient(90deg, #FFD3A5 10%, #FD6585 90%)',
                },
                x: 4,
                y: 3,
              },
            },
            {
              name: 'default:$0',
              id: 1,
              active: true,
              props: {
                option: {
                  customKeys: {},
                },
                style: {
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(10px)',
                },
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<sf_progress_1>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            copy: {
              value: 2,
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
      type: 'Progress',
      tree: {
        sf_progress_2: {
          name: 'sf-progress-2',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_progress_2_wrap'],
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
                  height: '30px',
                  padding: '4px 4px 4px 4px',
                  width: '300px',
                  backgroundColor: '#E0EAF5',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #D0D8E1FF 100%)',
                  overflow: 'visible',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            value: {
              value: 60,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            render: {
              value: true,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_progress_2_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_progress_2',
          children: ['sf_progress_2_line'],
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
                  backgroundColor: '#E4EDF6',
                  height: '100%',
                  boxShadow:
                    '0px 0px 0px 0px #000, 6px 6px 9px 0px #cdd5dd inset, 0px 0px 0px 0px #000, -6px -6px 9px 0px #fbffff inset',
                  borderRadius: '16px 16px 16px 16px',
                  overflow: 'visible',
                },
                x: 9,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_progress_2_line: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'sf_progress_2_wrap',
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
                  height: '16px',
                  width: '30px',
                  borderRadius: '10px 10px 10px 10px',
                  backgroundImage:
                    'linear-gradient(180deg, #F761A1 0%, #8C1BAB 100%)',
                },
                x: 4,
                y: 3,
              },
            },
            {
              name: 'default:$0',
              id: 1,
              active: true,
              props: {
                option: {
                  customKeys: {},
                },
                style: {
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(3px)',
                },
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<sf_progress_2>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            copy: {
              value: 2,
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
      type: 'Radios',
      tree: {
        sf_radios: {
          name: 'sf-radios',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_radios_wrap'],
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
                  width: '313px',
                  display: 'flex',
                  overflow: 'visible',
                },
                x: 0,
                y: 0,
                d: 0,
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
        sf_radios_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_radios',
          children: ['sf_radios_label', 'sf_radios_deco'],
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
                  width: '100px',
                  overflow: 'visible',
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
              value: '$active<sf_radios>',
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
              value: '$disabled<sf_radios>',
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
                    target: 'sf_radios',
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
                    target: 'sf_radios',
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
        sf_radios_label: {
          name: 'label',
          type: 'unit',
          lock: false,
          parent: 'sf_radios_wrap',
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
                  color: '#444550',
                  fontSize: '14px',
                  width: '72px',
                  height: '22px',
                },
                x: 24,
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
        sf_radios_deco: {
          name: 'radio',
          type: 'container',
          lock: false,
          parent: 'sf_radios_wrap',
          children: ['sf_radios_on'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [2, 0.08, 4, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '18px',
                  height: '18px',
                  boxShadow:
                    '2px 2px 4px 0px #d2dae2, 0px 0px 0px 0px #000 inset, -2px -2px 4px 0px #f6ffff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '30px 30px 30px 30px',
                  fill: '#8093AD',
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                x: 0,
                y: 9,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_radios_on: {
          name: 'on',
          type: 'container',
          lock: false,
          parent: 'sf_radios_deco',
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
                  width: '10px',
                  height: '10px',
                  borderRadius: '5px 5px 5px 5px',
                  backgroundImage:
                    'linear-gradient(-45deg, #6a11cb 0%, #2575fc 100%)',
                  position: 'static',
                  transition: 'all 0.2s cubic-bezier(0.77,0,0.175,1)',
                },
                x: 0,
                y: 0,
                s: 0,
              },
            },
            {
              name: 'default:$i == $active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  position: 'static',
                },
                s: 100,
              },
            },
          ],
          model: {
            active: {
              value: '$active<sf_radios>',
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
      type: 'Select',
      tree: {
        sf_select: {
          name: 'sf-select',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_select_bar', 'sf_select_list'],
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
                  width: '186px',
                  height: '42px',
                  overflow: 'visible',
                  display: 'block',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$open',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  height: '219px',
                },
              },
            },
          ],
          model: {
            value: {
              value: 'op1',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            open: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_select_bar: {
          name: 'bar',
          type: 'container',
          lock: false,
          parent: 'sf_select',
          children: ['sf_select_label', 'sf_select_icon'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [2, 0.1, 7, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '42px',
                  boxShadow:
                    '2px 2px 7px 0px #cdd5dd, 0px 0px 0px 0px #000 inset, -2px -2px 7px 0px #fbffff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '9px 9px 9px 9px',
                  fill: '#8093AD',
                  position: 'static',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  overflow: 'visible',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [
            {
              event: 'tap',
              actions: [
                {
                  fn: 'assert',
                  active: true,
                  exp: '$open<sf_select>',
                  O: [
                    {
                      fn: 'setModel',
                      active: true,
                      params: {
                        target: 'sf_select',
                        key: 'open',
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
                        target: 'sf_select',
                        key: 'open',
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
        sf_select_label: {
          name: 'selected',
          type: 'unit',
          lock: false,
          parent: 'sf_select_bar',
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
                  color: '#444550',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  position: 'static',
                  margin: '0px 0px 0px 14px',
                  width: '129px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Option1',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        sf_select_icon: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'sf_select_bar',
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
                  width: '32px',
                  height: '32px',
                  padding: '4px 4px 4px 4px',
                  fill: '#7382A0',
                  position: 'absolute',
                  transition: 'all 0.3s cubic-bezier(0.77, 0, 0.175, 1)',
                },
                x: 5,
                y: 5,
                tx: 1,
                d: 0,
              },
            },
            {
              name: 'default:$open',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  position: 'absolute',
                },
                d: 180,
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
              value: 'M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z',
              subscribe: '',
              ZI: 0,
            },
            open: {
              value: '$open<sf_select>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_select_list: {
          name: 'list',
          type: 'container',
          lock: false,
          parent: 'sf_select',
          children: ['sf_select_item'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [2, 0.1, 7, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '152px',
                  boxShadow:
                    '2px 2px 7px 0px #cdd5dd, 0px 0px 0px 0px #000 inset, -2px -2px 7px 0px #fbffff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '9px 9px 9px 9px',
                  padding: '15px 15px 15px 15px',
                  fill: '#8093AD',
                  position: 'static',
                  margin: '14px 0px 0px 0px',
                  opacity: 0,
                  transition: 'all 0.3s cubic-bezier(0.77, 0, 0.175, 1)',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$open',
              id: 1,
              active: true,
              props: {
                option: {
                  softui: [2, 0.1, 7, 0, 145],
                },
                style: {
                  fill: '#8093AD',
                  position: 'static',
                  opacity: 1,
                },
              },
            },
          ],
          model: {
            open: {
              value: '$open<sf_select>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_select_item: {
          name: 'item',
          type: 'container',
          lock: false,
          parent: 'sf_select_list',
          children: ['sf_select_text'],
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
                  height: '30px',
                  position: 'static',
                  borderWidth: '0px 0px 1px 0px',
                  borderColor: '#D6E3EC',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            copy: {
              value: 4,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        sf_select_text: {
          name: 'text',
          type: 'unit',
          lock: false,
          parent: 'sf_select_item',
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
                  color: '#444550',
                  fontSize: '12px',
                  height: '30px',
                  lineHeight: '30px',
                  position: 'static',
                  width: '100%',
                },
                x: 3,
                y: 0,
              },
            },
            {
              name: 'default:$i==$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  color: '#4859FB',
                  fontSize: '12px',
                  height: '30px',
                  lineHeight: '30px',
                  position: 'static',
                  width: '100%',
                },
                x: 3,
                y: 0,
              },
            },
            {
              name: 'default:$i==$select',
              id: 2,
              active: true,
              props: {
                option: {},
                style: {
                  color: '#4859FB',
                  fontSize: '12px',
                  height: '30px',
                  lineHeight: '30px',
                  position: 'static',
                  width: '100%',
                },
                x: 3,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: ['Option1', 'Option2', 'Option3', 'Option4'],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            values: {
              value: ['op1', 'op2', 'op3', 'op4'],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            active: {
              value: 0,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            select: {
              value: 0,
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
                    key: 'values',
                    exp: 'n',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'sf_select',
                    key: 'value',
                    exp: 'N',
                    value: '$response',
                  },
                },
                {
                  fn: 'getModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'msg',
                    exp: 'n',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'sf_select_label',
                    key: 'msg',
                    exp: 'N',
                    value: '$response',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'sf_select',
                    key: 'open',
                    exp: 'N',
                    value: false,
                  },
                },
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
                    key: 'select',
                    exp: 'N',
                    value: '$response',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'active',
                    exp: 'N',
                    value: -1,
                  },
                },
              ],
              gesture: true,
              expand: true,
            },
            {
              event: 'pointermove',
              actions: [
                {
                  fn: 'assert',
                  active: true,
                  exp: '$open<sf_select>',
                  O: [
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
                  X: [],
                  expand: true,
                },
              ],
              expand: true,
            },
          ],
        },
      },
      containerStyle: {
        padding: '24px 0px 24px 24px',
        overflow: 'hidden',
      },
    },
  ],
  combined: [
    {
      type: 'Card - 1',
      tree: {
        sf_card_1: {
          name: 'sf-card-1',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_card_1_wrap', 'C79544398dlv_0'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '246px',
                  height: '189px',
                  boxShadow:
                    '10px 10px 20px 0px #b6bec5, 0px 0px 0px 0px #000 inset, -10px -10px 20px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '20px 20px 20px 20px',
                  padding: '4px 4px 4px 4px',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #C3D3E2FF 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_card_1_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_card_1',
          children: ['u79544430arq', 'C79544593flo_0', 'C79544988m3i_0'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '238px',
                  height: '100%',
                  position: 'static',
                  borderRadius: '16px 16px 16px 16px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        u79544430arq: {
          name: 'title',
          type: 'unit',
          lock: false,
          parent: 'sf_card_1_wrap',
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
                  width: '91px',
                  fontSize: '15px',
                  height: '26px',
                  lineHeight: '26px',
                  fontFamily: 'Roboto-Black',
                  color: '#102452',
                },
                x: 15,
                y: 136,
              },
            },
          ],
          model: {
            msg: {
              value: 'Lock it',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        C79544593flo_0: {
          name: 'sf-avatar-group',
          type: 'container',
          lock: false,
          parent: 'sf_card_1_wrap',
          children: ['C79544593flo_1'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [6, 0.16, 50, 0, 145],
                },
                style: {
                  backgroundColor: '#B4C6D9',
                  width: '64px',
                  height: '64px',
                  borderRadius: '13px 13px 13px 13px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignContent: 'space-evenly',
                  alignItems: 'flex-start',
                  padding: '4px 4px 4px 4px',
                  boxShadow:
                    '6px 6px 50px 0px #FFFFFF, 0px 0px 0px 0px #000 inset, -6px -6px 50px 0px #d1e6fc, 0px 0px 0px 0px #000 inset',
                  backgroundImage:
                    'linear-gradient(145deg, #FFFFFFFF 0%, #B4C6D9FF 100%)',
                },
                x: 87,
                y: 21,
                d: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        C79544593flo_1: {
          name: 'photo',
          type: 'unit',
          lock: false,
          parent: 'C79544593flo_0',
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
                  width: '100%',
                  height: '100%',
                  borderRadius: '9px 9px 9px 9px',
                  position: 'static',
                  objectFit: 'cover',
                },
                x: 7,
                y: 8,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.cn/common/default/1621850268630_fashion_love_woman_650x940.jpg',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        C79544988m3i_0: {
          name: 'name',
          type: 'unit',
          lock: false,
          parent: 'sf_card_1_wrap',
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
                  width: '91px',
                  fontSize: '13px',
                  height: '26px',
                  lineHeight: '26px',
                  color: '#8A8C94',
                  textAlign: 'center',
                  fontFamily: 'Roboto-Regular',
                },
                x: 73,
                y: 91,
              },
            },
          ],
          model: {
            msg: {
              value: 'No One',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        C79544398dlv_0: {
          name: 'sf-switch',
          type: 'container',
          lock: false,
          parent: 'sf_card_1',
          children: ['C79544398dlv_1'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [7, 0.05, 15, 0, 145],
                },
                style: {
                  backgroundColor: '#B4C6D9',
                  width: '48px',
                  height: '26px',
                  borderRadius: '15px 15px 15px 15px',
                  transition: 'all 0.2s cubic-bezier(0.645,0.045,0.355,1)',
                  overflow: 'visible',
                  boxShadow:
                    '7px 7px 15px 0px #d9e1ea, 0px 0px 0px 0px #000 inset, -7px -7px 15px 0px #eff9ff, 0px 0px 0px 0px #000 inset',
                },
                x: 178,
                y: 140,
                d: 0,
              },
            },
            {
              name: 'default:$value',
              id: 1,
              active: false,
              props: {
                option: {},
                style: {},
              },
            },
            {
              name: 'default:$disabled',
              id: 2,
              active: false,
              props: {
                option: {
                  customKeys: {
                    cursor: 'not-allowed',
                  },
                },
                style: {
                  backgroundColor: '#E03997',
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(100%) invert(0%) hue-rotate(0deg) blur(0px)',
                  opacity: 0.5,
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
        C79544398dlv_1: {
          name: 'thumb',
          type: 'container',
          lock: false,
          parent: 'C79544398dlv_0',
          children: ['C79544398dlv_2'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [2, 0.21, 8, 0, 145],
                },
                style: {
                  backgroundColor: '#FFFFFF',
                  width: '26px',
                  height: '26px',
                  borderRadius: '13px 13px 13px 13px',
                  transition: 'all 0.3s cubic-bezier(0.645,0.045,0.355,1)',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #B3C6D8FF 100%)',
                },
                x: -1,
                y: 0,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {},
                x: 23,
                y: 0,
              },
            },
          ],
          model: {
            active: {
              value: '$value<C79544398dlv_0>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        C79544398dlv_2: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'C79544398dlv_1',
          children: ['C79544398dlv_3'],
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
                  backgroundColor: '#E4F0F9',
                  width: '20px',
                  height: '20px',
                  borderRadius: '8px 8px 8px 8px',
                },
                x: 3,
                y: 3,
                tx: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        C79544398dlv_3: {
          name: 'flag',
          type: 'container',
          lock: false,
          parent: 'C79544398dlv_2',
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
                  backgroundColor: '#B7C5D7',
                  width: '2px',
                  height: '8px',
                  borderRadius: '4px 4px 4px 4px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                },
                x: 9,
                y: 6,
              },
            },
            {
              name: 'default:$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: '#5BCA9E',
                },
              },
            },
          ],
          model: {
            active: {
              value: '$value<C79544398dlv_0>',
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
      type: 'Card - 2',
      tree: {
        sf_card_2: {
          name: 'sf-card-2',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_card_2_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '246px',
                  height: '189px',
                  boxShadow:
                    '10px 10px 20px 0px #b6bec5, 0px 0px 0px 0px #000 inset, -10px -10px 20px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '20px 20px 20px 20px',
                  padding: '4px 4px 4px 4px',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #C3D3E2FF 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_card_2_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_card_2',
          children: ['C795454096dy_0', 'C79546872hti_0'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  borderRadius: '16px 16px 16px 16px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        C795454096dy_0: {
          name: 'button',
          type: 'container',
          lock: false,
          parent: 'sf_card_2_wrap',
          children: ['C795454096dy_1'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '90px',
                  height: '90px',
                  boxShadow:
                    '5px 5px 10px 0px rgba(182,190,197,0.58), 0px 0px 0px 0px #000 inset, -5px -5px 10px 0px rgba(255,255,255,0.59), 0px 0px 0px 0px #000 inset',
                  borderRadius: '45px 45px 45px 45px',
                  padding: '3px 3px 3px 3px',
                  position: 'absolute',
                  backgroundImage:
                    'linear-gradient(145deg, #FFFFFFFF 0%, #FFFFFFFF 6%, #FFFFFFFF 8%, #CEDFF1FF 100%)',
                },
                x: 74,
                y: 18,
              },
            },
          ],
          model: {},
          events: [],
        },
        C795454096dy_1: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'C795454096dy_0',
          children: ['C79546444aji_0'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E5EFFA',
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  borderRadius: '45px 45px 45px 45px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        C79546444aji_0: {
          name: 'inner',
          type: 'container',
          lock: false,
          parent: 'C795454096dy_1',
          children: ['C79546444aji_1'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '60px',
                  height: '60px',
                  borderRadius: '45px 45px 45px 45px',
                  padding: '3px 3px 3px 3px',
                  position: 'absolute',
                  backgroundImage:
                    'linear-gradient(-45deg, #FFFFFFFF 0%, #FFFFFFFF 16%, #FFFFFFFF 19%, #CEDFF1FF 100%)',
                },
                x: 12,
                y: 12,
              },
            },
          ],
          model: {},
          events: [],
        },
        C79546444aji_1: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'C79546444aji_0',
          children: ['u79546594ha6'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E6EFF9',
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  borderRadius: '45px 45px 45px 45px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        u79546594ha6: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'C79546444aji_1',
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
                  width: '30px',
                  height: '30px',
                  fill: '#8093AD',
                },
                x: 12,
                y: 12,
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
                'M5 38h38v4H5zm39.14-18.73a2.995 2.995 0 00-3.67-2.12L29.84 20 16.04 7.13l-3.86 1.04 8.28 14.35-9.94 2.66-3.93-3.09-2.9.78 3.64 6.31 1.53 2.65 3.21-.86 10.63-2.85 8.69-2.33 10.63-2.85c1.6-.43 2.55-2.07 2.12-3.67z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        C79546872hti_0: {
          name: 'button',
          type: 'container',
          lock: false,
          parent: 'sf_card_2_wrap',
          children: ['C79546872hti_1'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '100px',
                  height: '36px',
                  boxShadow:
                    '5px 5px 10px 0px rgba(182,190,197,0.58), 0px 0px 0px 0px #000 inset, -5px -5px 10px 0px rgba(255,255,255,0.59), 0px 0px 0px 0px #000 inset',
                  borderRadius: '45px 45px 45px 45px',
                  padding: '3px 3px 3px 3px',
                  backgroundImage:
                    'linear-gradient(166deg, #FFFFFFFF 0%, #FFFFFFFF 6%, #FFFFFFFF 8%, #CEDFF1FF 100%)',
                  position: 'absolute',
                },
                x: 69,
                y: 128,
              },
            },
          ],
          model: {},
          events: [],
        },
        C79546872hti_1: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'C79546872hti_0',
          children: ['C79546968m11_0'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  borderRadius: '16px 16px 16px 16px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        C79546968m11_0: {
          name: 'title',
          type: 'unit',
          lock: false,
          parent: 'C79546872hti_1',
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
                  width: '80px',
                  fontSize: '14px',
                  height: '30px',
                  lineHeight: '30px',
                  fontFamily: 'Roboto-Black',
                  color: '#102452',
                  textAlign: 'center',
                },
                x: 7,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Start',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Card- 3',
      tree: {
        sf_card_3: {
          name: 'sf-card-3',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_card_3_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '150px',
                  height: '209px',
                  boxShadow:
                    '5px 5px 10px 0px rgba(182,190,197,0.68), 0px 0px 0px 0px #000 inset, -5px -5px 10px 0px rgba(255,255,255,0.7), 0px 0px 0px 0px #000 inset',
                  borderRadius: '20px 20px 20px 20px',
                  padding: '2px 2px 2px 2px',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #C3D3E2FF 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_card_3_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_card_3',
          children: [
            'C796208152o2_2',
            'C796208152o2_3',
            'C796208152o2_4',
            'C79620962mj2_0',
            'C79620962mj2_1',
          ],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E2EAF4',
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  borderRadius: '16px 16px 16px 16px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        C796208152o2_2: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'sf_card_3_wrap',
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
                  softui: [7, 0.09, 13, 0, 145],
                },
                style: {
                  backgroundColor: '#E2EAF4',
                  width: '60px',
                  height: '60px',
                  boxShadow:
                    '7px 7px 13px 0px #cfd8e0, 0px 0px 0px 0px #000 inset, -7px -7px 13px 0px #f9ffff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '15px 15px 15px 15px',
                  padding: '11px 11px 11px 11px',
                  fill: '#8093AD',
                  position: 'absolute',
                },
                x: 15,
                y: 13,
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
                'm38.05473,21.70432l-11.68343,23.4745c-1.11115,2.22856 -4.28622,1.37227 -4.28622,-1.14464l0,-12.93527l-10.14566,0c-1.71118,0 -2.8007,-1.98564 -1.98883,-3.6004l12.43714,-24.68954c1.1141,-2.21745 4.25022,-1.34876 4.25022,1.15575l0,14.16647l9.42205,0c1.7093,0.00014 2.79614,1.96054 1.99475,3.57314z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        C796208152o2_3: {
          name: 't1',
          type: 'unit',
          lock: false,
          parent: 'sf_card_3_wrap',
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
                  width: '91px',
                  fontSize: '18px',
                  height: '26px',
                  lineHeight: '26px',
                  fontFamily: 'Roboto-Regular',
                  color: '#102452',
                },
                x: 15,
                y: 86,
              },
            },
          ],
          model: {
            msg: {
              value: 'Electricity',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        C796208152o2_4: {
          name: 't2',
          type: 'unit',
          lock: false,
          parent: 'sf_card_3_wrap',
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
                  width: '91px',
                  fontSize: '16px',
                  height: '26px',
                  lineHeight: '26px',
                  fontFamily: 'Roboto-Regular',
                  color: '#8A8C94',
                  letterSpacing: '0px',
                },
                x: 13,
                y: 167,
              },
            },
          ],
          model: {
            msg: {
              value: 'Today',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        C79620962mj2_0: {
          name: 't3',
          type: 'unit',
          lock: false,
          parent: 'sf_card_3_wrap',
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
                  width: '35px',
                  fontSize: '14px',
                  height: '45px',
                  lineHeight: '40px',
                  fontFamily: 'Roboto-Regular',
                  color: '#102452',
                  textAlign: 'left',
                },
                x: 65,
                y: 130,
              },
            },
          ],
          model: {
            msg: {
              value: 'kW·h',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        C79620962mj2_1: {
          name: 't4',
          type: 'unit',
          lock: false,
          parent: 'sf_card_3_wrap',
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
                  width: '52px',
                  fontSize: '28px',
                  height: '45px',
                  lineHeight: '45px',
                  fontFamily: 'Roboto-Regular',
                  color: '#102452',
                  textAlign: 'left',
                },
                x: 13,
                y: 130,
              },
            },
          ],
          model: {
            msg: {
              value: '233',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Container - Combined',
      tree: {
        sf_container: {
          name: 'sf-container',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_container_circle'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [7, 0.14, 14, 0, 145],
                },
                style: {
                  backgroundColor: '#E0EAF5',
                  width: '150px',
                  height: '150px',
                  borderRadius: '80px 80px 80px 80px',
                  padding: '10px 10px 10px 10px',
                  boxShadow:
                    '7px 7px 14px 0px #c1c9d3, 0px 0px 0px 0px #000 inset, -7px -7px 14px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_container_circle: {
          name: 'circle',
          type: 'container',
          lock: false,
          parent: 'sf_container',
          children: ['sf_container_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [3, 0.18, 6, 1, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '100%',
                  height: '100%',
                  boxShadow:
                    '0px 0px 0px 0px #000, 3px 3px 6px 0px #bbc2ca inset, 0px 0px 0px 0px #000, -3px -3px 6px 0px #ffffff inset',
                  borderRadius: '80px 80px 80px 80px',
                  position: 'static',
                  padding: '7px 7px 7px 7px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_container_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_container_circle',
          children: ['C79549560bxy_0', 'C79549741eu5_0', 'u79549853pps'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [3, 0.12, 6, 0, 145],
                },
                style: {
                  backgroundColor: '#E0EAF5',
                  width: '100%',
                  height: '100%',
                  borderRadius: '60px 60px 60px 60px',
                  boxShadow:
                    '3px 3px 6px 0px #c5ced8, 0px 0px 0px 0px #000 inset, -3px -3px 6px 0px #fbffff, 0px 0px 0px 0px #000 inset',
                  position: 'static',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        C79549560bxy_0: {
          name: 't2',
          type: 'unit',
          lock: false,
          parent: 'sf_container_wrap',
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
                  width: '27px',
                  fontSize: '14px',
                  height: '45px',
                  lineHeight: '40px',
                  fontFamily: 'Roboto-Regular',
                  color: '#102452',
                  textAlign: 'center',
                },
                x: 62,
                y: 20,
              },
            },
          ],
          model: {
            msg: {
              value: '℃',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        C79549741eu5_0: {
          name: 't1',
          type: 'unit',
          lock: false,
          parent: 'sf_container_wrap',
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
                  width: '38px',
                  fontSize: '28px',
                  height: '45px',
                  lineHeight: '45px',
                  fontFamily: 'Roboto-Regular',
                  color: '#102452',
                  textAlign: 'center',
                },
                x: 36,
                y: 20,
              },
            },
          ],
          model: {
            msg: {
              value: '21',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        u79549853pps: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'sf_container_wrap',
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
                  width: '28px',
                  height: '28px',
                  fill: '#4D71A0',
                },
                x: 43,
                y: 67,
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 30 30',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M.45 20.97c0 .24.08.45.24.61.44.18.73.27.88.27h7.88c.24 0 .44-.09.6-.26.17-.17.25-.38.25-.61 0-.23-.08-.43-.25-.59a.847.847 0 00-.6-.24H1.57c-.26 0-.52.08-.76.24-.24.16-.36.36-.36.58zm1.39-3c0 .24.08.43.25.59.15.17.34.26.58.26h9.4c.24 0 .44-.08.61-.25.17-.17.25-.37.25-.6 0-.24-.08-.44-.25-.61a.822.822 0 00-.61-.25h-9.4c-.23 0-.43.08-.59.25-.16.17-.24.37-.24.61zm1.05-2.37c0 .09.06.13.17.13h1.39c.12 0 .19-.04.22-.13.26-.53.62-.97 1.09-1.32.47-.35 1-.55 1.58-.62h.54c.11 0 .16-.06.16-.19l.07-.56c.07-.71.3-1.36.69-1.95.39-.58.9-1.04 1.53-1.37s1.3-.5 2.02-.5c1.09 0 2.04.37 2.85 1.1s1.27 1.64 1.39 2.72l.07.56c0 .12.06.19.18.19h1.6c.89 0 1.65.32 2.3.96.65.64.97 1.39.97 2.27 0 .9-.32 1.67-.97 2.31-.64.64-1.41.96-2.31.96h-6.89c-.11 0-.17.06-.17.19v1.33c0 .12.06.18.17.18h6.89c.9 0 1.73-.22 2.49-.67.76-.44 1.37-1.05 1.81-1.81.44-.76.67-1.59.67-2.49 0-.73-.14-1.39-.43-2.01.78-.96 1.16-2.06 1.16-3.28 0-.94-.24-1.81-.71-2.62a5.201 5.201 0 00-1.92-1.92c-.81-.47-1.69-.71-2.63-.71-.73 0-1.43.15-2.1.45-.67.3-1.25.71-1.74 1.25-.83-.43-1.73-.65-2.7-.65-1.41 0-2.67.44-3.76 1.31s-1.79 1.99-2.09 3.36c-.85.21-1.6.63-2.25 1.25s-1.1 1.36-1.35 2.21c.02.02.01.04.01.07zm.71 8.56c0 .24.09.43.26.59.16.17.36.25.59.25h9.42c.23 0 .43-.08.59-.25s.24-.36.24-.6c0-.25-.08-.46-.24-.62s-.36-.25-.6-.25H4.45c-.24 0-.44.08-.6.25s-.25.38-.25.63zm7.49-19.51c0 .25.08.45.24.6l.64.66c.16.16.36.24.6.24.26 0 .46-.08.62-.24.16-.16.24-.36.24-.61 0-.23-.08-.43-.24-.59l-.65-.65a.783.783 0 00-.57-.25c-.25 0-.46.08-.63.25s-.25.36-.25.59zm5.36 4.38c.66-.63 1.48-.95 2.45-.95.97 0 1.8.34 2.49 1.03.68.68 1.03 1.51 1.03 2.49 0 .67-.15 1.27-.46 1.81-.94-.95-2.11-1.43-3.5-1.43h-.3a6.084 6.084 0 00-1.71-2.95zm1.6-5.22c0 .24.08.43.25.59s.36.23.6.23c.25 0 .45-.08.6-.23.15-.15.23-.35.23-.6V1.76c0-.24-.08-.45-.23-.61a.785.785 0 00-.6-.25c-.23 0-.43.08-.6.25s-.25.37-.25.61v2.05zm5.52 2.28c0 .24.08.44.25.6.12.16.33.24.6.24.27 0 .47-.08.59-.24l1.46-1.44c.16-.15.24-.36.24-.62 0-.23-.08-.43-.25-.6-.17-.17-.37-.25-.6-.25s-.44.08-.61.23L23.83 5.5c-.17.17-.26.36-.26.59zm.8 11.86c0 .24.08.44.23.6l.66.63c.24.18.45.27.61.27.16 0 .37-.09.61-.27.16-.16.24-.36.24-.6 0-.23-.08-.43-.24-.61l-.64-.61a.94.94 0 00-.65-.26c-.24 0-.43.08-.59.24a.89.89 0 00-.23.61zm1.44-6.32c0 .24.09.45.27.61.18.17.38.25.6.25h2.03c.23 0 .42-.08.59-.25.17-.17.25-.37.25-.61 0-.22-.08-.41-.24-.57a.84.84 0 00-.59-.23h-2.03c-.24 0-.45.08-.62.23-.17.16-.26.35-.26.57z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Item',
      tree: {
        sf_item: {
          name: 'sf-item',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_item_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '300px',
                  height: '90px',
                  boxShadow:
                    '5px 5px 10px 0px rgba(182,190,197,0.68), 0px 0px 0px 0px #000 inset, -5px -5px 10px 0px rgba(255,255,255,0.7), 0px 0px 0px 0px #000 inset',
                  borderRadius: '20px 20px 20px 20px',
                  padding: '2px 2px 2px 2px',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #C3D3E2FF 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_item_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_item',
          children: ['sf_item_icon', 'sf_item_t1', 'sf_item_t2'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E2EAF4',
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  borderRadius: '16px 16px 16px 16px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_item_icon: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'sf_item_wrap',
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
                  softui: [7, 0.09, 13, 0, 145],
                },
                style: {
                  backgroundColor: '#E2EAF4',
                  width: '60px',
                  height: '60px',
                  boxShadow:
                    '7px 7px 13px 0px #cfd8e0, 0px 0px 0px 0px #000 inset, -7px -7px 13px 0px #f9ffff, 0px 0px 0px 0px #000 inset',
                  borderRadius: '15px 15px 15px 15px',
                  padding: '6px 6px 6px 6px',
                  fill: '#8093AD',
                  position: 'absolute',
                },
                x: 15,
                y: 13,
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 30 30',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M9.81 15.25c0 .92.23 1.78.7 2.57s1.1 1.43 1.9 1.9c.8.47 1.66.71 2.59.71.93 0 1.8-.24 2.61-.71a5.3 5.3 0 001.92-1.9c.47-.8.71-1.65.71-2.57 0-.6-.17-1.31-.52-2.14-.35-.83-.77-1.6-1.26-2.3-.44-.57-.96-1.2-1.56-1.88-.6-.68-1.65-1.73-1.89-1.97l-1.28 1.29c-.62.6-1.22 1.29-1.79 2.08-.57.79-1.07 1.64-1.49 2.55-.44.91-.64 1.7-.64 2.37z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        sf_item_t1: {
          name: 'text1',
          type: 'unit',
          lock: false,
          parent: 'sf_item_wrap',
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
                  width: '91px',
                  fontSize: '18px',
                  height: '26px',
                  lineHeight: '26px',
                  fontFamily: 'Roboto-Regular',
                  color: '#102452',
                },
                x: 97,
                y: 15,
              },
            },
          ],
          model: {
            msg: {
              value: 'Humidity',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        sf_item_t2: {
          name: 'text2',
          type: 'unit',
          lock: false,
          parent: 'sf_item_wrap',
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
                  width: '91px',
                  fontSize: '16px',
                  height: '26px',
                  lineHeight: '26px',
                  fontFamily: 'Roboto-Regular',
                  color: '#8A8C94',
                  letterSpacing: '0px',
                },
                x: 97,
                y: 42,
              },
            },
          ],
          model: {
            msg: {
              value: '72%',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Tooltip - 1',
      tree: {
        sf_tip_1: {
          name: 'sf-tip-1',
          type: 'container',
          lock: false,
          parent: null,
          children: ['sf_tip_1_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '240px',
                  height: '50px',
                  boxShadow:
                    '5px 5px 10px 0px rgba(182,190,197,0.68), 0px 0px 0px 0px #000 inset, -5px -5px 10px 0px rgba(255,255,255,0.7), 0px 0px 0px 0px #000 inset',
                  borderRadius: '20px 20px 20px 20px',
                  padding: '2px 2px 2px 2px',
                  backgroundImage:
                    'linear-gradient(145deg, #ffffff 0%, #C3D3E2FF 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_tip_1_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_tip_1',
          children: ['sf_tip_1_icon', 'sf_tip_1_msg', 'sf_tip_1_close'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#E2EAF4',
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  borderRadius: '16px 16px 16px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_tip_1_icon: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'sf_tip_1_wrap',
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
                  fill: '#6891EC',
                  padding: '6px 6px 6px 6px',
                  position: 'static',
                  width: '36px',
                  height: '32px',
                },
                x: 0,
                y: 0,
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
                'M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        sf_tip_1_msg: {
          name: 'msg',
          type: 'unit',
          lock: false,
          parent: 'sf_tip_1_wrap',
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
                  width: '153px',
                  fontSize: '14px',
                  height: '26px',
                  lineHeight: '26px',
                  fontFamily: 'Roboto-Regular',
                  color: '#8093AD',
                  position: 'static',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Hello! Soft UI',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        sf_tip_1_close: {
          name: 'close',
          type: 'unit',
          lock: false,
          parent: 'sf_tip_1_wrap',
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
                  fill: 'rgba(128,147,173,0.29)',
                  padding: '6px 6px 6px 6px',
                  position: 'static',
                  width: '36px',
                  height: '27px',
                },
                x: 0,
                y: 0,
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
                'M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Tooltip - 2',
      tree: {
        sf_tip_2: {
          name: 'sf-tip-2',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_tip_2_icon', 'sf_tip_2_msg', 'sf_tip_2_close'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [3, 0.19, 12, 0, 145],
                },
                style: {
                  backgroundColor: '#E4EDF6',
                  width: '236px',
                  height: '48px',
                  borderRadius: '15px 15px 15px 15px',
                  boxShadow:
                    '3px 3px 12px 0px #b9c0c7, 0px 0px 0px 0px #000 inset, -3px -3px 12px 0px #ffffff, 0px 0px 0px 0px #000 inset',
                  fill: '#8093AD',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_tip_2_icon: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'sf_tip_2',
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
                  fill: '#6891EC',
                  padding: '6px 6px 6px 6px',
                  position: 'static',
                  width: '36px',
                  height: '32px',
                },
                x: 0,
                y: 0,
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
                'M6 10v12h10l-2-8 8 2V6H10c-2.21 0-4 1.79-4 4zm10 16H6v12c0 2.21 1.79 4 4 4h12V32l-8 2 2-8zm18 8l-8-2v10h12c2.21 0 4-1.79 4-4V26H32l2 8zm4-28H26v10l8-2-2 8h10V10c0-2.21-1.79-4-4-4z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        sf_tip_2_msg: {
          name: 'msg',
          type: 'unit',
          lock: false,
          parent: 'sf_tip_2',
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
                  width: '153px',
                  fontSize: '14px',
                  height: '26px',
                  lineHeight: '26px',
                  fontFamily: 'Roboto-Regular',
                  color: '#8093AD',
                  position: 'static',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Good job!',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        sf_tip_2_close: {
          name: 'close',
          type: 'unit',
          lock: false,
          parent: 'sf_tip_2',
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
                  fill: 'rgba(128,147,173,0.29)',
                  padding: '6px 6px 6px 6px',
                  position: 'static',
                  width: '36px',
                  height: '27px',
                },
                x: 0,
                y: 0,
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
                'M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
  ],
  dark: [
    {
      type: 'Container - 1',
      tree: {
        sf_dark_1: {
          name: 'sf-dark-1',
          type: 'container',
          lock: false,
          parent: null,
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
                  backgroundColor: '#252B2F',
                  width: '140px',
                  height: '90px',
                  boxShadow:
                    '6px 6px 12px 0px #161a1c, 0px 0px 0px 0px #000 inset, -6px -6px 12px 0px #343c42, 0px 0px 0px 0px #000 inset',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundImage:
                    'linear-gradient(145deg, #282e32 0%, #21272a 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Container - 2',
      tree: {
        sf_dark_2: {
          name: 'sf-dark-2',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_dark_2_wrap'],
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
                  backgroundColor: '#252B2F',
                  width: '140px',
                  height: '90px',
                  boxShadow:
                    '6px 6px 12px 0px #161a1c, 0px 0px 0px 0px #000 inset, -6px -6px 12px 0px #343c42, 0px 0px 0px 0px #000 inset',
                  borderRadius: '20px 20px 20px 20px',
                  padding: '4px 4px 4px 4px',
                  backgroundImage:
                    'linear-gradient(145deg, #3B3C42FF 0%, #1E2021FF 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_dark_2_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_dark_2',
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
                  softui: [20, 0.2, 40, 0, 145],
                },
                style: {
                  backgroundColor: '#252B2F',
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  borderRadius: '16px 16px 16px 16px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Container - 3',
      tree: {
        sf_dark_3: {
          name: 'sf-dark-3',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_dark_3_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [9, 0.12, 7, 1, 145],
                },
                style: {
                  backgroundColor: '#252B2F',
                  width: '140px',
                  height: '90px',
                  borderRadius: '20px 20px 20px 20px',
                  padding: '2px 2px 2px 2px',
                  borderWidth: '2px',
                  borderColor: '#2B2D35',
                  backgroundImage:
                    'linear-gradient(145deg, #3E3E46FF 0%, #1C1E1FFF 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_dark_3_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_dark_3',
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
                  softui: [6, 0.1, 9, 1, 145],
                },
                style: {
                  backgroundColor: '#252B2F',
                  width: '100%',
                  height: '100%',
                  boxShadow:
                    '0px 0px 0px 0px #000, 6px 6px 9px 0px #21272a inset, 0px 0px 0px 0px #000, -6px -6px 9px 0px #292f34 inset',
                  borderRadius: '16px 16px 16px 16px',
                  position: 'static',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Container - 4',
      tree: {
        sf_dark_4: {
          name: 'sf-dark-4',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_dark_4_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [9, 0.12, 7, 1, 145],
                },
                style: {
                  backgroundColor: '#252B2F',
                  width: '140px',
                  height: '90px',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundImage:
                    'linear-gradient(145deg, #3B3C42FF 0%, #1E2021FF 100%)',
                  padding: '4px 4px 4px 4px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_dark_4_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'sf_dark_4',
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
                  softui: [6, 0.1, 9, 1, 145],
                },
                style: {
                  backgroundColor: '#252B2F',
                  width: '100%',
                  height: '100%',
                  boxShadow:
                    '0px 0px 0px 0px #000, 6px 6px 9px 0px #21272a inset, 0px 0px 0px 0px #000, -6px -6px 9px 0px #292f34 inset',
                  borderRadius: '16px 16px 16px 16px',
                  position: 'static',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Button - 1',
      tree: {
        sf_dark_button_1: {
          name: 'sf-dark-button-1',
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
                option: {
                  softui: 6,
                },
                style: {
                  backgroundColor: '#252B2F',
                  width: '60px',
                  height: '60px',
                  boxShadow:
                    '3px 3px 6px 0px #161a1c, 0px 0px 0px 0px #000 inset, -3px -3px 6px 0px #343c42, 0px 0px 0px 0px #000 inset',
                  borderRadius: '15px 15px 15px 15px',
                  padding: '15px 15px 15px 15px',
                  fill: '#8093AD',
                },
                x: 0,
                y: 0,
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
                'M10 26.36v8L24 42l14-7.64v-8L24 34l-14-7.64zM24 6L2 18l22 12 18-9.82V34h4V18L24 6z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Button - 2',
      tree: {
        sf_dark_button_2: {
          name: 'sf-dark-button-2',
          type: 'container',
          lock: true,
          parent: null,
          children: ['sf_dark_button_2_wrap'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [9, 0.12, 7, 1, 145],
                },
                style: {
                  backgroundColor: '#252B2F',
                  width: '64px',
                  height: '64px',
                  borderRadius: '20px 20px 20px 20px',
                  padding: '3px 3px 3px 3px',
                  backgroundImage:
                    'linear-gradient(145deg, #3B3C42FF 0%, #1E2021FF 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        sf_dark_button_2_wrap: {
          name: 'dec1',
          type: 'container',
          lock: false,
          parent: 'sf_dark_button_2',
          children: ['C79531218ta2_4'],
          content: 'base/container',
          remarks: '',
          status: [
            {
              name: 'default',
              id: 'default',
              active: true,
              props: {
                option: {
                  softui: [4, 0.08, 7, 1, 145],
                },
                style: {
                  backgroundColor: '#252B2F',
                  width: '100%',
                  height: '100%',
                  boxShadow:
                    '0px 0px 0px 0px #000, 6px 6px 9px 0px #21272a inset, 0px 0px 0px 0px #000, -6px -6px 9px 0px #292f34 inset',
                  borderRadius: '16px 16px 16px 16px',
                  position: 'static',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        C79531218ta2_4: {
          name: 'ic_person',
          type: 'unit',
          lock: false,
          parent: 'sf_dark_button_2_wrap',
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
                  width: '30px',
                  height: '30px',
                  fill: '#B4CBEA',
                  position: 'static',
                },
                x: 0,
                y: 0,
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
                'M24 24c4.42 0 8-3.59 8-8 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 4.41 3.58 8 8 8zm0 4c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
  ],
}

export { COM }
