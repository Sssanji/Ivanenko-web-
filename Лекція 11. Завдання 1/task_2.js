function random(min, max) {
  return Math.random() * (max - min) + min
}

for(let i = 0; i < 30; i++) console.log(random(1, 5))
