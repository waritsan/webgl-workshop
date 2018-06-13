exports.init = function(gl) {
}

// Run every frame: use this to draw things to the screen.
// exports.draw = function(gl) {
//
//   var w = gl.drawingBufferWidth
//   var h = gl.drawingBufferHeight
//
//   //Clear background to black
//   gl.clearColor(0,0,0,1)
//   gl.clear(gl.COLOR_BUFFER_BIT)
//
//   //Turn on scissor test
//   gl.enable(gl.SCISSOR_TEST)
//
//   //Clip out region in center of screen
//   gl.scissor(w/4, h/4, w/2, h/2)
//
//   //Clear to white
//   gl.clearColor(1, 1, 1, 1)
//   gl.clear(gl.COLOR_BUFFER_BIT)
//
//   //Turn off scissor test
//   gl.disable(gl.SCISSOR_TEST)
// }

exports.draw = function(gl) {

  var w = gl.drawingBufferWidth
  var h = gl.drawingBufferHeight

  //Clear background to black
  gl.clearColor(0,0,0,1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  //Turn on scissor test
  gl.enable(gl.SCISSOR_TEST)

  //Blue bottom left
  gl.scissor(0, 0, w/2, h/2)
  gl.clearColor(0, 0, 1, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  //Red top left
  gl.scissor(0, h/2, w/2, h/2)
  gl.clearColor(1, 0, 0, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  //Green top right
  gl.scissor(w/2, h/2, w/2, h/2)
  gl.clearColor(0, 1, 0, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  //Yellow bottom right
  gl.scissor(w/2, 0, w/2, h/2)
  gl.clearColor(1, 1, 0, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  //Turn off scissor test
  gl.disable(gl.SCISSOR_TEST)
}
