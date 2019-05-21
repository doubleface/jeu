const ctx = document.querySelector('canvas').getContext('2d')

function render() {
  resizeCanvasToDisplaySize(ctx.canvas)
  ctx.fillStyle = '#FFF'
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.save()

  // mettre le code ici

  ctx.restore()
  requestAnimationFrame(render)
}
requestAnimationFrame(render)

function resizeCanvasToDisplaySize(canvas) {
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth
  const height = canvas.clientHeight

  // If it's resolution does not match change it
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
    return true
  }

  return false
}
