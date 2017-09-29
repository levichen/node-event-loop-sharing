setTimeout(function () {
  console.log('[1] setTimeout with 0 sec')
}, 0)

setImmediate(function () {
  console.log('[2] immediate')
})
