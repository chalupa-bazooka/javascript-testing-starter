// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b
}

// Exercise
export function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  } else if (num % 3 === 0) {
    return "Fizz"
  } else if (num % 5 === 0) {
    return "Buzz"
  } else {
    return num.toString()
  }
}

// TTD intro
export function calculateAverage(nums) {
  if (!nums.length) {
    return NaN
  } else {
    const sum = nums.reduce((sum, current) => sum + current, 0)
    return sum / nums.length
  }
}

// TTD intro 2
export function calculateFactorial(num) {
  if (isNaN(num)) {
    return NaN
  } else if (num < 0) {
    return "It won't work with negative numbers"
  } else if (num === 0) {
    return 1
    // } else {
    //   let accum = 1
    //   for (let i = num; i > 0; i--) { 
    //     accum = accum * i 
    //   }
    //   return accum
    // }
  } else {
    return num * calculateFactorial(num - 1)
  }
}