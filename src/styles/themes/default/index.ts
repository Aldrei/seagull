const SIZES = {
  xs: '.5rem',
  sm: '.75rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
}

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
  },
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/color
 */
const COLOR = {
  first: '#97A2A8',
  firstRgb: '',
  firstRgba: '',

  second: '#97A2A8',
  secondRgb: '',
  secondRgba: '',

  third: '#363636',
  thirdRgb: '237, 237, 237',
  thirdRgba: 'rgba(237, 237, 237, 0.8)',

  fourth: '#9C9C9C',
  fourthRgb: '',
  fourthRgba: '',

  fifth: '#4F4F4F',
  fifthRgb: '',
  fifthRgba: '',

  sixth: '#9C6D6D',
  sixthRgb: '',
  sixthRgba: '',

  seventh: '#D9D3Cf',
  seventhRgb: 'rgb(217, 211, 207)',
  seventhRgba: 'rgba(217, 211, 207, 0.98)',

  eighth: '#EEE',
  eighthRgb: '',
  eighthRgba: 'rgba(238, 238, 238, .7)',

  ninth: '#757575',
  ninthRgb: '',
  ninthRgba: '',

  tenth: '#D92525',
  tenthRgb: '',
  tenthRgba: 'rgba(217, 37, 37, 1)',

  black: '#000',
  white: '#FFF',
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
  },
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
 */
const BOX_SHADOW = {
  first: '3px 3px 15px 0 rgba(0,0,0,.75)',
  second: '1px 1px 10px 0 rgba(0,0,0,.35)',
  third: '0 2px 4px rgba(0, 0, 0, 0.1)',
}

const GRADIENT = {
  first: `linear-gradient(
    to right,
    var(${COLOR.fourth}) 0%,
    var(${COLOR.first}) 100%
  )`,
  second: `linear-gradient(to right, ${COLOR.second} 7%, ${COLOR.fifth} 100%)`,
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
 */
const TEXT_SHADOW = {
  first: '1px 1px 0 rgba(0,0,0,.9)',
}

const TEXT_OPACITY = {
  first: 'rgba(217,211,207,.9)',
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/background
 */
const BACKGROUND = {
  whatsappCard: {
    header: COLOR.eighth,
    body: 'http://sgimoveis.imb.br/site/whats-bg.png',
  },
  infosCard: {
    header: COLOR.eighth,
    body: COLOR.eighth,
    footer: COLOR.eighth,
  },
  header: GRADIENT.second,
  filter: COLOR.eighth,
  tab_button: GRADIENT.second,
  button: GRADIENT.second,
  label_price: GRADIENT.second,
  input: GRADIENT.second,
  footer: GRADIENT.second,
  gallery: COLOR.eighth,
  band_sold: 'rgba(255, 255, 255, .75)',
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
  IPAD_PRO: '@media screen and (min-width: 1366px)',
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
 */
const FONT_SIZE = {
  ...SIZES,
}

const SPACES = {
  ...SIZES,
}

const templateDefault = {
  slide: {
    banner: {
      title: {
        color: COLOR.first,
      },
    },
  },
  fontFace: {
    ...FONT_FACE,
  },
  color: {
    ...COLOR,
  },
  border: {
    ...BORDER,
  },
  boxShadow: {
    ...BOX_SHADOW,
  },
  textShadow: {
    ...TEXT_SHADOW,
  },
  textOpacity: {
    ...TEXT_OPACITY,
  },
  background: {
    ...BACKGROUND,
  },
  media: {
    ...MEDIA,
  },
  fontSize: {
    ...FONT_SIZE,
  },
  spaces: {
    ...SPACES,
  },
}

export { templateDefault }
