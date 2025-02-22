// TODO: standardise camelcase
// TODO: some of these values are not single properties like paddingX
// TODO: some of these values are not simple classname selectors like divideX

type Properties = {
  [key: string]: {
    prefix: string;
    scale: string;
    supportsNegativeValues?: boolean;
  };
};

export const properties: Properties = {
  // generated list:
  aspectRatio: { prefix: 'aspect', scale: 'aspectRatio' },

  backgroundImage: { prefix: 'bg', scale: 'backgroundImage' },
  backgroundOpacity: { prefix: 'bg-opacity', scale: 'backgroundOpacity' },
  backgroundPosition: { prefix: 'bg', scale: 'backgroundPosition' },
  backgroundSize: { prefix: 'bg', scale: 'backgroundSize' },

  borderOpacity: { prefix: 'border-opacity', scale: 'borderOpacity' },

  columns: { prefix: 'columns', scale: 'columns' },
  cursor: { prefix: 'cursor', scale: 'cursor' },
  flex: { prefix: 'flex', scale: 'flex' },
  flexBasis: { prefix: 'basis', scale: 'flexBasis' },
  fontWeight: { prefix: 'font', scale: 'fontWeight' },
  gridAutoColumns: { prefix: 'auto-cols', scale: 'gridAutoColumns' },
  gridAutoRows: { prefix: 'auto-rows', scale: 'gridAutoRows' },
  gridColumn: { prefix: 'col', scale: 'gridColumn' },
  gridColumnEnd: { prefix: 'col-end', scale: 'gridColumnEnd' },
  gridColumnStart: { prefix: 'col-start', scale: 'gridColumnStart' },
  gridRow: { prefix: 'row', scale: 'gridRow' },
  gridRowEnd: { prefix: 'row-end', scale: 'gridRowEnd' },
  gridRowStart: { prefix: 'row-start', scale: 'gridRowStart' },
  gridTemplateColumns: { prefix: 'grid-cols', scale: 'gridTemplateColumns' },
  gridTemplateRows: { prefix: 'grid-rows', scale: 'gridTemplateRows' },
  height: { prefix: 'h', scale: 'height' },
  letterSpacing: {
    prefix: 'tracking',
    scale: 'letterSpacing',
    supportsNegativeValues: false // set explicitly because it contains non-number values
  },
  lineHeight: { prefix: 'leading', scale: 'lineHeight' },
  listStyleType: { prefix: 'list', scale: 'listStyleType' },
  maxHeight: { prefix: 'max-h', scale: 'maxHeight' },
  maxWidth: { prefix: 'max-w', scale: 'maxWidth' },
  minHeight: { prefix: 'min-h', scale: 'minHeight' },
  minWidth: { prefix: 'min-w', scale: 'minWidth' },
  objectPosition: { prefix: 'object', scale: 'objectPosition' },
  opacity: { prefix: 'opacity', scale: 'opacity' },
  order: {
    prefix: 'order',
    scale: 'order',
    supportsNegativeValues: false // set explicitly because it contains non-number values
  },
  outlineOffset: {
    prefix: 'outline-offset',
    scale: 'outlineOffset',
    supportsNegativeValues: true
  },
  outlineWidth: { prefix: 'outline', scale: 'outlineWidth' },

  ringColor: { prefix: 'ring', scale: 'colors' },
  ringOffsetColor: { prefix: 'ring-offset', scale: 'colors' },
  ringOffsetWidth: { prefix: 'ring-offset', scale: 'ringOffsetWidth' },
  ringOpacity: { prefix: 'ring-opacity', scale: 'ringOpacity' },

  strokeWidth: { prefix: 'stroke', scale: 'strokeWidth' },
  textDecorationThickness: { prefix: 'decoration', scale: 'textDecorationThickness' },
  textIndent: {
    prefix: 'indent',
    scale: 'textIndent',
    supportsNegativeValues: true
  },
  textOpacity: { prefix: 'text-opacity', scale: 'textOpacity' },
  textUnderlineOffset: { prefix: 'underline-offset', scale: 'textUnderlineOffset' },
  transformOrigin: { prefix: 'origin', scale: 'transformOrigin' },
  transitionDelay: { prefix: 'delay', scale: 'transitionDelay' },
  transitionDuration: { prefix: 'duration', scale: 'transitionDuration' },
  transitionTimingFunction: { prefix: 'ease', scale: 'transitionTimingFunction' },
  width: { prefix: 'w', scale: 'width' },
  willChange: { prefix: 'will-change', scale: 'willChange' },
  zIndex: { prefix: 'z', scale: 'zIndex', supportsNegativeValues: true },

  // added manually:
  accentColor: { scale: 'accentColor', prefix: 'accent' },
  alignSelf: { scale: 'alignSelf', prefix: 'self' },
  animation: { prefix: 'animate', scale: 'animation' },
  backgroundColor: { prefix: 'bg', scale: 'colors' },

  borderColor: { prefix: 'border', scale: 'colors' },
  borderStyle: { prefix: 'border', scale: 'borderStyle' },

  borderWidth: { prefix: 'border', scale: 'borderWidth' },
  borderTopWidth: { prefix: 'border-t', scale: 'borderWidth' },
  borderRightWidth: { prefix: 'border-r', scale: 'borderWidth' },
  borderBottomWidth: { prefix: 'border-b', scale: 'borderWidth' },
  borderLeftWidth: { prefix: 'border-l', scale: 'borderWidth' },

  borderRadius: { prefix: 'rounded', scale: 'borderRadius' },
  borderRadiusTopLeft: { prefix: 'rounded-tl', scale: 'borderRadius' },
  borderRadiusTopRight: { prefix: 'rounded-tr', scale: 'borderRadius' },
  borderRadiusBottomRight: { prefix: 'rounded-br', scale: 'borderRadius' },
  borderRadiusBottomLeft: { prefix: 'rounded-bl', scale: 'borderRadius' },

  borderSpacing: { prefix: 'border-spacing', scale: 'borderSpacing' },
  borderSpacingX: { prefix: 'border-spacing-x', scale: 'borderSpacing' },
  borderSpacingY: { prefix: 'border-spacing-y', scale: 'borderSpacing' },
  outline: { prefix: 'outline', scale: 'outline' },
  outlineColor: { prefix: 'outline', scale: 'colors' },

  boxShadow: { prefix: 'shadow', scale: 'boxShadow' },
  boxShadowColor: { prefix: 'shadow', scale: 'colors' },
  caretColor: { prefix: 'caret', scale: 'caretColor' },

  divideColor: { prefix: 'divide', scale: 'colors' },
  divideOpacity: { prefix: 'divide-opacity', scale: 'divideOpacity' },
  divideX: { prefix: 'divide-x', scale: 'divideWidth' },
  divideY: { prefix: 'divide-y', scale: 'divideWidth' },
  dropShadow: { prefix: 'drop-shadow', scale: 'dropShadow' },

  // svg
  fill: { prefix: 'fill', scale: 'colors' },
  stroke: { prefix: 'stroke', scale: 'colors' },

  flexGrow: { prefix: 'flex-grow', scale: 'flexGrow' },
  flexShrink: { prefix: 'flex-shrink', scale: 'flexShrink' },

  // filters, todo: the properties here are just wrong
  grayscale: { prefix: 'grayscale', scale: 'grayscale' },
  hueRotate: { prefix: 'hueRotate', scale: 'hueRotate', supportsNegativeValues: true },
  invert: { prefix: 'invert', scale: 'invert' },
  saturate: { prefix: 'saturate', scale: 'saturate' },
  sepia: { prefix: 'sepia', scale: 'sepia' },
  contrast: { prefix: 'contrast', scale: 'contrast' },
  brightness: { prefix: 'brightness', scale: 'brightness' },
  blur: { prefix: 'blur', scale: 'blur' },
  backdropBlur: { prefix: 'backdrop-blur', scale: 'backdropBlur' },
  backdropBrightness: { prefix: 'backdrop-brightness', scale: 'backdropBrightness' },
  backdropContrast: { prefix: 'backdrop-contrast', scale: 'backdropContrast' },
  backdropGrayscale: { prefix: 'backdrop-grayscale', scale: 'backdropGrayscale' },
  backdropHueRotate: { prefix: 'backdrop-hueRotate', scale: 'backdropHueRotate' },
  backdropInvert: { prefix: 'backdrop-invert', scale: 'backdropInvert' },
  backdropOpacity: { prefix: 'backdrop-opacity', scale: 'backdropOpacity' },
  backdropSaturate: { prefix: 'backdrop-saturate', scale: 'backdropSaturate' },
  backdropSepia: { prefix: 'backdrop-sepia', scale: 'backdropSepia' },

  fontFamily: { prefix: 'font', scale: 'fontFamily' },
  fontSize: { prefix: 'text', scale: 'fontSize' },

  gap: { prefix: 'gap', scale: 'gap' },
  rowGap: { prefix: 'gap-x', scale: 'gap' },
  columnGap: { prefix: 'gap-y', scale: 'gap' },

  // gradientColorStops
  gradientFrom: { prefix: 'from', scale: 'colors' },
  gradientVia: { prefix: 'via', scale: 'colors' },
  gradientTo: { prefix: 'to', scale: 'colors' },

  inset: { prefix: 'inset', scale: 'inset', supportsNegativeValues: true },
  insetX: { prefix: 'inset-x', scale: 'inset', supportsNegativeValues: true },
  insetY: { prefix: 'inset-y', scale: 'inset', supportsNegativeValues: true },
  top: { prefix: 'top', scale: 'inset', supportsNegativeValues: true },
  right: { prefix: 'right', scale: 'inset', supportsNegativeValues: true },
  bottom: { prefix: 'bottom', scale: 'inset', supportsNegativeValues: true },
  left: { prefix: 'left', scale: 'inset', supportsNegativeValues: true },

  margin: { prefix: 'm', scale: 'margin', supportsNegativeValues: true },
  marginTop: { prefix: 'mt', scale: 'margin', supportsNegativeValues: true },
  marginRight: { prefix: 'mr', scale: 'margin', supportsNegativeValues: true },
  marginBottom: { prefix: 'mb', scale: 'margin', supportsNegativeValues: true },
  marginLeft: { prefix: 'ml', scale: 'margin', supportsNegativeValues: true },
  marginX: { prefix: 'mx', scale: 'margin', supportsNegativeValues: true },
  marginY: { prefix: 'my', scale: 'margin', supportsNegativeValues: true },

  padding: { prefix: 'p', scale: 'padding' },
  paddingTop: { prefix: 'pt', scale: 'padding' },
  paddingRight: { prefix: 'pr', scale: 'padding' },
  paddingBottom: { prefix: 'pb', scale: 'padding' },
  paddingLeft: { prefix: 'pl', scale: 'padding' },
  paddingX: { prefix: 'px', scale: 'padding' },
  paddingY: { prefix: 'py', scale: 'padding' },

  placeholderColor: { prefix: 'placeholder', scale: 'colors' },
  placeholderOpacity: { prefix: 'placeholder-opacity', scale: 'placeholderOpacity' },

  ringWidth: { prefix: 'ring', scale: 'ringWidth' },
  rotate: { prefix: 'rotate', scale: 'rotate' },
  scale: { prefix: 'scale', scale: 'scale' },

  scrollMargin: { prefix: 'scroll-m', scale: 'scrollMargin' },
  scrollMarginTop: { prefix: 'scroll-mt', scale: 'scrollMargin' },
  scrollMarginRight: { prefix: 'scroll-mr', scale: 'scrollMargin' },
  scrollMarginBottom: { prefix: 'scroll-mb', scale: 'scrollMargin' },
  scrollMarginLeft: { prefix: 'scroll-ml', scale: 'scrollMargin' },
  scrollMarginX: { prefix: 'scroll-mx', scale: 'scrollMargin' },
  scrollMarginY: { prefix: 'scroll-my', scale: 'scrollMargin' },

  scrollPadding: { prefix: 'scroll-p', scale: 'scrollPadding' },
  scrollPaddingTop: { prefix: 'scroll-pt', scale: 'scrollPadding' },
  scrollPaddingRight: { prefix: 'scroll-pr', scale: 'scrollPadding' },
  scrollPaddingBottom: { prefix: 'scroll-pb', scale: 'scrollPadding' },
  scrollPaddingLeft: { prefix: 'scroll-pl', scale: 'scrollPadding' },
  scrollPaddingX: { prefix: 'scroll-px', scale: 'scrollPadding' },
  scrollPaddingY: { prefix: 'scroll-py', scale: 'scrollPadding' },

  skew: { prefix: 'skew', scale: 'skew' },
  spaceX: { prefix: 'space-x', scale: 'space' },
  spaceY: { prefix: 'space-y', scale: 'space' },

  textColor: { prefix: 'text', scale: 'colors' },
  textDecorationColor: { prefix: 'decoration', scale: 'textDecorationColor' },

  transitionProperty: { prefix: 'transition', scale: 'transitionProperty' },
  translate: { prefix: 'translate', scale: 'translate', supportsNegativeValues: true },
  translateX: { prefix: 'translate-x', scale: 'translate', supportsNegativeValues: true },
  translateY: { prefix: 'translate-y', scale: 'translate', supportsNegativeValues: true }
};

