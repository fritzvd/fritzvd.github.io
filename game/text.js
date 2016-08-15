

function createRichText (text, x, y, options) {
  if (!options) {
    options = {}
  }
  var fontSize = 36;
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
  };

  Object.keys(options).forEach(function (key) {
    style[key] = options[key];
  })

  var richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;
  return richText;
}

module.exports = createRichText
