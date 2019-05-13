const ctx = document.querySelector('canvas').getContext('2d')
let x = 400
let y = 200
let Vx = 0
let Vy = -10
const radius = 50
const G = 1
const coefRebound = 0.7

function render() {
  resizeCanvasToDisplaySize(ctx.canvas)
  x = ctx.canvas.width / 2
  ctx.fillStyle = '#FFF'
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.save()

  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.fillStyle = '#000'
  ctx.fill()

  x += Vx
  y += Vy

  Vy += G

  if (y + radius >= ctx.canvas.height) {
    Vy = -Vy * coefRebound
    if (Math.abs(Vy) < 1) Vy = 0
  }

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
