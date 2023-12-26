/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face
*/
const FONT_FACE = {
  first: {
    src: '',
    fontFamily: '',
    fontWeight: '',
    fontStyle: '',
  },
  second: {
    src: '',
    fontFamily: '',
    fontWeight: '',
    fontStyle: '',
  },
  third: {
    src: '',
    fontFamily: '',
    fontWeight: '',
    fontStyle: '',
  }
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/color
*/
const COLOR = {
  first: '#97A2A8',
  firstRgb: '',
  firstRgba: '',
  
  second: ' #97A2A8',
  secondRgb: '',
  secondRgba: '',
  
  third: '#363636',
  thirdRgb: '237, 237, 237',
  thirdRgba: 'rgba(237, 237, 237, 0.8)',
  
  fourth: '#9C9C9C',
  fourthRgb: '',
  fourthRgba: '',
  
  fifth: '#4f4f4f',
  fifthRgb: '',
  fifthRgba: '',
  
  sixth: '#9C6D6D',
  sixthRgb: '',
  sixthRgba: '',
  
  seventh: '#d9d3cf',
  seventhRgb: 'rgb(217, 211, 207)',
  seventhRgba: 'rgba(217, 211, 207, 0.98)',
  
  black: '#000',
  white: '#fff',
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/border
*/
const BORDER = {
  RADIUS: {
    first: '',
    second: '',
    third: '',
  },
  SOLID: {
    first: '',
    second: '',
    third: '',
  }
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
*/
const BOX_SHADOW = {
  first: '',
  second: '',
  third: '',
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/background
*/
const BACKGROUND = {
  whatsapp: 'http://sgimoveis.imb.br/site/whats-bg.png'
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/@media
 * 
 * The next devices are the references:
 * 
 * iPad Mini: 768px x 1024px 
 * iPad Air: 820px x 1180px
 * iPad Pro: 1024px x 1366px
 * 
*/
const MEDIA = {
  IPAD_MINI: '@media screen and (min-width: 1024px)',
  IPAD_AIR: '@media screen and (min-width: 1180px)',
  IPAD_PRO: '@media screen and (min-width: 1366px)'
}

const templateDefault = {
  slide: {
    banner: {
      title: {
        color: COLOR.first
      }
    }
  },
  fontFace: {
    ...FONT_FACE,
  },
  color: {
    ...COLOR
  },
  border: {
    ...BORDER
  },
  boxShadow: {
    ...BOX_SHADOW
  },
  background: {
    ...BACKGROUND
  },
  media: {
    ...MEDIA
  }
}

export { templateDefault }