const fs = require('fs')

fs.readFile(__filename, () => {
  setTimeout(function () {
    console.log('timeout')
  }, 0)

  setImmediate(function () {
    console.log('immediate')
  })
})
