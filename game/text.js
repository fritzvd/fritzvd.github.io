function createRichText (text, x, y, options, scale) {
  if (!options) {
    options = {}
  }

  if (!scale) {
    scale = 1
  }

  var fontSize = parseInt(20 * scale);
  var style = {
      fontSize: fontSize,
      fontStyle : 'bold italic',
      fontFamily: 'Arial',
      fill : '#F7EDCA',
      stroke : '#4a1850',
      strokeThickness : 5,
      dropShadow : true,
      dropShadowColor : '#000000',
      dropShadowAngle : Math.PI / 6,
      dropShadowDistance : 6,
      wordWrap : true,
      wordWrapWidth : 440
  }

  Object.keys(options).forEach(function (key) {
    style[key] = options[key]
  })

  var richText = new PIXI.Text(text, style)
  richText.x = x
  richText.y = y

  richText.fade = function () {
    richText.alpha -= 0.003
  }
  return richText
}

function createDialogueText(text, x, y, options) {
  if (!options) {
    options = {}
  }

  var style = {
      fontSize: 16,
      fontStyle : '',
      fontFamily: 'Arial',
      fill : '#FFF',
      stroke : '#DDD',
      strokeThickness : 0,
      dropShadow : false,
      dropShadowColor : '#000000',
      dropShadowAngle : 0,
      dropShadowDistance : 0,
      wordWrap : true,
      wordWrapWidth : 440
  }

  Object.keys(options).forEach(function (key) {
    style[key] = options[key]
  })
  return createRichText(text, x, y, style)
}

module.exports = {
  createRichText: createRichText,
  createDialogueText: createDialogueText
}
