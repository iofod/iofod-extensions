import * as PLUS from 'iofod-sdk'
const {
  Container,
  SubHeader,
  Text
} = PLUS.components

export const ViewTypeMap: any = {
  MobileS: 320,
  MobileM: 375,
  MobileL: 425,
  Tablet: 768,
  LaptopS: 1024,
  LaptopM: 1440,
  LaptopL: 1920,
  WQHD: 2560,
  UltraHD: 3840
}

export const deviceMap: any = {
  phone: {
    'Galaxy Note 20': {
      sys: 0,
      vp: [412, 915]
    },
    'Galaxy Note 20 Ultra': {
      sys: 0,
      vp: [412, 883]
    },
    'Galaxy Note 3': {
      sys: 0,
      vp: [360, 640]
    },
    'Galaxy Note 9': {
      sys: 0,
      vp: [414, 846]
    },
    'Galaxy S10/S10+': {
      sys: 0,
      vp: [360, 760]
    },
    'Galaxy S20': {
      sys: 0,
      vp: [360, 800]
    },
    'Galaxy S20 Ultra': {
      sys: 0,
      sp: true,
      vp: [414, 915]
    },
    'Galaxy S20+': {
      sys: 0,
      vp: [384, 854]
    },
    'Galaxy S5': {
      sys: 0,
      sp: true,
      vp: [360, 640]
    },
    'Galaxy S9/S9+': {
      sys: 0,
      vp: [360, 740]
    },

    'iPhone 11 Pro': {
      sys: 1,
      vp: [375, 812]
    },
    'iPhone 11 Pro Max': {
      sys: 1,
      vp: [414, 896]
    },
    'iPhone 12/13 + Pro': {
      sys: 1,
      vp: [390, 844]
    },
    'iPhone 12/13 mini': {
      sys: 1,
      vp: [375, 812]
    },
    'iPhone 12/13 Pro Max': {
      sys: 1,
      sp: true,
      vp: [428, 926]
    },
    'iPhone 5/SE': {
      sys: 1,
      sp: true,
      vp: [320, 568]
    },
    'iPhone 6/7/8': {
      sys: 1,
      sp: true,
      vp: [375, 667]
    },
    'iPhone 6/7/8 Plus': {
      sys: 1,
      sp: true,
      vp: [414, 736]
    },
    'iPhone SE 2nd gen': {
      sys: 1,
      vp: [375, 667]
    },
    'iPhone X/XS': {
      sys: 1,
      sp: true,
      vp: [375, 812]
    },
    'iPhone XR/11': {
      sys: 1,
      vp: [414, 896]
    },
    'iPhone XS Max': {
      sys: 1,
      vp: [414, 896]
    },

    'LG Optimus L70': {
      sys: 0,
      vp: [384, 640]
    },

    'Microsoft Lumia 550': {
      sys: 2,
      vp: [360, 640]
    },
    'Microsoft Lumia 950': {
      sys: 2,
      vp: [360, 640]
    },
    'Nexus 5X': {
      sys: 0,
      vp: [412, 732]
    },
    'Nexus 6P': {
      sys: 0,
      sp: true,
      vp: [412, 732]
    },
    'Nokia 8110 4G': {
      sys: 7,
      vp: [240, 320]
    },
    'Pixel 2': {
      sys: 0,
      sp: true,
      vp: [411, 731]
    },
    'Pixel 2 XL': {
      sys: 0,
      vp: [411, 823]
    },
    'Pixel 5': {
      sys: 0,
      sp: true,
      vp: [393, 851]
    },
  },
  laptop: {
    'iPad': {
      sys: 3,
      sp: true,
      vp: [810, 1080]
    },
    'iPad Air': {
      sys: 3,
      vp: [820, 1180]
    },
    'iPad Mini': {
      sys: 3,
      sp: true,
      vp: [768, 1024]
    },
    'iPad Pro (11-inch)': {
      sys: 3,
      sp: true,
      vp: [834, 1194]
    },
    'iPad Pro (12.9-inch)': {
      sys: 3,
      sp: true,
      vp: [1024, 1366]
    },
    'Kindle Fire HDX': {
      sys: 5,
      vp: [800, 1280]
    },
    'Nexus 10': {
      sys: 0,
      sp: true,
      vp: [800, 1280]
    },
    'Nexus 7': {
      sys: 0,
      sp: true,
      vp: [600, 960]
    },
  },
  notebook: {
    'Laptop with HiDPI screen': {
      sys: 4,
      sp: true,
      vp: [1440, 900]
    },
    'Laptop with MDPI screen': {
      sys: 4,
      sp: true,
      vp: [1280, 800]
    },
    'Laptop with touch': {
      sys: 4,
      vp: [1280, 950]
    },
  },
  TV: {
    '1080p Full HD Television': {
      sys: 6,
      sp: true,
      vp: [1920, 1080]
    },
    '4K Ultra HD Television': {
      sys: 6,
      vp: [3840, 2160]
    },
    '720p HD Television': {
      sys: 6,
      sp: true,
      vp: [1280, 700]
    },
  }
}

const deviceType = Object.keys(deviceMap)
const deviceDesc: any = {
  phone: 'Phone',
  laptop: 'Laptop',
  notebook: 'Notebook',
  TV: 'TV'
}

export function calcViewportList(isSimple: boolean) {
  return deviceType.map(type => {
    let part = deviceMap[type]

    return Container({
      children: [
        SubHeader(deviceDesc[type]),
        ...Object.keys(part).filter(device => isSimple ? part[device].sp : true).map(device => {
          let [vw, vh] = part[device].vp

          return Container({
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#2c2c2c',
              marginLeft: '16px',
              marginTop: '3px',
              cursor: 'pointer',
              position: 'relative',
              padding: '8px 0px'
            },
            hoverStyle: {
              backgroundColor: '#404040',
            },
            children: [
              Text({
                value: device,
                style: {
                  padding: '0px 16px',
                  fontSize: '12px'
                }
              }),

              Text({
                value: `${vw} x ${vh}`,
                style: {
                  padding: '0px 16px',
                  fontSize: '12px',
                  color: '#858585'
                }
              }),

              Container({
                render: `# $selected == '${device}'`,
                style: {
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  border: '1px solid #ebebeb5e',
                  top: '0px',
                  left: '0px'
                }
              })
            ],
            payload: {
              device, vw, vh
            }
          }, 'selectDevice')
        })
      ]
    })
  })
}
