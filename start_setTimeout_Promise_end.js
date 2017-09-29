console.log('Start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(function () {
  console.log('Promis1')
}).then(function () {
  console.log('Promis2')
})

console.log('End')
