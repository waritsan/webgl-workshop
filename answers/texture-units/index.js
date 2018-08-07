var setup  = require('./setup')
var DATA   = require('./data.json')

var BG1         = new Uint8Array(DATA.BG1)
var BG2         = new Uint8Array(DATA.BG2)
var WIDTH       = 256
var HEIGHT      = 256

var drawIt

function createTexture(gl, img) {
  var texture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texImage2D(gl.TEXTURE_2D,
    0,
    gl.RGBA,
    WIDTH,
    HEIGHT,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array(img))
  gl.texParameteri(gl.TEXTURE_2D,
    gl.TEXTURE_MIN_FILTER,
    gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D,
    gl.TEXTURE_MAG_FILTER,
    gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D,
    gl.TEXTURE_WRAP_S,
    gl.REPEAT)
  gl.texParameteri(gl.TEXTURE_2D,
    gl.TEXTURE_WRAP_T,
    gl.REPEAT)
  return texture
}

exports.init = function(gl) {
  drawIt = setup(gl)

  //TODO: Create 2 periodic 256x256 RGBA textures
  // BG1 should be bound on texture unit 0
  // BG2 should be bound on texture unit 1
  gl.activeTexture(gl.TEXTURE0)
  createTexture(gl, BG1)

  gl.activeTexture(gl.TEXTURE0+1)
  createTexture(gl, BG2)

}

exports.draw = function(gl, t) {
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
  drawIt(t)
}
