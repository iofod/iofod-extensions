const WhiteBg = {
  backgroundColor: '#F6F6F6',
}

const minWidth = {
  width: '80px',
  display: 'flex',
  justifyContent: 'center',
}

const COM: any = {
  base: [
    {
      type: 'Tab',
      scale: 0.88,
      tree: {
        cu_tab_1: {
          name: 'cu-tab',
          type: 'container',
          lock: false,
          parent: null,
          children: ['cu_tab_1_line', 'cu_tab_1_item'],
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
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-start',
                },
                x: 0,
                y: 0,
                d: 0,
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
        cu_tab_1_line: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'cu_tab_1',
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
                  backgroundColor: '#E03997',
                  height: '5px',
                  width: '28px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  borderRadius: '10px 10px 10px 10px',
                },
                x: 26,
                y: 24,
              },
            },
          ],
          model: {
            ml: {
              value: '# $active<cu_tab_1> * $itemWidth<cu_tab_1_item>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_tab_1_item: {
          name: 'item',
          type: 'unit',
          lock: false,
          parent: 'cu_tab_1',
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
                  fontSize: '14px',
                  color: 'rgba(48,48,48,0.7)',
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
                  color: '#000000',
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
              value: '$active<cu_tab_1>',
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
                    target: 'cu_tab_1',
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
                    target: 'cu_tab_1',
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
      type: 'Tab-Point',
      scale: 0.88,
      tree: {
        cu_tab_2: {
          name: 'cu-tab',
          type: 'container',
          lock: false,
          parent: null,
          children: ['cu_tab_2_dot', 'cu_tab_2_item'],
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
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-start',
                },
                x: 0,
                y: 0,
                d: 0,
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
        cu_tab_2_dot: {
          name: 'dot',
          type: 'container',
          lock: false,
          parent: 'cu_tab_2',
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
                  backgroundColor: '#E03997',
                  height: '8px',
                  width: '8px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  borderRadius: '10px 10px 10px 10px',
                },
                x: 36,
                y: 24,
              },
            },
          ],
          model: {
            ml: {
              value: '# $active<cu_tab_2> * $itemWidth<cu_tab_2_item>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_tab_2_item: {
          name: 'item',
          type: 'unit',
          lock: false,
          parent: 'cu_tab_2',
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
                  fontSize: '14px',
                  color: 'rgba(48,48,48,0.7)',
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
                  color: '#000000',
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
              value: '$active<cu_tab_2>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            msg: {
              value: ['Tab1', 'Tab2', 'Tab13'],
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
                    target: 'cu_tab_2',
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
                    target: 'cu_tab_2',
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
      type: 'NavBar',
      scale: 0.88,
      style: {
        minWidth: '300px',
      },
      tree: {
        cn_navbar: {
          name: 'cu_navbar',
          type: 'container',
          lock: false,
          parent: null,
          children: ['cn_navbar_icon'],
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
                  backgroundColor: 'rgba(255,255,255,0.75)',
                  width: '100%',
                  height: '50px',
                  backdropFilter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(20px)',
                  boxShadow:
                    '0px 7px 14px 0px rgba(0,0,0,0.15), 0px 0px 0px 0px #000 inset',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cn_navbar_icon: {
          name: 'goback',
          type: 'unit',
          lock: false,
          parent: 'cn_navbar',
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
                  fill: '#303030',
                },
                x: 10,
                y: 10,
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
              value: 'M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Header',
      style: WhiteBg,
      scale: 0.88,
      tree: {
        cu_title_5: {
          name: 'cu-header',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_title_5_mark', 'cu_title_5_header'],
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
                  display: 'block',
                  height: '48px',
                  padding: '0px 0px 0px 10px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_5_mark: {
          name: 'mark',
          type: 'container',
          lock: false,
          parent: 'cu_title_5',
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
                  backgroundColor: 'rgba(224,57,151,0.7)',
                  width: '4px',
                  height: '18px',
                  borderRadius: '9px 9px 9px 9px',
                },
                x: 0,
                y: 15,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_5_header: {
          name: 'Header',
          type: 'unit',
          lock: false,
          parent: 'cu_title_5',
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
                  fontSize: '18px',
                  height: '48px',
                  lineHeight: '48px',
                  width: '267px',
                  fontWeight: 'bold',
                  padding: '0px 0px 0px 10px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Header',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Header-Sub Header',
      scale: 0.88,
      style: WhiteBg,
      tree: {
        cu_title_1: {
          name: 'cu-title',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_title_1_header', 'cu_title_1_subheader'],
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
                  display: 'flex',
                  height: '48px',
                  padding: '0px 0px 0px 10px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_1_header: {
          name: 'Header',
          type: 'unit',
          lock: false,
          parent: 'cu_title_1',
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
                  fontSize: '18px',
                  height: '48px',
                  lineHeight: '48px',
                  width: '69px',
                },
                x: 23,
                y: 52,
              },
            },
          ],
          model: {
            msg: {
              value: 'Header',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_title_1_subheader: {
          name: 'Sub Header',
          type: 'unit',
          lock: false,
          parent: 'cu_title_1',
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
                  fontSize: '14px',
                  height: '48px',
                  lineHeight: '50px',
                  color: '#9E9E9E',
                },
                x: 118,
                y: 54,
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
      type: 'Dark Button',
      scale: 0.88,
      tree: {
        cu_button_1: {
          name: 'cu-button',
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
                  width: '70px',
                  height: '36px',
                  textAlign: 'center',
                  fontSize: '14px',
                  lineHeight: '36px',
                  backgroundColor: '#F37B1D',
                  borderRadius: '5px 5px 5px 5px',
                  color: '#FFFFFF',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Button',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Light Button',
      scale: 0.88,
      style: WhiteBg,
      tree: {
        cu_button_2: {
          name: 'cu-button',
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
                  width: '70px',
                  height: '36px',
                  textAlign: 'center',
                  fontSize: '14px',
                  lineHeight: '36px',
                  backgroundColor: 'rgba(243,123,29,0.1)',
                  borderRadius: '5px 5px 5px 5px',
                  color: '#F37B1D',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Button',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Gradient Button',
      scale: 0.88,
      tree: {
        cu_button_3: {
          name: 'cu-button',
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
                  width: '70px',
                  height: '36px',
                  textAlign: 'center',
                  fontSize: '14px',
                  lineHeight: '36px',
                  borderRadius: '5px 5px 5px 5px',
                  color: '#FFFFFF',
                  backgroundImage:
                    'linear-gradient(45deg, #FF9700FF 0%, #ED1C24FF 100%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Button',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Gradient Button',
      scale: 0.88,
      tree: {
        cu_button_4: {
          name: 'cu-button',
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
                  width: '70px',
                  height: '36px',
                  textAlign: 'center',
                  fontSize: '14px',
                  lineHeight: '36px',
                  borderRadius: '5px 5px 5px 5px',
                  color: '#F37B1D',
                  backgroundImage:
                    'linear-gradient(45deg, #ffffff 0%, #FDEBDDFF 90%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Button',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Shadow Button',
      scale: 0.88,
      tree: {
        cu_button_5: {
          name: 'cu-button',
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
                  width: '325px',
                  height: '42px',
                  textAlign: 'center',
                  lineHeight: '42px',
                  backgroundColor: '#ffffff',
                  color: '#303030',
                  borderRadius: '5px 5px 5px 5px',
                  boxShadow:
                    '0px 2px 4px 0px rgba(0,0,0,0.075), 0px 0px 0px 0px #000 inset',
                  fontSize: '16px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Button',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Shadow Button',
      scale: 0.88,
      tree: {
        cu_button_6: {
          name: 'cu-hutton',
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
                  width: '325px',
                  height: '42px',
                  textAlign: 'center',
                  lineHeight: '42px',
                  backgroundColor: '#0081FF',
                  color: '#FFFFFF',
                  borderRadius: '5px 5px 5px 5px',
                  boxShadow:
                    '0px 8px 16px 0px rgba(0,129,255,0.45), 0px 0px 0px 0px #000 inset',
                  fontSize: '16px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Button',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Border Button',
      scale: 0.88,
      tree: {
        cu_button_7: {
          name: 'cu-button',
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
                  width: '70px',
                  height: '36px',
                  textAlign: 'center',
                  fontSize: '14px',
                  lineHeight: '36px',
                  borderRadius: '5px 5px 5px 5px',
                  color: '#0081FF',
                  backgroundImage:
                    'linear-gradient(45deg, #ffffff 0%, #D9ECFFFF 100%)',
                  borderWidth: '1px',
                  borderColor: '#0081FF',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Button',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Border Button',
      scale: 0.88,
      tree: {
        cu_button_8: {
          name: 'cu-button',
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
                  width: '70px',
                  height: '36px',
                  textAlign: 'center',
                  fontSize: '14px',
                  lineHeight: '36px',
                  borderRadius: '5px 5px 5px 5px',
                  color: '#F37B1D',
                  backgroundImage:
                    'linear-gradient(45deg, #ffffff 0%, #FDEBDDFF 90%)',
                  borderWidth: '1px',
                  borderColor: '#F37B1D',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Button',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Shadow Box',
      scale: 0.88,
      tree: {
        cu_box: {
          name: 'cu-box',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_box_deco', 'cu_box_text'],
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
                  width: '290px',
                  height: '100px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_box_deco: {
          name: 'deco',
          type: 'container',
          lock: false,
          parent: 'cu_box',
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
                  width: '240px',
                  height: '60px',
                  backgroundImage:
                    'linear-gradient(45deg, #f33a41 0%, #ed0586 100%)',
                  borderRadius: '5px 5px 5px 5px',
                },
                x: 25,
                y: 16,
              },
            },
            {
              name: 'default:$0',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(10px)',
                  margin: '4px 0px 0px 4px',
                },
              },
            },
          ],
          model: {
            copy: {
              value: 2,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_box_text: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_box',
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
                  height: '60px',
                  lineHeight: '60px',
                  width: '210px',
                },
                x: 40,
                y: 16,
              },
            },
          ],
          model: {
            msg: {
              value: 'Shadow Box',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Shadow Box',
      scale: 0.88,
      tree: {
        cu_box2: {
          name: 'cu-box',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_box2_deco', 'cu_box2_text'],
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
                  width: '290px',
                  height: '100px',
                },
                x: 0,
                y: 0,
                d: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_box2_deco: {
          name: 'deco',
          type: 'container',
          lock: false,
          parent: 'cu_box2',
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
                  width: '240px',
                  height: '60px',
                  borderRadius: '5px 5px 5px 5px',
                  backgroundImage:
                    'linear-gradient(90deg, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
                },
                x: 25,
                y: 16,
              },
            },
            {
              name: 'default:$0',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(10px)',
                  margin: '4px 0px 0px 4px',
                },
              },
            },
          ],
          model: {
            copy: {
              value: 2,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_box2_text: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_box2',
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
                  height: '60px',
                  lineHeight: '60px',
                  width: '210px',
                },
                x: 40,
                y: 16,
              },
            },
          ],
          model: {
            msg: {
              value: 'Shadow Box',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Warp shadows',
      scale: 0.88,
      style: WhiteBg,
      tree: {
        cu_shadow: {
          name: 'cu-shadow',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_shadow_deco', 'cu_shadow_text'],
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
                  width: '290px',
                  height: '88px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_shadow_deco: {
          name: 'deco',
          type: 'container',
          lock: false,
          parent: 'cu_shadow',
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
                  width: '240px',
                  height: '60px',
                  borderRadius: '5px 5px 5px 5px',
                  backgroundColor: '#ffffff',
                },
                x: 25,
                y: 22,
                ty: 1,
              },
            },
            {
              name: 'default:$0',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  width: '50%',
                  height: '15px',
                  backgroundColor: 'rgba(0,0,0,0.45)',
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(10px)',
                },
                d: -8,
                x: 32,
                y: 27,
                ty: 1,
              },
            },
            {
              name: 'default:$1',
              id: 2,
              active: true,
              props: {
                option: {},
                style: {
                  backgroundColor: 'rgba(0,0,0,0.45)',
                  filter:
                    'contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(10px)',
                  width: '50%',
                  height: '15px',
                },
                d: 8,
                x: 32,
                y: 27,
                ty: 1,
                tx: 1,
              },
            },
          ],
          model: {
            copy: {
              value: 3,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_shadow_text: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_shadow',
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
                  color: '#000000',
                  height: '60px',
                  lineHeight: '60px',
                  width: '210px',
                },
                x: 40,
                y: 22,
                ty: 1,
              },
            },
          ],
          model: {
            msg: {
              value: 'Warp shadows',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
  ],
  avator: [
    {
      type: 'Dark avatar',
      scale: 0.88,
      style: minWidth,
      tree: {
        cu_avatar_1: {
          name: 'cu-avatar',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_avatar_1_bg', 'cu_avatar_1_text'],
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
                  width: '32px',
                  height: '32px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_avatar_1_bg: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_1',
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
                  color: '#fff',
                  fill: '#F37B1D',
                },
                x: 0,
                y: 0,
                d: 0,
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 32 32',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'm31.88143,16.09118c-0.05149,1.33455 -0.08008,2.67475 -0.16586,4.00927c-0.12008,1.84782 -0.3946,3.66709 -0.9779,5.44075c-0.85208,2.57778 -2.59057,4.26019 -5.10685,5.20692c-1.01794,0.3821 -2.07589,0.57601 -3.13958,0.75281c-1.9329,0.32505 -3.88874,0.39352 -5.84455,0.39352c-1.40109,0 -2.80218,-0.01143 -4.20327,-0.08555c-1.97868,-0.10267 -3.94023,-0.33082 -5.84455,-0.94672c-1.52691,-0.49046 -2.84793,-1.28319 -3.88874,-2.51507c-0.83492,-0.98661 -1.38964,-2.12725 -1.73849,-3.3591c-0.24591,-0.87259 -0.44606,-1.76796 -0.56046,-2.66906c-0.16008,-1.26035 -0.25162,-2.52647 -0.32595,-3.79251c-0.0572,-0.99807 -0.04575,-1.99607 -0.04575,-2.99414c-0.00571,-1.63679 0.06863,-3.27357 0.24019,-4.90464c0.1544,-1.42576 0.42315,-2.82874 0.89212,-4.18037c0.85208,-2.43522 2.49336,-4.12332 4.91811,-5.03578c1.08082,-0.40494 2.20175,-0.67298 3.34544,-0.83839c2.71643,-0.39922 5.44998,-0.43914 8.18926,-0.37068c1.08082,0.02847 2.16168,0.08551 3.23682,0.1768c1.79569,0.15965 3.55706,0.49046 5.2498,1.15772c2.36757,0.94099 3.85442,2.68615 4.64933,5.05292c0.37173,1.1064 0.61763,2.24131 0.76058,3.39903c0.25164,2.03031 0.34886,4.06062 0.36027,6.10228l0.00003,0l0,-0.00001z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_avatar_1_text: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_1',
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
                  fontSize: '12px',
                  height: '22px',
                  width: '32px',
                  textAlign: 'center',
                },
                x: 0,
                y: 5,
              },
            },
          ],
          model: {
            msg: {
              value: 'Wh',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Light avatar',
      scale: 0.88,
      style: minWidth,
      tree: {
        cu_avatar_2: {
          name: 'cu-avatar',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_avatar_2_bg', 'cu_avatar_2_text'],
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
                  width: '32px',
                  height: '32px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_avatar_2_bg: {
          name: 'icon',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_2',
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
                  color: '#fff',
                  fill: 'rgba(0,129,255,0.1)',
                },
                x: 0,
                y: 0,
                d: 0,
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 32 32',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'm31.88143,16.09118c-0.05149,1.33455 -0.08008,2.67475 -0.16586,4.00927c-0.12008,1.84782 -0.3946,3.66709 -0.9779,5.44075c-0.85208,2.57778 -2.59057,4.26019 -5.10685,5.20692c-1.01794,0.3821 -2.07589,0.57601 -3.13958,0.75281c-1.9329,0.32505 -3.88874,0.39352 -5.84455,0.39352c-1.40109,0 -2.80218,-0.01143 -4.20327,-0.08555c-1.97868,-0.10267 -3.94023,-0.33082 -5.84455,-0.94672c-1.52691,-0.49046 -2.84793,-1.28319 -3.88874,-2.51507c-0.83492,-0.98661 -1.38964,-2.12725 -1.73849,-3.3591c-0.24591,-0.87259 -0.44606,-1.76796 -0.56046,-2.66906c-0.16008,-1.26035 -0.25162,-2.52647 -0.32595,-3.79251c-0.0572,-0.99807 -0.04575,-1.99607 -0.04575,-2.99414c-0.00571,-1.63679 0.06863,-3.27357 0.24019,-4.90464c0.1544,-1.42576 0.42315,-2.82874 0.89212,-4.18037c0.85208,-2.43522 2.49336,-4.12332 4.91811,-5.03578c1.08082,-0.40494 2.20175,-0.67298 3.34544,-0.83839c2.71643,-0.39922 5.44998,-0.43914 8.18926,-0.37068c1.08082,0.02847 2.16168,0.08551 3.23682,0.1768c1.79569,0.15965 3.55706,0.49046 5.2498,1.15772c2.36757,0.94099 3.85442,2.68615 4.64933,5.05292c0.37173,1.1064 0.61763,2.24131 0.76058,3.39903c0.25164,2.03031 0.34886,4.06062 0.36027,6.10228l0.00003,0l0,-0.00001z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_avatar_2_text: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_2',
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
                  color: '#0081FF',
                  fontSize: '12px',
                  height: '22px',
                  width: '32px',
                  textAlign: 'center',
                },
                x: 0,
                y: 5,
              },
            },
          ],
          model: {
            msg: {
              value: 'Hg',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Light gradient avatar',
      scale: 0.88,
      style: minWidth,
      tree: {
        cu_avatar_3: {
          name: 'cu-avatar',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_avatar_3_text'],
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
                    Flutterclipper: '$icon',
                    maskSize: '32px',
                    maskRepeat: 'no-repeat',
                    maskImage: '# $mask',
                  },
                },
                style: {
                  width: '32px',
                  height: '32px',
                  backgroundImage:
                    'linear-gradient(45deg, #ffffff 10%, #FDEBDDFF 90%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            icon: {
              value:
                'm31.88143,16.09118c-0.05149,1.33455 -0.08008,2.67475 -0.16586,4.00927c-0.12008,1.84782 -0.3946,3.66709 -0.9779,5.44075c-0.85208,2.57778 -2.59057,4.26019 -5.10685,5.20692c-1.01794,0.3821 -2.07589,0.57601 -3.13958,0.75281c-1.9329,0.32505 -3.88874,0.39352 -5.84455,0.39352c-1.40109,0 -2.80218,-0.01143 -4.20327,-0.08555c-1.97868,-0.10267 -3.94023,-0.33082 -5.84455,-0.94672c-1.52691,-0.49046 -2.84793,-1.28319 -3.88874,-2.51507c-0.83492,-0.98661 -1.38964,-2.12725 -1.73849,-3.3591c-0.24591,-0.87259 -0.44606,-1.76796 -0.56046,-2.66906c-0.16008,-1.26035 -0.25162,-2.52647 -0.32595,-3.79251c-0.0572,-0.99807 -0.04575,-1.99607 -0.04575,-2.99414c-0.00571,-1.63679 0.06863,-3.27357 0.24019,-4.90464c0.1544,-1.42576 0.42315,-2.82874 0.89212,-4.18037c0.85208,-2.43522 2.49336,-4.12332 4.91811,-5.03578c1.08082,-0.40494 2.20175,-0.67298 3.34544,-0.83839c2.71643,-0.39922 5.44998,-0.43914 8.18926,-0.37068c1.08082,0.02847 2.16168,0.08551 3.23682,0.1768c1.79569,0.15965 3.55706,0.49046 5.2498,1.15772c2.36757,0.94099 3.85442,2.68615 4.64933,5.05292c0.37173,1.1064 0.61763,2.24131 0.76058,3.39903c0.25164,2.03031 0.34886,4.06062 0.36027,6.10228l0.00003,0l0,-0.00001z',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            mask: {
              value:
                "# `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='` + $icon + `'/%3E%3C/svg%3E\")`",
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            Flutterclipper: {
              value: '$icon',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_avatar_3_text: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_3',
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
                  color: '#F37B1D',
                  fontSize: '12px',
                  height: '22px',
                  width: '32px',
                  textAlign: 'center',
                },
                x: 0,
                y: 5,
              },
            },
          ],
          model: {
            msg: {
              value: 'Od',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Dark gradient avatar',
      scale: 0.88,
      style: minWidth,
      tree: {
        cu_avatar_4: {
          name: 'cu-avatar',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_avatar_4_text'],
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
                    Flutterclipper: '$icon',
                    maskSize: '32px',
                    maskRepeat: 'no-repeat',
                    maskImage: '# $mask',
                  },
                },
                style: {
                  width: '32px',
                  height: '32px',
                  backgroundImage:
                    'linear-gradient(45deg, #FF9700FF 10%, #B1242A 90%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            icon: {
              value:
                'm31.88143,16.09118c-0.05149,1.33455 -0.08008,2.67475 -0.16586,4.00927c-0.12008,1.84782 -0.3946,3.66709 -0.9779,5.44075c-0.85208,2.57778 -2.59057,4.26019 -5.10685,5.20692c-1.01794,0.3821 -2.07589,0.57601 -3.13958,0.75281c-1.9329,0.32505 -3.88874,0.39352 -5.84455,0.39352c-1.40109,0 -2.80218,-0.01143 -4.20327,-0.08555c-1.97868,-0.10267 -3.94023,-0.33082 -5.84455,-0.94672c-1.52691,-0.49046 -2.84793,-1.28319 -3.88874,-2.51507c-0.83492,-0.98661 -1.38964,-2.12725 -1.73849,-3.3591c-0.24591,-0.87259 -0.44606,-1.76796 -0.56046,-2.66906c-0.16008,-1.26035 -0.25162,-2.52647 -0.32595,-3.79251c-0.0572,-0.99807 -0.04575,-1.99607 -0.04575,-2.99414c-0.00571,-1.63679 0.06863,-3.27357 0.24019,-4.90464c0.1544,-1.42576 0.42315,-2.82874 0.89212,-4.18037c0.85208,-2.43522 2.49336,-4.12332 4.91811,-5.03578c1.08082,-0.40494 2.20175,-0.67298 3.34544,-0.83839c2.71643,-0.39922 5.44998,-0.43914 8.18926,-0.37068c1.08082,0.02847 2.16168,0.08551 3.23682,0.1768c1.79569,0.15965 3.55706,0.49046 5.2498,1.15772c2.36757,0.94099 3.85442,2.68615 4.64933,5.05292c0.37173,1.1064 0.61763,2.24131 0.76058,3.39903c0.25164,2.03031 0.34886,4.06062 0.36027,6.10228l0.00003,0l0,-0.00001z',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            mask: {
              value:
                "# `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='` + $icon + `'/%3E%3C/svg%3E\")`",
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            Flutterclipper: {
              value: '$icon',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_avatar_4_text: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_4',
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
                  fontSize: '12px',
                  height: '22px',
                  width: '32px',
                  textAlign: 'center',
                },
                x: 0,
                y: 5,
              },
            },
          ],
          model: {
            msg: {
              value: 'X',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Custom gradient avatar',
      scale: 0.88,
      style: minWidth,
      tree: {
        cu_avatar_5: {
          name: 'cu-avatar',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_avatar_5_text'],
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
                    Flutterclipper: '$icon',
                    maskSize: '32px',
                    maskRepeat: 'no-repeat',
                    maskImage: '# $mask',
                  },
                },
                style: {
                  width: '32px',
                  height: '32px',
                  backgroundImage:
                    'linear-gradient(130deg, #0081FFFF 10%, #E54D42FF 90%)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            icon: {
              value:
                'm31.88143,16.09118c-0.05149,1.33455 -0.08008,2.67475 -0.16586,4.00927c-0.12008,1.84782 -0.3946,3.66709 -0.9779,5.44075c-0.85208,2.57778 -2.59057,4.26019 -5.10685,5.20692c-1.01794,0.3821 -2.07589,0.57601 -3.13958,0.75281c-1.9329,0.32505 -3.88874,0.39352 -5.84455,0.39352c-1.40109,0 -2.80218,-0.01143 -4.20327,-0.08555c-1.97868,-0.10267 -3.94023,-0.33082 -5.84455,-0.94672c-1.52691,-0.49046 -2.84793,-1.28319 -3.88874,-2.51507c-0.83492,-0.98661 -1.38964,-2.12725 -1.73849,-3.3591c-0.24591,-0.87259 -0.44606,-1.76796 -0.56046,-2.66906c-0.16008,-1.26035 -0.25162,-2.52647 -0.32595,-3.79251c-0.0572,-0.99807 -0.04575,-1.99607 -0.04575,-2.99414c-0.00571,-1.63679 0.06863,-3.27357 0.24019,-4.90464c0.1544,-1.42576 0.42315,-2.82874 0.89212,-4.18037c0.85208,-2.43522 2.49336,-4.12332 4.91811,-5.03578c1.08082,-0.40494 2.20175,-0.67298 3.34544,-0.83839c2.71643,-0.39922 5.44998,-0.43914 8.18926,-0.37068c1.08082,0.02847 2.16168,0.08551 3.23682,0.1768c1.79569,0.15965 3.55706,0.49046 5.2498,1.15772c2.36757,0.94099 3.85442,2.68615 4.64933,5.05292c0.37173,1.1064 0.61763,2.24131 0.76058,3.39903c0.25164,2.03031 0.34886,4.06062 0.36027,6.10228l0.00003,0l0,-0.00001z',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            mask: {
              value:
                "# `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='` + $icon + `'/%3E%3C/svg%3E\")`",
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            Flutterclipper: {
              value: '$icon',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_avatar_5_text: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_5',
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
                  fontSize: '12px',
                  height: '22px',
                  width: '32px',
                  textAlign: 'center',
                },
                x: 0,
                y: 5,
              },
            },
          ],
          model: {
            msg: {
              value: 'Vv',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Photo tags',
      scale: 0.88,
      tree: {
        cu_tag_1: {
          name: 'cu-tag',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_tag_1_pic', 'cu_tag_1_mark'],
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
                  width: '72px',
                  height: '72px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_tag_1_pic: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_tag_1',
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
                  width: '48px',
                  height: '48px',
                  objectFit: 'fill',
                  borderRadius: '5px 5px 5px 5px',
                },
                x: 12,
                y: 12,
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
          events: [],
        },
        cu_tag_1_mark: {
          name: 'Mark',
          type: 'unit',
          lock: false,
          parent: 'cu_tag_1',
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
                  backgroundColor: '#E54D42',
                  width: '36px',
                  height: '36px',
                  fontSize: '20px',
                  lineHeight: '36px',
                  textAlign: 'center',
                  borderRadius: '18px 18px 18px 18px',
                },
                x: 40,
                y: -3,
                s: 50,
              },
            },
          ],
          model: {
            msg: {
              value: '9',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Dark text tags',
      scale: 0.88,
      tree: {
        cu_tag_2: {
          name: 'cu-tag',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_tag_2_title', 'cu_tag_2_mark'],
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
                  width: '72px',
                  height: '72px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_tag_2_title: {
          name: 'Title',
          type: 'unit',
          lock: false,
          parent: 'cu_tag_2',
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
                  width: '48px',
                  height: '48px',
                  objectFit: 'fill',
                  borderRadius: '67px 67px 67px 67px',
                  lineHeight: '48px',
                  textAlign: 'center',
                  backgroundColor: '#ffffff',
                  fontSize: '17px',
                },
                x: 12,
                y: 12,
              },
            },
          ],
          model: {
            msg: {
              value: 'Ps',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_tag_2_mark: {
          name: 'Mark',
          type: 'unit',
          lock: false,
          parent: 'cu_tag_2',
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
                  backgroundColor: '#0081FF',
                  width: '66px',
                  height: '36px',
                  fontSize: '20px',
                  lineHeight: '32px',
                  textAlign: 'center',
                  borderRadius: '18px 18px 18px 18px',
                },
                x: -12,
                y: 0,
                s: 50,
              },
            },
          ],
          model: {
            msg: {
              value: 'vip',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Light text tags',
      scale: 0.88,
      style: WhiteBg,
      tree: {
        cu_tag_3: {
          name: 'cu-tag',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_tag_3_title', 'cu_tag_3_mark'],
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
                  width: '72px',
                  height: '72px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_tag_3_title: {
          name: 'Title',
          type: 'unit',
          lock: false,
          parent: 'cu_tag_3',
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
                  width: '48px',
                  height: '48px',
                  objectFit: 'fill',
                  borderRadius: '67px 67px 67px 67px',
                  lineHeight: '48px',
                  textAlign: 'center',
                  backgroundColor: 'rgba(0,129,255,0.10196078431372549)',
                  fontSize: '17px',
                  borderWidth: '1px',
                  borderColor: '#0081FF',
                },
                x: 12,
                y: 12,
              },
            },
          ],
          model: {
            msg: {
              value: 'Gc',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_tag_3_mark: {
          name: 'Mark',
          type: 'unit',
          lock: false,
          parent: 'cu_tag_3',
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
                  color: '#0081FF',
                  backgroundColor: '#0081FF',
                  width: '66px',
                  height: '36px',
                  fontSize: '20px',
                  lineHeight: '32px',
                  textAlign: 'center',
                  borderRadius: '18px 18px 18px 18px',
                  backgroundImage:
                    'linear-gradient(45deg, #ffffff 10%, #D9ECFFFF 90%)',
                  borderWidth: '2px',
                  borderColor: '#0081FF',
                  boxShadow:
                    '0px 9px 17px 0px rgba(0,129,255,0.45), 0px 0px 0px 0px #000 inset',
                },
                x: 3,
                y: 0,
                s: 50,
              },
            },
          ],
          model: {
            msg: {
              value: 'tag',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Avatar group-Increment',
      scale: 0.88,
      tree: {
        cu_avatar_list_1: {
          name: 'cu-avatar-list',
          type: 'container',
          lock: true,
          parent: null,
          children: [
            'cu_avatar_list_1_p1',
            'cu_avatar_list_1_p2',
            'cu_avatar_list_1_p3',
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
                  width: '134px',
                  height: '50px',
                  display: 'block',
                  justifyContent: 'space-evenly',
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
        cu_avatar_list_1_p1: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_list_1',
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
                  width: '48px',
                  height: '48px',
                  objectFit: 'fill',
                  borderRadius: '48px 48px 48px 48px',
                  borderWidth: '3px',
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.com/common/animals/1621839267875_cat_1280x852.jpg',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_avatar_list_1_p2: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_list_1',
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
                  width: '48px',
                  height: '48px',
                  objectFit: 'fill',
                  borderRadius: '48px 48px 48px 48px',
                  borderWidth: '3px',
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  margin: '0px 0px 0px 30px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.com/common/animals/1621839824269_bald eagle_1280x960.jpg?imageView2/2/w/60',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_avatar_list_1_p3: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_list_1',
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
                  width: '48px',
                  height: '48px',
                  objectFit: 'fill',
                  borderRadius: '48px 48px 48px 48px',
                  borderWidth: '3px',
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  margin: '0px 0px 0px 60px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.com/common/animals/1621839736288_bird_854x1280.jpg?imageView2/2/w/60',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Avatar group-Decrement',
      scale: 0.88,
      tree: {
        cu_avatar_list_2: {
          name: 'cu-avatar-list',
          type: 'container',
          lock: true,
          parent: null,
          children: [
            'cu_avatar_list_2_p1',
            'cu_avatar_list_2_p2',
            'cu_avatar_list_2_p3',
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
                  customKeys: {},
                },
                style: {
                  width: '134px',
                  height: '50px',
                  display: 'block',
                  justifyContent: 'space-evenly',
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
        cu_avatar_list_2_p1: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_list_2',
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
                  width: '48px',
                  height: '48px',
                  objectFit: 'fill',
                  borderRadius: '48px 48px 48px 48px',
                  borderWidth: '3px',
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  margin: '0px 0px 0px 60px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.com/common/animals/1621839736288_bird_854x1280.jpg?imageView2/2/w/60',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_avatar_list_2_p2: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_list_2',
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
                  width: '48px',
                  height: '48px',
                  objectFit: 'fill',
                  borderRadius: '48px 48px 48px 48px',
                  borderWidth: '3px',
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  margin: '0px 0px 0px 30px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.com/common/animals/1621839824269_bald eagle_1280x960.jpg?imageView2/2/w/60',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_avatar_list_2_p3: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_list_2',
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
                  width: '48px',
                  height: '48px',
                  objectFit: 'fill',
                  borderRadius: '48px 48px 48px 48px',
                  borderWidth: '3px',
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.com/common/animals/1621839267875_cat_1280x852.jpg',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Single avatar',
      scale: 0.88,
      tree: {
        cu_avatar_group_1: {
          name: 'cu-avatar-group',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_avatar_group_1_pic'],
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
                  width: '64px',
                  height: '64px',
                  borderRadius: '5px 5px 5px 5px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignContent: 'space-evenly',
                  alignItems: 'flex-start',
                  padding: '3px 3px 3px 3px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_avatar_group_1_pic: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_group_1',
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
                  borderRadius: '4px 4px 4px 4px',
                  position: 'static',
                  objectFit: 'fill',
                },
                x: 7,
                y: 8,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.com/common/animals/1621839267875_cat_1280x852.jpg',
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
      type: 'Multiple avatars-full',
      scale: 0.88,
      tree: {
        cu_avatar_group_2: {
          name: 'cu-avatar-group',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_avatar_group_2_pic'],
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
                  width: '64px',
                  height: '64px',
                  borderRadius: '5px 5px 5px 5px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignContent: 'space-between',
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
        cu_avatar_group_2_pic: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_group_2',
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
                  width: '18px',
                  height: '18px',
                  objectFit: 'fill',
                  borderRadius: '4px 4px 4px 4px',
                  position: 'static',
                  margin: '0px 1px 0px 1px',
                },
                x: 7,
                y: 8,
              },
            },
          ],
          model: {
            url: {
              value: [
                'https://static.iofod.com/common/animals/1621840029342_amurtiger_1280x852.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839322462_african lion_1280x952.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839736288_bird_854x1280.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839383917_australian shepherd_1280x854.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839287997_arctic wolf_1280x854.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839824269_bald eagle_1280x960.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839930353_barn owl_1280x852.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839768607_ara_1280x852.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839720442_bee_1280x854.jpg?imageView2/2/w/60',
              ],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            copy: {
              value: 9,
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
      type: 'Multiple avatars-VIII',
      scale: 0.88,
      tree: {
        cu_avatar_group_3: {
          name: 'cu-avatar-group',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_avatar_group_3_pic'],
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
                  width: '64px',
                  height: '64px',
                  borderRadius: '5px 5px 5px 5px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignContent: 'space-between',
                  padding: '2px 2px 2px 2px',
                  alignItems: 'flex-start',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_avatar_group_3_pic: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_group_3',
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
                  width: '18px',
                  height: '18px',
                  objectFit: 'fill',
                  borderRadius: '4px 4px 4px 4px',
                  position: 'static',
                  margin: '0px 1px 0px 1px',
                },
                x: 7,
                y: 8,
              },
            },
          ],
          model: {
            url: {
              value: [
                'https://static.iofod.com/common/animals/1621840029342_amurtiger_1280x852.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839322462_african lion_1280x952.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839736288_bird_854x1280.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839383917_australian shepherd_1280x854.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839287997_arctic wolf_1280x854.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839824269_bald eagle_1280x960.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839930353_barn owl_1280x852.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839768607_ara_1280x852.jpg?imageView2/2/w/60',
              ],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            copy: {
              value: 8,
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
      type: 'Multiple avatars-VIII',
      scale: 0.88,
      tree: {
        cu_avatar_group_4: {
          name: 'cu-avatar-group',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_avatar_group_4_pic'],
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
                  width: '64px',
                  height: '64px',
                  borderRadius: '5px 5px 5px 5px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignContent: 'space-between',
                  padding: '2px 2px 2px 2px',
                  alignItems: 'flex-start',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_avatar_group_4_pic: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_group_4',
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
                  width: '18px',
                  height: '18px',
                  objectFit: 'fill',
                  borderRadius: '4px 4px 4px 4px',
                  position: 'static',
                  margin: '0px 1px 0px 1px',
                },
                x: 7,
                y: 8,
              },
            },
            {
              name: 'default:$0',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  objectFit: 'fill',
                  borderRadius: '4px 4px 4px 4px',
                  position: 'static',
                  margin: '0px 1px 0px 10px',
                },
              },
            },
            {
              name: 'default:$1',
              id: 2,
              active: true,
              props: {
                option: {},
                style: {
                  objectFit: 'fill',
                  borderRadius: '4px 4px 4px 4px',
                  position: 'static',
                  margin: '0px 10px 0px 1px',
                },
              },
            },
          ],
          model: {
            url: {
              value: [
                'https://static.iofod.com/common/animals/1621840029342_amurtiger_1280x852.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839322462_african lion_1280x952.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839736288_bird_854x1280.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839383917_australian shepherd_1280x854.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839287997_arctic wolf_1280x854.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839824269_bald eagle_1280x960.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839930353_barn owl_1280x852.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839768607_ara_1280x852.jpg?imageView2/2/w/60',
              ],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            copy: {
              value: 8,
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
      type: 'Multiple avatars-III',
      scale: 0.88,
      tree: {
        cu_avatar_group_5: {
          name: 'cu-avatar-group',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_avatar_group_5_pic'],
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
                  width: '64px',
                  height: '64px',
                  borderRadius: '5px 5px 5px 5px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignContent: 'space-evenly',
                  alignItems: 'flex-start',
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
        cu_avatar_group_5_pic: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_avatar_group_5',
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
                  width: '27px',
                  height: '27px',
                  objectFit: 'fill',
                  borderRadius: '4px 4px 4px 4px',
                  position: 'static',
                  margin: '0px 1px 0px 1px',
                },
                x: 7,
                y: 8,
              },
            },
            {
              name: 'default:$0',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  objectFit: 'fill',
                  position: 'static',
                  margin: '0px 10px 0px 10px',
                },
              },
            },
          ],
          model: {
            url: {
              value: [
                'https://static.iofod.com/common/animals/1621839768607_ara_1280x852.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839322462_african lion_1280x952.jpg?imageView2/2/w/60',
                'https://static.iofod.com/common/animals/1621839736288_bird_854x1280.jpg?imageView2/2/w/60',
              ],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
            copy: {
              value: 3,
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
  form: [
    {
      type: 'Input',
      scale: 0.88,
      tree: {
        cu_input: {
          name: 'cu-input',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_input_name', 'cu_input_form'],
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
                  width: '100%',
                  height: '56px',
                  borderWidth: '1px 0px 1px 0px',
                  borderColor: 'rgba(119,119,119,0.25098039215686274)',
                  display: 'flex',
                  alignItems: 'center',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            value: {
              value: '',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_input_name: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_input',
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
                  fontSize: '14px',
                  height: '36px',
                  lineHeight: '36px',
                  width: '61px',
                  padding: '0px 0px 0px 15px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Text',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_input_form: {
          name: 'Input',
          type: 'unit',
          lock: false,
          parent: 'cu_input',
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
                  padding: '0px 8px 0px 8px',
                  backgroundColor: '#ffffff',
                  height: '36px',
                  lineHeight: '36px',
                  position: 'static',
                  width: '229px',
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
              value: 'Please input something',
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
          events: [
            {
              event: 'change',
              actions: [
                {
                  fn: 'getModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'value',
                    exp: 'N',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'cu_input',
                    key: 'value',
                    exp: 'N',
                    value: '$response',
                  },
                },
              ],
              expand: true,
            },
          ],
        },
      },
    },
    {
      type: 'Password',
      scale: 0.88,
      tree: {
        cu_password: {
          name: 'cu-password',
          type: 'container',
          lock: true,
          parent: null,
          children: [
            'cu_password_name',
            'cu_password_form',
            'cu_password_on',
            'cu_password_off',
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
                  width: '100%',
                  height: '56px',
                  borderWidth: '1px 0px 1px 0px',
                  borderColor: 'rgba(119,119,119,0.25098039215686274)',
                  display: 'flex',
                  alignItems: 'center',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            showPw: {
              value: false,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
            value: {
              value: '',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_password_name: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_password',
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
                  fontSize: '14px',
                  height: '36px',
                  lineHeight: '36px',
                  width: '90px',
                  padding: '0px 0px 0px 15px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Password',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_password_form: {
          name: 'Password',
          type: 'unit',
          lock: false,
          parent: 'cu_password',
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
                  padding: '0px 8px 0px 8px',
                  backgroundColor: '#ffffff',
                  height: '36px',
                  lineHeight: '36px',
                  position: 'static',
                  width: '230px',
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
              value: "# $showPw<cu_password> ? 'text' : 'password'",
              subscribe: '',
              ZI: 0,
            },
            placeholder: {
              value: 'Please input password',
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
          events: [
            {
              event: 'change',
              actions: [
                {
                  fn: 'getModel',
                  active: true,
                  params: {
                    target: '$current',
                    key: 'value',
                    exp: 'N',
                  },
                },
                {
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'cu_password',
                    key: 'value',
                    exp: 'N',
                    value: '$response',
                  },
                },
              ],
              expand: true,
            },
          ],
        },
        cu_password_on: {
          name: 'on',
          type: 'unit',
          lock: false,
          parent: 'cu_password',
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
                  width: '30px',
                  height: '30px',
                  padding: '8px 8px 8px 8px',
                  fill: '#303030',
                },
                x: 10,
                y: 12,
                tx: 1,
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
                'M24 14c5.52 0 10 4.48 10 10 0 1.29-.26 2.52-.71 3.65l5.85 5.85c3.02-2.52 5.4-5.78 6.87-9.5-3.47-8.78-12-15-22.01-15-2.8 0-5.48.5-7.97 1.4l4.32 4.31c1.13-.44 2.36-.71 3.65-.71zM4 8.55l4.56 4.56.91.91C6.17 16.6 3.56 20.03 2 24c3.46 8.78 12 15 22 15 3.1 0 6.06-.6 8.77-1.69l.85.85L39.45 44 42 41.46 6.55 6 4 8.55zM15.06 19.6l3.09 3.09c-.09.43-.15.86-.15 1.31 0 3.31 2.69 6 6 6 .45 0 .88-.06 1.3-.15l3.09 3.09C27.06 33.6 25.58 34 24 34c-5.52 0-10-4.48-10-10 0-1.58.4-3.06 1.06-4.4zm8.61-1.57l6.3 6.3L30 24c0-3.31-2.69-6-6-6l-.33.03z',
              subscribe: '',
              ZI: 0,
            },
            render: {
              value: '# !!$showPw<cu_password>',
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
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'cu_password',
                    key: 'showPw',
                    exp: 'N',
                    value: false,
                  },
                },
              ],
              gesture: true,
              expand: true,
            },
          ],
        },
        cu_password_off: {
          name: 'off',
          type: 'unit',
          lock: false,
          parent: 'cu_password',
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
                  padding: '8px 8px 8px 8px',
                  fill: '#303030',
                },
                x: 10,
                y: 12,
                tx: 1,
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
                'M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z',
              subscribe: '',
              ZI: 0,
            },
            render: {
              value: '# !$showPw<cu_password>',
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
                  fn: 'setModel',
                  active: true,
                  params: {
                    target: 'cu_password',
                    key: 'showPw',
                    exp: 'N',
                    value: true,
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
      type: 'Switch',
      scale: 0.88,
      tree: {
        cu_switch: {
          name: 'cu-switch',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_switch_thumb'],
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
                  backgroundColor: 'rgba(119,119,119,0.3)',
                  width: '47px',
                  height: '26px',
                  borderRadius: '15px 15px 15px 15px',
                  transition: 'all 0.2s cubic-bezier(0.645,0.045,0.355,1)',
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
                option: {},
                style: {
                  backgroundColor: '#E03997',
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
              name: 'click - click',
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
        cu_switch_thumb: {
          name: 'thumb',
          type: 'container',
          lock: false,
          parent: 'cu_switch',
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
                  backgroundColor: '#FFFFFF',
                  width: '20px',
                  height: '20px',
                  borderRadius: '10px 10px 10px 10px',
                  transition: 'all 0.3s cubic-bezier(0.645,0.045,0.355,1)',
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
                option: {},
                style: {},
                x: 24,
                y: 3,
              },
            },
          ],
          model: {
            active: {
              value: '$value<cu_switch>',
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
      scale: 0.88,
      tree: {
        cu_radios: {
          name: 'cu-radios',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_radios_name', 'cu_radios_wrap'],
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
                  width: '100%',
                  height: '56px',
                  borderWidth: '1px 0px 1px 0px',
                  borderColor: 'rgba(119,119,119,0.25098039215686274)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
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
                  opacity: 0.5,
                  filter: 'grayscale(100%)',
                },
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
        cu_radios_name: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_radios',
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
                  fontSize: '14px',
                  height: '36px',
                  lineHeight: '36px',
                  width: '80px',
                  padding: '0px 0px 0px 15px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Radios',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_radios_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'cu_radios',
          children: ['cu_radios_item'],
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
                  width: '247px',
                  height: '56px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  position: 'static',
                },
                x: 100,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_radios_item: {
          name: 'item',
          type: 'container',
          lock: false,
          parent: 'cu_radios_wrap',
          children: ['cu_radios_label', 'cu_radios_dec_bg', 'cu_radios_dec'],
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
                  width: '74px',
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
              value: '$active<cu_radios>',
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
              value: '$disabled<cu_radios>',
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
                    target: 'cu_radios',
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
                    target: 'cu_radios',
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
        cu_radios_label: {
          name: 'label',
          type: 'unit',
          lock: false,
          parent: 'cu_radios_item',
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
                  color: '#303030',
                  fontSize: '14px',
                  width: '48px',
                  height: '22px',
                },
                x: 22,
                y: 17,
              },
            },
          ],
          model: {
            msg: {
              value: ['op1', 'op2', 'op3'],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
          },
          events: [],
        },
        cu_radios_dec_bg: {
          name: 'bg',
          type: 'container',
          lock: false,
          parent: 'cu_radios_item',
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
                  width: '18px',
                  height: '18px',
                  borderRadius: '9px 9px 9px 9px',
                  borderWidth: '2px',
                  borderColor: 'rgba(119,119,119,0.25)',
                },
                x: 0,
                y: 19,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_radios_dec: {
          name: 'selected',
          type: 'container',
          lock: false,
          parent: 'cu_radios_item',
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
                  width: '18px',
                  height: '18px',
                  borderRadius: '9px 9px 9px 9px',
                  borderWidth: '9px',
                  borderColor: 'rgba(119,119,119,0)',
                  transition: 'all 0.2s cubic-bezier(0.645,0.045,0.355,1)',
                },
                x: 0,
                y: 19,
              },
            },
            {
              name: 'default:$i==$active',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  borderWidth: '4px',
                  borderColor: '#E03997',
                },
              },
            },
          ],
          model: {
            active: {
              value: '$active<cu_radios>',
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
      type: 'Solid color progress bar',
      scale: 0.88,
      tree: {
        cu_progress_1: {
          name: 'cu-progress',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_progress_1_wrap'],
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
                  height: '40px',
                  padding: '0px 12px 0px 12px',
                  width: '300px',
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
          },
          events: [],
        },
        cu_progress_1_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'cu_progress_1',
          children: ['cu_progress_1_rect'],
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
                  backgroundColor: '#E0E0E0',
                  height: '16px',
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
        cu_progress_1_rect: {
          name: 'progress',
          type: 'container',
          lock: false,
          parent: 'cu_progress_1_wrap',
          children: ['cu_progress_1_value'],
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
                  backgroundColor: '#3EB93B',
                  height: '16px',
                  width: '30px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<cu_progress_1>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_progress_1_value: {
          name: 'Value',
          type: 'unit',
          lock: false,
          parent: 'cu_progress_1_rect',
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
                  fontSize: '12px',
                  height: '16px',
                  lineHeight: '16px',
                  textAlign: 'center',
                  width: '100%',
                  color: '#FFFFFF',
                },
                x: 0,
                y: 0,
                s: 100,
              },
            },
          ],
          model: {
            msg: {
              value: "# $value<cu_progress_1> + '%'",
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Striped progress bar',
      scale: 0.88,
      tree: {
        cu_progress_2: {
          name: 'cu-progress',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_progress_2_wrap'],
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
                  height: '40px',
                  padding: '0px 12px 0px 12px',
                  width: '300px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            value: {
              value: 70,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_progress_2_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'cu_progress_2',
          children: ['cu_progress_2_rect'],
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
                  backgroundColor: '#E0E0E0',
                  height: '16px',
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
        cu_progress_2_rect: {
          name: 'progress',
          type: 'container',
          lock: false,
          parent: 'cu_progress_2_wrap',
          children: ['cu_progress_2_value'],
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
                  backgroundColor: '#3EB93B',
                  height: '16px',
                  width: '30px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            pl: {
              value: '# $value<cu_progress_2>',
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_progress_2_value: {
          name: 'Value',
          type: 'unit',
          lock: false,
          parent: 'cu_progress_2_rect',
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
                    FlutterGradientSize: '0.27',
                    backgroundSize: '36px 36px',
                    backgroundRepeat: 'repeat',
                  },
                },
                style: {
                  fontSize: '12px',
                  height: '16px',
                  lineHeight: '16px',
                  textAlign: 'center',
                  width: '100%',
                  color: '#FFFFFF',
                  backgroundImage:
                    'linear-gradient(45deg, #ffffff26 25%, #00000000 25%, #00000000 50%, #ffffff26 50%, #ffffff26 75%, #00000000 50%, #00000000 100%)',
                },
                x: 0,
                y: 0,
                s: 100,
              },
            },
          ],
          model: {
            msg: {
              value: "# $value<cu_progress_2> + '%'",
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Step bar',
      style: WhiteBg,
      tree: {
        cu_steps: {
          name: 'cu-steps',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_steps_item'],
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
                  width: '354px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            step: {
              value: 1,
              subscribe: '',
              ZI: 0,
              RM: true,
            },
          },
          events: [],
        },
        cu_steps_item: {
          name: 'item',
          type: 'container',
          lock: true,
          parent: 'cu_steps',
          children: ['cu_steps_sub', 'u77452809p8n'],
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
                  width: '88px',
                  height: '57px',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'static',
                },
                x: 0,
                y: 9,
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
        cu_steps_sub: {
          name: 'step',
          type: 'container',
          lock: false,
          parent: 'cu_steps_item',
          children: ['cu_steps_dot', 'cu_steps_icon', 'cu_steps_msg'],
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
                  width: '59px',
                  height: '45px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
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
        cu_steps_dot: {
          name: 'dot',
          type: 'container',
          lock: false,
          parent: 'cu_steps_sub',
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
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#8799A3',
                  borderRadius: '10px 10px 10px 10px',
                },
                x: 26,
                y: 5,
              },
            },
            {
              name: 'default:$i <= $step<cu_steps>',
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
          model: {},
          events: [],
        },
        cu_steps_icon: {
          name: 'done',
          type: 'unit',
          lock: false,
          parent: 'cu_steps_sub',
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
                  width: '18px',
                  height: '18px',
                  position: 'static',
                  fill: '#FFFFFF',
                  backgroundColor: '#0081FF',
                  padding: '3px 3px 3px 3px',
                  borderRadius: '10px 10px 10px 10px',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$i > $step<cu_steps>',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  width: '18px',
                  height: '18px',
                  position: 'static',
                  opacity: 0,
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
              value: 'M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_steps_msg: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_steps_sub',
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
                  width: '68px',
                  height: '18px',
                  fontSize: '14px',
                  textAlign: 'center',
                  position: 'static',
                  color: '#0081FF',
                },
                x: 0,
                y: 0,
              },
            },
            {
              name: 'default:$i > $step<cu_steps>',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  color: '#8799A3',
                },
              },
            },
          ],
          model: {
            msg: {
              value: ['Step1', 'Step2', 'Step3', 'Done'],
              subscribe: '',
              ZI: 1,
              RM: true,
            },
          },
          events: [],
        },
        u77452809p8n: {
          name: 'next',
          type: 'unit',
          lock: false,
          parent: 'cu_steps_item',
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
                  width: '24px',
                  height: '29px',
                  fill: '#CCCCCC',
                  position: 'static',
                },
                x: 95,
                y: 0,
              },
            },
            {
              name: 'default:$i + 1 == $copy<cu_steps_item>',
              id: 1,
              active: true,
              props: {
                option: {},
                style: {
                  position: 'static',
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
              value: 'M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
  ],
  combined: [
    {
      type: 'Header-Dot',
      scale: 0.88,
      style: WhiteBg,
      tree: {
        cu_title_2: {
          name: 'cu-title-dot',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_title_2_dot', 'cu_title_2_wrap'],
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
                  display: 'block',
                  height: '48px',
                  padding: '0px 0px 0px 10px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_2_dot: {
          name: 'dot',
          type: 'container',
          lock: false,
          parent: 'cu_title_2',
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
                  backgroundColor: 'rgba(224,57,151,0.7)',
                  width: '18px',
                  height: '18px',
                  borderRadius: '9px 9px 9px 9px',
                },
                x: 5,
                y: 5,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_2_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'cu_title_2',
          children: ['cu_title_2_header', 'cu_title_2_subheader'],
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
                  display: 'flex',
                  height: '48px',
                  padding: '0px 0px 0px 10px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_2_header: {
          name: 'Header',
          type: 'unit',
          lock: false,
          parent: 'cu_title_2_wrap',
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
                  fontSize: '18px',
                  height: '48px',
                  lineHeight: '48px',
                  width: '42px',
                },
                x: 23,
                y: 52,
              },
            },
          ],
          model: {
            msg: {
              value: 'Dot',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_title_2_subheader: {
          name: 'Sub Header',
          type: 'unit',
          lock: false,
          parent: 'cu_title_2_wrap',
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
                  fontSize: '14px',
                  height: '48px',
                  lineHeight: '50px',
                  color: '#9E9E9E',
                },
                x: 118,
                y: 54,
              },
            },
          ],
          model: {
            msg: {
              value: 'Dot',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Header-Line',
      scale: 0.88,
      style: WhiteBg,
      tree: {
        cu_title_3: {
          name: 'cu-title-line',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_title_3_line', 'cu_title_3_wrap'],
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
                  display: 'block',
                  height: '48px',
                  padding: '0px 0px 0px 10px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_3_line: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'cu_title_3',
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
                  backgroundColor: 'rgba(224,57,151,0.7)',
                  width: '50px',
                  height: '9px',
                },
                x: 10,
                y: 26,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_3_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'cu_title_3',
          children: ['cu_title_3_header', 'cu_title_3_subheader'],
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
                  display: 'flex',
                  height: '48px',
                  padding: '0px 0px 0px 10px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_3_header: {
          name: 'Header',
          type: 'unit',
          lock: false,
          parent: 'cu_title_3_wrap',
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
                  fontSize: '18px',
                  height: '48px',
                  lineHeight: '48px',
                  width: '42px',
                },
                x: 23,
                y: 52,
              },
            },
          ],
          model: {
            msg: {
              value: 'Line',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_title_3_subheader: {
          name: 'Sub Header',
          type: 'unit',
          lock: false,
          parent: 'cu_title_3_wrap',
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
                  fontSize: '14px',
                  height: '48px',
                  lineHeight: '50px',
                  color: '#9E9E9E',
                },
                x: 118,
                y: 54,
              },
            },
          ],
          model: {
            msg: {
              value: 'Line',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Header-style',
      scale: 0.88,
      style: WhiteBg,
      tree: {
        cu_title_4: {
          name: 'cu-title-custom',
          type: 'container',
          lock: true,
          parent: null,
          children: [
            'cu_title_4_title',
            'cu_title_4_dec1',
            'cu_title_4_line_1',
            'cu_title_4_line_2',
            'cu_title_4_dec2',
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
                  display: 'block',
                  height: '54px',
                  padding: '0px 0px 0px 10px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_4_title: {
          name: 'Header',
          type: 'unit',
          lock: false,
          parent: 'cu_title_4',
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
                  position: 'absolute',
                  fontSize: '18px',
                  height: '54px',
                  lineHeight: '54px',
                  width: '135px',
                  textAlign: 'center',
                },
                x: 83,
                y: 0,
              },
            },
          ],
          model: {
            msg: {
              value: 'Recommend',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_title_4_dec1: {
          name: 'dec',
          type: 'container',
          lock: true,
          parent: 'cu_title_4',
          children: ['cu_title_4_dec1_1', 'cu_title_4_dec1_2'],
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
                  width: '28px',
                  height: '29px',
                },
                x: 55,
                y: 13,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_4_dec1_1: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'cu_title_4_dec1',
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
                  backgroundColor: 'rgba(224,57,151,0.7)',
                  width: '4px',
                  height: '12px',
                  borderRadius: '10px 10px 10px 10px',
                },
                x: 4,
                y: 9,
                d: 30,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_4_dec1_2: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'cu_title_4_dec1',
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
                  backgroundColor: 'rgba(224,57,151,0.7)',
                  width: '4px',
                  height: '20px',
                  borderRadius: '10px 10px 10px 10px',
                },
                x: 14,
                y: 5,
                d: 30,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_4_line_1: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'cu_title_4',
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
                  backgroundColor: 'rgba(224,57,151,0.7)',
                  width: '50px',
                  height: '1px',
                },
                x: 2,
                y: 27,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_4_line_2: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'cu_title_4',
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
                  backgroundColor: 'rgba(224,57,151,0.7)',
                  width: '50px',
                  height: '1px',
                },
                x: 248,
                y: 27,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_4_dec2: {
          name: 'dec',
          type: 'container',
          lock: true,
          parent: 'cu_title_4',
          children: ['cu_title_4_dec2_1', 'cu_title_4_dec2_2'],
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
                  width: '28px',
                  height: '29px',
                },
                x: 223,
                y: 13,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_4_dec2_1: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'cu_title_4_dec2',
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
                  backgroundColor: 'rgba(224,57,151,0.7)',
                  width: '4px',
                  height: '12px',
                  borderRadius: '10px 10px 10px 10px',
                },
                x: 14,
                y: 9,
                d: 30,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_title_4_dec2_2: {
          name: 'line',
          type: 'container',
          lock: false,
          parent: 'cu_title_4_dec2',
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
                  backgroundColor: 'rgba(224,57,151,0.7)',
                  width: '4px',
                  height: '20px',
                  borderRadius: '10px 10px 10px 10px',
                },
                x: 4,
                y: 5,
                d: 30,
              },
            },
          ],
          model: {},
          events: [],
        },
      },
    },
    {
      type: 'Meau',
      scale: 0.88,
      tree: {
        cu_meau: {
          name: 'cu-meau',
          type: 'container',
          lock: true,
          parent: null,
          children: [
            'cu_meau_item1',
            'cu_meau_item2',
            'cu_meau_item3',
            'cu_meau_item4',
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
                  width: '345px',
                  height: '226px',
                  borderRadius: '5px 5px 5px 5px',
                  borderWidth: '1px',
                  borderColor: 'rgba(119,119,119,0.25)',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_meau_item1: {
          name: 'item',
          type: 'container',
          lock: true,
          parent: 'cu_meau',
          children: [
            'cu_meau_item1_icon',
            'cu_meau_item1_name',
            'cu_meau_item1_action',
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
                  position: 'static',
                  width: '315px',
                  height: '56px',
                  margin: '0px 15px 0px 15px',
                  borderWidth: '0px 0px 1px 0px',
                  borderColor: 'rgba(119,119,119,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                },
                x: 32,
                y: 22,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_meau_item1_icon: {
          name: 'Mark',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item1',
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
                  width: '20px',
                  height: '20px',
                  fill: '#006BFF',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            viewBox: {
              value: '0 0 320 512',
              subscribe: '',
              ZI: 0,
            },
            d: {
              value:
                'M196.48 260.023l92.626-103.333L143.125 0v206.33l-86.111-86.111-31.406 31.405 108.061 108.399L25.608 368.422l31.406 31.405 86.111-86.111L145.84 512l148.552-148.644-97.912-103.333zm40.86-102.996l-49.977 49.978-.338-100.295 50.315 50.317zM187.363 313.04l49.977 49.978-50.315 50.316.338-100.294z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item1_name: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item1',
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
                  fontSize: '14px',
                  height: '36px',
                  lineHeight: '36px',
                  width: '110px',
                  padding: '0px 0px 0px 10px',
                },
                x: 44,
                y: 12,
              },
            },
          ],
          model: {
            msg: {
              value: 'Bluetooth',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item1_action: {
          name: 'action',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item1',
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
                  width: '20px',
                  height: '20px',
                  fill: '#9E9E9E',
                },
                x: 294,
                y: 18,
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
              value: 'M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item2: {
          name: 'item',
          type: 'container',
          lock: true,
          parent: 'cu_meau',
          children: [
            'cu_meau_item2_icon',
            'cu_meau_item2_name',
            'cu_meau_item2_action',
            'cu_meau_item2_wrap',
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
                  position: 'static',
                  width: '315px',
                  height: '56px',
                  margin: '0px 15px 0px 15px',
                  borderWidth: '0px 0px 1px 0px',
                  borderColor: 'rgba(119,119,119,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                },
                x: 32,
                y: 22,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_meau_item2_icon: {
          name: 'Mark',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item2',
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
                  width: '20px',
                  height: '20px',
                  fill: '#FF006B',
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
                'M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24zM32 22l-14 8V14z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item2_name: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item2',
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
                  fontSize: '14px',
                  height: '36px',
                  lineHeight: '36px',
                  width: '110px',
                  padding: '0px 0px 0px 10px',
                },
                x: 44,
                y: 12,
              },
            },
          ],
          model: {
            msg: {
              value: 'Video',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item2_action: {
          name: 'action',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item2',
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
                  width: '20px',
                  height: '20px',
                  fill: '#9E9E9E',
                },
                x: 294,
                y: 18,
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
              value: 'M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item2_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'cu_meau_item2',
          children: ['cu_meau_item2_button'],
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
                  fontSize: '14px',
                  height: '36px',
                  lineHeight: '36px',
                  width: '160px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                },
                x: 135,
                y: 30,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_meau_item2_button: {
          name: 'cu-button',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item2_wrap',
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
                  width: '70px',
                  height: '36px',
                  textAlign: 'center',
                  fontSize: '14px',
                  lineHeight: '36px',
                  borderRadius: '5px 5px 5px 5px',
                  color: '#0081FF',
                  position: 'static',
                  borderWidth: '1px',
                  borderColor: '#0081FF',
                },
                x: 21,
                y: 23,
              },
            },
          ],
          model: {
            msg: {
              value: 'Upload',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item3: {
          name: 'item',
          type: 'container',
          lock: true,
          parent: 'cu_meau',
          children: [
            'cu_meau_item3_icon',
            'cu_meau_item3_name',
            'cu_meau_item3_action',
            'cu_meau_item3_wrap',
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
                  position: 'static',
                  width: '315px',
                  height: '56px',
                  margin: '0px 15px 0px 15px',
                  borderWidth: '0px 0px 1px 0px',
                  borderColor: 'rgba(119,119,119,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                },
                x: 32,
                y: 22,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_meau_item3_icon: {
          name: 'Mark',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item3',
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
                  width: '20px',
                  height: '20px',
                  fill: '#FF006B',
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
                'M32 22c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm-16 0c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm0 4c-4.67 0-14 2.34-14 7v5h28v-5c0-4.66-9.33-7-14-7zm16 0c-.58 0-1.23.04-1.93.11C32.39 27.78 34 30.03 34 33v5h12v-5c0-4.66-9.33-7-14-7z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item3_name: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item3',
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
                  fontSize: '14px',
                  height: '36px',
                  lineHeight: '36px',
                  width: '110px',
                  padding: '0px 0px 0px 10px',
                },
                x: 44,
                y: 12,
              },
            },
          ],
          model: {
            msg: {
              value: 'Friends',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item3_action: {
          name: 'action',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item3',
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
                  width: '20px',
                  height: '20px',
                  fill: '#9E9E9E',
                },
                x: 294,
                y: 18,
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
              value: 'M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item3_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'cu_meau_item3',
          children: ['cu_meau_item3_list'],
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
                  fontSize: '14px',
                  height: '36px',
                  lineHeight: '36px',
                  width: '160px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                },
                x: 135,
                y: 30,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_meau_item3_list: {
          name: 'cu_avatar_list',
          type: 'container',
          lock: false,
          parent: 'cu_meau_item3_wrap',
          children: [
            'cu_meau_item3_list_p1',
            'cu_meau_item3_list_p2',
            'cu_meau_item3_list_p3',
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
                  width: '78px',
                  height: '37px',
                  display: 'block',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  position: 'static',
                },
                x: 33,
                y: 266,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_meau_item3_list_p1: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item3_list',
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
                  width: '36px',
                  height: '36px',
                  objectFit: 'fill',
                  borderRadius: '48px 48px 48px 48px',
                  borderWidth: '2px',
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.com/common/animals/1621839267875_cat_1280x852.jpg',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item3_list_p2: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item3_list',
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
                  width: '36px',
                  height: '36px',
                  objectFit: 'fill',
                  borderRadius: '48px 48px 48px 48px',
                  borderWidth: '2px',
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  margin: '0px 0px 0px 20px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.com/common/animals/1621839824269_bald eagle_1280x960.jpg?imageView2/2/w/60',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item3_list_p3: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item3_list',
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
                  width: '36px',
                  height: '36px',
                  objectFit: 'fill',
                  borderRadius: '48px 48px 48px 48px',
                  borderWidth: '2px',
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  margin: '0px 0px 0px 40px',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.com/common/animals/1621839736288_bird_854x1280.jpg?imageView2/2/w/60',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item4: {
          name: 'item',
          type: 'container',
          lock: true,
          parent: 'cu_meau',
          children: ['cu_meau_item4_icon', 'cu_meau_item4_name'],
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
                  width: '315px',
                  height: '56px',
                  margin: '0px 15px 0px 15px',
                  display: 'flex',
                  alignItems: 'center',
                },
                x: 32,
                y: 22,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_meau_item4_icon: {
          name: 'Mark',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item4',
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
                  width: '20px',
                  height: '20px',
                  fill: '#000000',
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
                'M36 32.17c-1.52 0-2.89.59-3.93 1.54L17.82 25.4c.11-.45.18-.92.18-1.4s-.07-.95-.18-1.4l14.1-8.23c1.07 1 2.5 1.62 4.08 1.62 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .48.07.95.18 1.4l-14.1 8.23c-1.07-1-2.5-1.62-4.08-1.62-3.31 0-6 2.69-6 6s2.69 6 6 6c1.58 0 3.01-.62 4.08-1.62l14.25 8.31c-.1.42-.16.86-.16 1.31A5.83 5.83 0 1036 32.17z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_meau_item4_name: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_meau_item4',
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
                  fontSize: '14px',
                  height: '36px',
                  lineHeight: '36px',
                  width: '110px',
                  padding: '0px 0px 0px 10px',
                },
                x: 44,
                y: 12,
              },
            },
          ],
          model: {
            msg: {
              value: 'Share',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
      },
    },
    {
      type: 'Card',
      scale: 0.88,
      tree: {
        cu_card: {
          name: 'cu-card',
          type: 'container',
          lock: true,
          parent: null,
          children: ['cu_card_wrap', 'cu_card_pic', 'cu_card_title'],
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
                  width: '160px',
                  height: '139px',
                  borderRadius: '4px 4px 4px 4px',
                  boxShadow:
                    '0px 7px 14px 0px rgba(0,0,0,0.15), 0px 0px 0px 0px #000 inset',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_card_wrap: {
          name: 'wrap',
          type: 'container',
          lock: false,
          parent: 'cu_card',
          children: ['cu_card_action'],
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
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  height: '16px',
                  width: '100%',
                },
                x: 0,
                y: 0,
              },
            },
          ],
          model: {},
          events: [],
        },
        cu_card_action: {
          name: 'action',
          type: 'unit',
          lock: false,
          parent: 'cu_card_wrap',
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
                  width: '14px',
                  height: '14px',
                  fill: '#FFFFFF',
                },
                x: 3,
                y: 1,
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
                'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_card_pic: {
          name: 'Photo',
          type: 'unit',
          lock: false,
          parent: 'cu_card',
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
                  width: '160px',
                  height: '103px',
                  objectFit: 'cover',
                },
                x: 24,
                y: 31,
              },
            },
          ],
          model: {
            url: {
              value:
                'https://static.iofod.com/common/animals/1621839267875_cat_1280x852.jpg',
              subscribe: '',
              ZI: 0,
            },
          },
          events: [],
        },
        cu_card_title: {
          name: 'Text',
          type: 'unit',
          lock: false,
          parent: 'cu_card',
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
                  fontSize: '16px',
                  color: '#303030',
                  height: '36px',
                  padding: '0px 16px 0px 16px',
                  width: '100%',
                  lineHeight: '36px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
                x: 20,
                y: 117,
              },
            },
          ],
          model: {
            msg: {
              value: 'Look to sky',
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

const Colors: any = {
  base: [
    {
      text: 'yellow',
      bg: '#FBBD08',
      color: '#333333',
    },
    {
      text: 'orange',
      bg: '#F37B1D',
    },
    {
      text: 'red',
      bg: '#E54D42',
    },
    {
      text: 'pink',
      bg: '#E03997',
    },
    {
      text: 'mauve',
      bg: '#B745CB',
    },
    {
      text: 'purple',
      bg: '#905DDF',
    },
    {
      text: 'blue',
      bg: '#0081FF',
    },
    {
      text: 'cyan',
      bg: '#1CBBB4',
    },
    {
      text: 'green',
      bg: '#3EB93B',
    },
    {
      text: 'olive',
      bg: '#8DC63F',
    },
    {
      text: 'grey',
      bg: '#8799A3',
    },
    {
      text: 'brown',
      bg: '#A5673F',
    },
  ],
  light: [
    {
      text: 'yellow',
      bg: '#fbbd081a',
    },
    {
      text: 'orange',
      bg: '#f37b1d1a',
    },
    {
      text: 'red',
      bg: '#e54d421a',
    },
    {
      text: 'pink',
      bg: '#e039971a',
    },
    {
      text: 'mauve',
      bg: '#b745cb1a',
    },
    {
      text: 'purple',
      bg: '#8044de1a',
    },
    {
      text: 'blue',
      bg: '#0081ff1a',
    },
    {
      text: 'cyan',
      bg: '#37c0fe1a',
    },
    {
      text: 'green',
      bg: '#3eb93b1a',
    },
    {
      text: 'olive',
      bg: '#8dc63f1a',
    },
    {
      text: 'grey',
      bg: '#8799a31a',
    },
    {
      text: 'brown',
      bg: '#a5673f1a',
    },
  ],
}

Colors.light_dark = Colors.light
Colors.gradient = [
  {
    text: 'yellow',
    bg: 'linear-gradient(45deg, #f5fe00 0%, #ff6600 100%)',
    color: '#333333',
  },
  {
    text: 'orange',
    bg: 'linear-gradient(45deg, #ff9700 0%, #ed1c24 100%)',
  },
  {
    text: 'red',
    bg: 'linear-gradient(45deg, #f33a41 0%, #ed0586 100%)',
  },
  {
    text: 'pink',
    bg: 'linear-gradient(45deg, #fea894 0%, #ff1047 100%)',
  },
  {
    text: 'mauve',
    bg: 'linear-gradient(45deg, #c01f95 0%, #7115cc 100%)',
  },
  {
    text: 'purple',
    bg: 'linear-gradient(45deg, #9829ea 0%, #5908fb 100%)',
  },
  {
    text: 'blue',
    bg: 'linear-gradient(45deg, #00b8f9 0%, #0166eb 100%)',
  },
  {
    text: 'cyan',
    bg: 'linear-gradient(45deg, #06edfe 0%, #48b2fe 100%)',
  },
  {
    text: 'green',
    bg: 'linear-gradient(45deg, #3ab54a 0%, #8cc63f 100%)',
  },
  {
    text: 'olive',
    bg: 'linear-gradient(45deg, #90e630 0%, #39d266 100%)',
  },
  {
    text: 'grey',
    bg: 'linear-gradient(45deg, #9aadb9 0%, #354855 100%)',
  },
  {
    text: 'brown',
    bg: 'linear-gradient(45deg, #ca6f2e 0%, #cb1413 100%)',
  },
]
Colors.lightGradient = [
  {
    text: 'yellow',
    bg: 'linear-gradient(45deg, #ffffff 0%, #fef5da 100%)',
  },
  {
    text: 'orange',
    bg: 'linear-gradient(45deg, #ffffff 0%, #fdebdd 100%)',
  },
  {
    text: 'red',
    bg: 'linear-gradient(45deg, #ffffff 0%, #fbe4e3 100%)',
  },
  {
    text: 'pink',
    bg: 'linear-gradient(45deg, #ffffff 0%, #fae1ef 100%)',
  },
  {
    text: 'mauve',
    bg: 'linear-gradient(45deg, #ffffff 0%, #f4e3f7 100%)',
  },
  {
    text: 'purple',
    bg: 'linear-gradient(45deg, #ffffff 0%, #ece3fa 100%)',
  },
  {
    text: 'blue',
    bg: 'linear-gradient(45deg, #ffffff 0%, #d9ecff 100%)',
  },
  {
    text: 'cyan',
    bg: 'linear-gradient(45deg, #ffffff 0%, #e1f6ff 100%)',
  },
  {
    text: 'green',
    bg: 'linear-gradient(45deg, #ffffff 0%, #e2f5e2 100%)',
  },
  {
    text: 'olive',
    bg: 'linear-gradient(45deg, #ffffff 0%, #eef6e2 100%)',
  },
  {
    text: 'grey',
    bg: 'linear-gradient(45deg, #ffffff 0%, #edf0f1 100%)',
  },
  {
    text: 'brown',
    bg: 'linear-gradient(45deg, #ffffff 0%, #f2e8e2 100%)',
  },
]

const lightTextColor = [
  'rgb(251, 189, 8)',
  'rgb(243, 123, 29)',
  'rgb(229, 77, 66)',
  'rgb(224, 57, 151)',
  'rgb(183, 69, 203)',
  'rgb(128, 68, 222)',
  'rgb(0, 129, 255)',
  'rgb(55, 192, 254)',
  'rgb(62, 185, 59)',
  'rgb(141, 198, 63)',
  'rgb(135, 153, 163)',
  'rgb(165, 103, 63)',
]

const ThemeTitle: any = {
  base: 'Base Colors',
  light: 'Light Colors',
  light_dark: 'Light Colors(Dark Mode)',
  gradient: 'Gradient Colors',
  lightGradient: 'High Gloss colors',
}

const LikeText = [
  'base/input',
  'base/textarea',
  'base/text',
  'base/link',
  'base/html',
]

export { WhiteBg, minWidth, COM, Colors, lightTextColor, ThemeTitle, LikeText }
