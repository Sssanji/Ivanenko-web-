function sum() {
  const nums = []
  let a = 0
  while(1) {
    a = prompt('Enter num:')
    if(isNaN(+a) || a === '' || a === null) break
    nums.push(+a)
  }
  return nums.reduce((sum, item) => item + sum, 0)
}

console.log(sum())
