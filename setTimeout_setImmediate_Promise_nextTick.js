setTimeout(function () {
  console.log('[0] setTimeout with 1 sec')
}, 1000)

setTimeout(function () {
  console.log('[1] setTimeout with 0 sec')
}, 0)

setImmediate(function () {
  console.log('[2] immediate')
})

Promise.resolve().then(function () {
  console.log('[3] Promise.resolve()')
})

process.nextTick(function () {
  console.log('[4] process.nextTick()')
})