// .sort((a, b) => b.prefix.length - a.prefix.length);
// TODO: we sort by lengh of prefix so that text-opacity- is matched before text-

export const namedClassProperties = {
  absolute: { position: 'absolute' },
  'align-baseline': { 'vertical-align': 'baseline' },
  'align-bottom': { 'vertical-align': 'bottom' },
  'align-middle': { 'vertical-align': 'middle' },
  'align-sub': { 'vertical-align': 'sub' },
  'align-super': { 'vertical-align': 'super' },
  'align-text-bottom': { 'vertical-align': 'text-bottom' },
  'align-text-top': { 'vertical-align': 'text-top' },
  'align-top': { 'vertical-align': 'top' },
  antialiased: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },
  'appearance-none': { appearance: 'none' },
  'backdrop-filter-none': { 'backdrop-filter': 'none' },
  'bg-blend-color': { 'background-blend-mode': 'color' },
  'bg-blend-color-burn': { 'background-blend-mode': 'color-burn' },
  'bg-blend-color-dodge': { 'background-blend-mode': 'color-dodge' },
  'bg-blend-darken': { 'background-blend-mode': 'darken' },
  'bg-blend-difference': { 'background-blend-mode': 'difference' },
  'bg-blend-exclusion': { 'background-blend-mode': 'exclusion' },
  'bg-blend-hard-light': { 'background-blend-mode': 'hard-light' },
  'bg-blend-hue': { 'background-blend-mode': 'hue' },
  'bg-blend-lighten': { 'background-blend-mode': 'lighten' },
  'bg-blend-luminosity': { 'background-blend-mode': 'luminosity' },
  'bg-blend-multiply': { 'background-blend-mode': 'multiply' },
  'bg-blend-normal': { 'background-blend-mode': 'normal' },
  'bg-blend-overlay': { 'background-blend-mode': 'overlay' },
  'bg-blend-saturation': { 'background-blend-mode': 'saturation' },
  'bg-blend-screen': { 'background-blend-mode': 'screen' },
  'bg-blend-soft-light': { 'background-blend-mode': 'soft-light' },
  'bg-clip-border': { 'background-clip': 'border-box' },
  'bg-clip-content': { 'background-clip': 'content-box' },
  'bg-clip-padding': { 'background-clip': 'padding-box' },
  'bg-clip-text': { 'background-clip': 'text' },
  'bg-fixed': { 'background-attachment': 'fixed' },
  'bg-local': { 'background-attachment': 'local' },
  'bg-no-repeat': { 'background-repeat': 'no-repeat' },
  'bg-origin-border': { 'background-origin': 'border-box' },
  'bg-origin-content': { 'background-origin': 'content-box' },
  'bg-origin-padding': { 'background-origin': 'padding-box' },
  'bg-repeat': { 'background-repeat': 'repeat' },
  'bg-repeat-round': { 'background-repeat': 'round' },
  'bg-repeat-space': { 'background-repeat': 'space' },
  'bg-repeat-x': { 'background-repeat': 'repeat-x' },
  'bg-repeat-y': { 'background-repeat': 'repeat-y' },
  'bg-scroll': { 'background-attachment': 'scroll' },
  block: { display: 'block' },
  'border-collapse': { 'border-collapse': 'collapse' },
  'border-dashed': { 'border-style': 'dashed' },
  'border-dotted': { 'border-style': 'dotted' },
  'border-double': { 'border-style': 'double' },
  'border-hidden': { 'border-style': 'hidden' },
  'border-none': { 'border-style': 'none' },
  'border-separate': { 'border-collapse': 'separate' },
  'border-solid': { 'border-style': 'solid' },
  'box-border': { 'box-sizing': 'border-box' },
  'box-content': { 'box-sizing': 'content-box' },
  'box-decoration-clone': { 'box-decoration-break': 'clone' },
  'box-decoration-slice': { 'box-decoration-break': 'slice' },
  'break-after-all': { 'break-after': 'all' },
  'break-after-auto': { 'break-after': 'auto' },
  'break-after-avoid': { 'break-after': 'avoid' },
  'break-after-avoid-page': { 'break-after': 'avoid-page' },
  'break-after-column': { 'break-after': 'column' },
  'break-after-left': { 'break-after': 'left' },
  'break-after-page': { 'break-after': 'page' },
  'break-after-right': { 'break-after': 'right' },
  'break-all': { 'word-break': 'break-all' },
  'break-before-all': { 'break-before': 'all' },
  'break-before-auto': { 'break-before': 'auto' },
  'break-before-avoid': { 'break-before': 'avoid' },
  'break-before-avoid-page': { 'break-before': 'avoid-page' },
  'break-before-column': { 'break-before': 'column' },
  'break-before-left': { 'break-before': 'left' },
  'break-before-page': { 'break-before': 'page' },
  'break-before-right': { 'break-before': 'right' },
  'break-inside-auto': { 'break-inside': 'auto' },
  'break-inside-avoid': { 'break-inside': 'avoid' },
  'break-inside-avoid-column': { 'break-inside': 'avoid-column' },
  'break-inside-avoid-page': { 'break-inside': 'avoid-page' },
  'break-keep': { 'word-break': 'keep-all' },
  'break-normal': { 'overflow-wrap': 'normal', 'word-break': 'normal' },
  'break-words': { 'overflow-wrap': 'break-word' },
  capitalize: { 'text-transform': 'capitalize' },
  'clear-both': { clear: 'both' },
  'clear-left': { clear: 'left' },
  'clear-none': { clear: 'none' },
  'clear-right': { clear: 'right' },
  collapse: { visibility: 'collapse' },
  'content-around': { 'align-content': 'space-around' },
  'content-baseline': { 'align-content': 'baseline' },
  'content-between': { 'align-content': 'space-between' },
  'content-center': { 'align-content': 'center' },
  'content-end': { 'align-content': 'flex-end' },
  'content-evenly': { 'align-content': 'space-evenly' },
  'content-start': { 'align-content': 'flex-start' },
  contents: { display: 'contents' },
  'content-none': { content: 'none' },
  'decoration-clone': { 'box-decoration-break': 'clone' },
  'decoration-slice': { 'box-decoration-break': 'slice' },
  'decoration-dashed': { 'text-decoration-style': 'dashed' },
  'decoration-dotted': { 'text-decoration-style': 'dotted' },
  'decoration-double': { 'text-decoration-style': 'double' },
  'decoration-solid': { 'text-decoration-style': 'solid' },
  'decoration-wavy': { 'text-decoration-style': 'wavy' },
  'diagonal-fractions': { 'font-variant-numeric': 'diagonal-fractions' },

  'divide-solid': { 'border-style': 'solid' },
  'divide-dashed': { 'border-style': 'dashed' },
  'divide-dotted': { 'border-style': 'dotted' },
  'divide-double': { 'border-style': 'double' },
  'divide-none': { 'border-style': 'none' },

  'filter-none': { filter: 'none' },
  fixed: { position: 'fixed' },
  flex: { display: 'flex' },
  'flex-col': { 'flex-direction': 'column' },
  'flex-col-reverse': { 'flex-direction': 'column-reverse' },
  'flex-nowrap': { 'flex-wrap': 'nowrap' },
  'flex-row': { 'flex-direction': 'row' },
  'flex-row-reverse': { 'flex-direction': 'row-reverse' },
  'flex-wrap': { 'flex-wrap': 'wrap' },
  'flex-wrap-reverse': { 'flex-wrap': 'wrap-reverse' },
  'float-left': { float: 'left' },
  'float-none': { float: 'none' },
  'float-right': { float: 'right' },
  'flow-root': { display: 'flow-root' },
  grid: { display: 'grid' },
  'grid-flow-col': { gridAutoFlow: 'column' },
  'grid-flow-col-dense': { gridAutoFlow: 'column dense' },
  'grid-flow-dense': { gridAutoFlow: 'dense' },
  'grid-flow-row': { gridAutoFlow: 'row' },
  'grid-flow-row-dense': { gridAutoFlow: 'row dense' },
  hidden: { display: 'none' },
  inline: { display: 'inline' },
  'inline-block': { display: 'inline-block' },
  'inline-flex': { display: 'inline-flex' },
  'inline-grid': { display: 'inline-grid' },
  'inline-table': { display: 'inline-table' },
  invisible: { visibility: 'hidden' },
  isolate: { isolation: 'isolate' },
  'isolation-auto': { isolation: 'auto' },
  italic: { 'font-style': 'italic' },
  'items-baseline': { 'align-items': 'baseline' },
  'items-center': { 'align-items': 'center' },
  'items-end': { 'align-items': 'flex-end' },
  'items-start': { 'align-items': 'flex-start' },
  'items-stretch': { 'align-items': 'stretch' },
  'justify-around': { 'justify-content': 'space-around' },
  'justify-between': { 'justify-content': 'space-between' },
  'justify-center': { 'justify-content': 'center' },
  'justify-end': { 'justify-content': 'flex-end' },
  'justify-evenly': { 'justify-content': 'space-evenly' },
  'justify-items-center': { 'justify-items': 'center' },
  'justify-items-end': { 'justify-items': 'end' },
  'justify-items-start': { 'justify-items': 'start' },
  'justify-items-stretch': { 'justify-items': 'stretch' },
  'justify-self-auto': { 'justify-self': 'auto' },
  'justify-self-center': { 'justify-self': 'center' },
  'justify-self-end': { 'justify-self': 'end' },
  'justify-self-start': { 'justify-self': 'start' },
  'justify-self-stretch': { 'justify-self': 'stretch' },
  'justify-start': { 'justify-content': 'flex-start' },
  'line-through': { 'text-decoration-line': 'line-through' },
  'lining-nums': { 'font-variant-numeric': 'lining-nums' },
  'list-inside': { 'list-style-position': 'inside' },
  'list-item': { display: 'list-item' },
  'list-outside': { 'list-style-position': 'outside' },
  lowercase: { 'text-transform': 'lowercase' },
  'mix-blend-color': { 'mix-blend-mode': 'color' },
  'mix-blend-color-burn': { 'mix-blend-mode': 'color-burn' },
  'mix-blend-color-dodge': { 'mix-blend-mode': 'color-dodge' },
  'mix-blend-darken': { 'mix-blend-mode': 'darken' },
  'mix-blend-difference': { 'mix-blend-mode': 'difference' },
  'mix-blend-exclusion': { 'mix-blend-mode': 'exclusion' },
  'mix-blend-hard-light': { 'mix-blend-mode': 'hard-light' },
  'mix-blend-hue': { 'mix-blend-mode': 'hue' },
  'mix-blend-lighten': { 'mix-blend-mode': 'lighten' },
  'mix-blend-luminosity': { 'mix-blend-mode': 'luminosity' },
  'mix-blend-multiply': { 'mix-blend-mode': 'multiply' },
  'mix-blend-normal': { 'mix-blend-mode': 'normal' },
  'mix-blend-overlay': { 'mix-blend-mode': 'overlay' },
  'mix-blend-plus-lighter': { 'mix-blend-mode': 'plus-lighter' },
  'mix-blend-saturation': { 'mix-blend-mode': 'saturation' },
  'mix-blend-screen': { 'mix-blend-mode': 'screen' },
  'mix-blend-soft-light': { 'mix-blend-mode': 'soft-light' },
  'no-underline': { 'text-decoration-line': 'none' },
  'normal-case': { 'text-transform': 'none' },
  'normal-nums': { 'font-variant-numeric': 'normal' },
  'not-italic': { 'font-style': 'normal' },
  'not-sr-only': {
    position: 'static',
    width: 'auto',
    height: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    clip: 'auto',
    whiteSpace: 'normal'
  },
  'object-contain': { 'object-fit': 'contain' },
  'object-cover': { 'object-fit': 'cover' },
  'object-fill': { 'object-fit': 'fill' },
  'object-none': { 'object-fit': 'none' },
  'object-scale-down': { 'object-fit': 'scale-down' },
  'oldstyle-nums': { 'font-variant-numeric': 'oldstyle-nums' },
  ordinal: { 'font-variant-numeric': 'ordinal' },
  outline: { 'outline-style': 'solid' },
  'outline-dashed': { 'outline-style': 'dashed' },
  'outline-dotted': { 'outline-style': 'dotted' },
  'outline-double': { 'outline-style': 'double' },
  'outline-none': { outline: '2px solid transparent', 'outline-offset': '2px' },
  'overflow-auto': { overflow: 'auto' },
  'overflow-clip': { overflow: 'clip' },
  'overflow-ellipsis': { 'text-overflow': 'ellipsis' },
  'overflow-hidden': { overflow: 'hidden' },
  'overflow-scroll': { overflow: 'scroll' },
  'overflow-visible': { overflow: 'visible' },
  'overflow-x-auto': { 'overflow-x': 'auto' },
  'overflow-x-clip': { 'overflow-x': 'clip' },
  'overflow-x-hidden': { 'overflow-x': 'hidden' },
  'overflow-x-scroll': { 'overflow-x': 'scroll' },
  'overflow-x-visible': { 'overflow-x': 'visible' },
  'overflow-y-auto': { 'overflow-y': 'auto' },
  'overflow-y-clip': { 'overflow-y': 'clip' },
  'overflow-y-hidden': { 'overflow-y': 'hidden' },
  'overflow-y-scroll': { 'overflow-y': 'scroll' },
  'overflow-y-visible': { 'overflow-y': 'visible' },
  overline: { 'text-decoration-line': 'overline' },
  'overscroll-auto': { 'overscroll-behavior': 'auto' },
  'overscroll-contain': { 'overscroll-behavior': 'contain' },
  'overscroll-none': { 'overscroll-behavior': 'none' },
  'overscroll-x-auto': { 'overscroll-behavior-x': 'auto' },
  'overscroll-x-contain': { 'overscroll-behavior-x': 'contain' },
  'overscroll-x-none': { 'overscroll-behavior-x': 'none' },
  'overscroll-y-auto': { 'overscroll-behavior-y': 'auto' },
  'overscroll-y-contain': { 'overscroll-behavior-y': 'contain' },
  'overscroll-y-none': { 'overscroll-behavior-y': 'none' },
  'place-content-around': { 'place-content': 'space-around' },
  'place-content-baseline': { 'place-content': 'baseline' },
  'place-content-between': { 'place-content': 'space-between' },
  'place-content-center': { 'place-content': 'center' },
  'place-content-end': { 'place-content': 'end' },
  'place-content-evenly': { 'place-content': 'space-evenly' },
  'place-content-start': { 'place-content': 'start' },
  'place-content-stretch': { 'place-content': 'stretch' },
  'place-items-baseline': { 'place-items': 'baseline' },
  'place-items-center': { 'place-items': 'center' },
  'place-items-end': { 'place-items': 'end' },
  'place-items-start': { 'place-items': 'start' },
  'place-items-stretch': { 'place-items': 'stretch' },
  'place-self-auto': { 'place-self': 'auto' },
  'place-self-center': { 'place-self': 'center' },
  'place-self-end': { 'place-self': 'end' },
  'place-self-start': { 'place-self': 'start' },
  'place-self-stretch': { 'place-self': 'stretch' },
  'pointer-events-auto': { 'pointer-events': 'auto' },
  'pointer-events-none': { 'pointer-events': 'none' },
  'proportional-nums': { 'font-variant-numeric': 'proportional-nums' },
  relative: { position: 'relative' },
  resize: { resize: 'both' },
  'resize-none': { resize: 'none' },
  'resize-x': { resize: 'horizontal' },
  'resize-y': { resize: 'vertical' },
  'ring-inset': { '--tw-ring-inset': 'inset' },
  'scroll-auto': { 'scroll-behavior': 'auto' },
  'scroll-smooth': { 'scroll-behavior': 'smooth' },
  'select-all': { 'user-select': 'all' },
  'select-auto': { 'user-select': 'auto' },
  'select-none': { 'user-select': 'none' },
  'select-text': { 'user-select': 'text' },
  'self-auto': { 'align-self': 'auto' },
  'self-baseline': { 'align-self': 'baseline' },
  'self-center': { 'align-self': 'center' },
  'self-end': { 'align-self': 'flex-end' },
  'self-start': { 'align-self': 'flex-start' },
  'self-stretch': { 'align-self': 'stretch' },
  'slashed-zero': { 'font-variant-numeric': 'slashed-zero' },

  'snap-align-none': { 'scroll-snap-align': 'none' },
  'snap-always': { 'scroll-snap-stop': 'always' },
  'snap-center': { 'scroll-snap-align': 'center' },
  'snap-end': { 'scroll-snap-align': 'end' },
  'snap-normal': { 'scroll-snap-stop': 'normal' },
  'snap-start': { 'scroll-snap-align': 'start' },

  '.snap-mandatory': { '--tw-scroll-snap-strictness': 'mandatory' },
  '.snap-proximity': { '--tw-scroll-snap-strictness': 'proximity' },

  '.snap-none': { 'scroll-snap-type': 'none' },
  '.snap-x': { 'scroll-snap-type': 'x var(--tw-scroll-snap-strictness)' },
  '.snap-y': { 'scroll-snap-type': 'y var(--tw-scroll-snap-strictness)' },
  '.snap-both': { 'scroll-snap-type': 'both var(--tw-scroll-snap-strictness)' },

  'sr-only': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0'
  },
  'stacked-fractions': { 'font-variant-numeric': 'stacked-fractions' },
  static: { position: 'static' },
  sticky: { position: 'sticky' },
  'subpixel-antialiased': {
    '-webkit-font-smoothing': 'auto',
    '-moz-osx-font-smoothing': 'auto'
  },
  table: { display: 'table' },
  'table-auto': { 'table-layout': 'auto' },
  'table-caption': { display: 'table-caption' },
  'table-cell': { display: 'table-cell' },
  'table-column': { display: 'table-column' },
  'table-column-group': { display: 'table-column-group' },
  'table-fixed': { 'table-layout': 'fixed' },
  'table-footer-group': { display: 'table-footer-group' },
  'table-header-group': { display: 'table-header-group' },
  'table-row': { display: 'table-row' },
  'table-row-group': { display: 'table-row-group' },
  'tabular-nums': { 'font-variant-numeric': 'tabular-nums' },
  'text-center': { 'text-align': 'center' },
  'text-clip': { 'text-overflow': 'clip' },
  'text-ellipsis': { 'text-overflow': 'ellipsis' },
  'text-end': { 'text-align': 'end' },
  'text-justify': { 'text-align': 'justify' },
  'text-left': { 'text-align': 'left' },
  'text-right': { 'text-align': 'right' },
  'text-start': { 'text-align': 'start' },

  'touch-auto': { 'touch-action': 'auto' },
  'touch-none': { 'touch-action': 'none' },
  'touch-pan-x': { 'touch-action': 'pan-x' },
  'touch-pan-left': { 'touch-action': 'pan-left' },
  'touch-pan-right': { 'touch-action': 'pan-right' },
  'touch-pan-y': { 'touch-action': 'pan-y' },
  'touch-pan-up': { 'touch-action': 'pan-up' },
  'touch-pan-down': { 'touch-action': 'pan-down' },
  'touch-pinch-zoom': { 'touch-action': 'pinch-zoom' },
  'touch-manipulation': { 'touch-action': 'manipulation' },

  truncate: {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap'
  },
  underline: { 'text-decoration-line': 'underline' },
  uppercase: { 'text-transform': 'uppercase' },
  visible: { visibility: 'visible' },
  'whitespace-normal': { 'white-space': 'normal' },
  'whitespace-nowrap': { 'white-space': 'nowrap' },
  'whitespace-pre': { 'white-space': 'pre' },
  'whitespace-pre-line': { 'white-space': 'pre-line' },
  'whitespace-pre-wrap': { 'white-space': 'pre-wrap' }
};
