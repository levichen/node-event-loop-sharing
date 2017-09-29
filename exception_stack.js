function foo () {
  throw new Error('Oops')
}

function bar () {
  foo()
}

function baz () {
  bar()
}

baz()
