function readNumber() {
  const a = prompt('Enter num:')
  if(a === '' || a === null) return null
  else if(isNaN(+a)) return readNumber()
  else return a
}

console.log(readNumber())
