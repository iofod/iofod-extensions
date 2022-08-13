//From: https://github.com/adamgiebl/neumorphism/blob/master/src/utils.js
function colorLuminance(hex: string, lum: number) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  // convert to decimal and change luminosity
  let rgb = '#',
    c,
    i
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    rgb += ('00' + c).substr(c.length)
  }

  return rgb
}

const TowardMap: any = {
  '145': [1, 1],
  '225': [-1, 1],
  '315': [-1, -1],
  '45': [1, -1],
}

const insetValue = ' inset'
const defaultBoxShadow = '0px 0px 0px 0px #000'

export function getStyle($: any) {
  let hex = $('selectedColor')
  let after = ''
  let color = hex

  //Support alpha
  if (hex.length == 9) {
    after = hex.slice(-2)
    color = hex.slice(0, 7)
  }

  const angle = $('toward')
  const blur = $('blur')
  const distance = $('distance')
  const intensity = $('intensity')
  const shape = $('shape')
  const darkColor = colorLuminance(color, intensity * -1)
  const lightColor = colorLuminance(color, intensity)
  const gradient = shape == 2 || shape == 3 ? true : false
  const firstGradientColor =
    gradient && shape !== 1
      ? colorLuminance(color, shape === 3 ? 0.07 : -0.1)
      : color
  const secondGradientColor =
    gradient && shape !== 1
      ? colorLuminance(color, shape === 2 ? 0.07 : -0.1)
      : color

  let [k1, k2] = TowardMap[angle]
  let x = distance * k1
  let y = distance * k2

  const useGradient = gradient && shape !== 1
  const useInset = shape === 1
  const firstBoxShadow = [defaultBoxShadow, defaultBoxShadow + insetValue]
  const secondBoxShadow = [defaultBoxShadow, defaultBoxShadow + insetValue]
  const v1 = `${x}px ${y}px ${blur}px 0px ${darkColor + after}`
  const v2 = `${x * -1}px ${y * -1}px ${blur}px 0px ${lightColor + after}`

  if (useInset) {
    firstBoxShadow[1] = v1 + insetValue
    secondBoxShadow[1] = v2 + insetValue
  } else {
    firstBoxShadow[0] = v1
    secondBoxShadow[0] = v2
  }

  let backgroundColor = color + after
  let backgroundImage = useGradient
    ? `linear-gradient(${angle}deg, ${firstGradientColor + after} 0%, ${secondGradientColor + after} 100%)`
    : undefined
  let boxShadow = firstBoxShadow.join(', ') + ', ' + secondBoxShadow.join(', ')

  return {
    backgroundColor, backgroundImage, boxShadow
  }
}
