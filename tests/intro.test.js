import { describe, test, it, expect } from "vitest"
import { max, fizzBuzz, calculateAverage, calculateFactorial } from "../intro"

// describe("max", () => {
//     it("should return the 1st argument if it's greater", () => {
//         // AAA: Arrange, Act, & Assert

//         // A1: Arrange
//         const a = 2
//         const b = 1

//         // A2: Act
//         const result = max(a, b)

//         // A3: Assert
//         expect(result).toBe(2)

//         // you can break your test code into 3 A-parts as above
//         // or you can simplify it, if it's straightforward enough:
//         // expect(max(2, 1)).toBe(2)
//         // – it will work just as well 
//     })

//     it("should return the 2nd argument if it's greater", () => {
//         expect(max(1, 2)).toBe(2)
//     })

//     it("should return the 1st argument if the arguments are equal", () => {
//         expect(max(2, 2)).toBe(2)
//     })

// })

// describe("fizzBuzz", () => {
//     it("should return Fizz if the argument is only fully divisible by 3", () => {
//         expect(fizzBuzz(3)).toBe("Fizz")
//     })

//     it("should return Buzz if the argument is only fully divisible by 5", () => {
//         expect(fizzBuzz(5)).toBe("Buzz")
//     })

//     it("should return FizzBuzz if the argument is fully divisible by both 3 and 5", () => {
//         expect(fizzBuzz(15)).toBe("FizzBuzz")
//     })

//     it("should return the argument as a string if it's not fully divisible by neither 3 nor 5", () => {
//         expect(fizzBuzz(2)).toBe("2")
//     })

// })

// describe("calculateAverage", () => {
//     it("should return NaN if given an empty array", () => {
//         expect(calculateAverage([])).toBe(NaN)
//     })

//     it("should calculate the average of an array with 1 item", () => {
//         expect(calculateAverage([1])).toBe(1)
//     })

//     it("should calculate the average of an array with 2 items", () => {
//         expect(calculateAverage([1, 2])).toBe(1.5)
//     })

//     it("should calculate the average of an array with 3 items", () => {
//         expect(calculateAverage([1, 2, 3])).toBe(2)
//     })

//     it("should calculate the average of an array with 10 items", () => {
//         expect(calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5)
//     })
// })

describe("calculateFactorial", () => {
    it("should return NaN if the argument is absent", () => {
        expect(calculateFactorial()).toBe(NaN)
    })
    
    it("should return NaN if the argument isn't a number", () => {
        expect(calculateFactorial(["a", 1])).toBe(NaN)
    })

    it("should return 1 if the argument is 0", () => {
        expect(calculateFactorial(0)).toBe(1)
    })

    it("should return 1 if the argument is 1", () => {
        expect(calculateFactorial(1)).toBe(1)
    })

    it("should return 2 if the argument is 2", () => {
        expect(calculateFactorial(2)).toBe(2)
    })

    it("should return 6 if the argument is 3", () => {
        expect(calculateFactorial(3)).toBe(6)
    })

    it("should return 3'628'800 if the argument is 10", () => {
        expect(calculateFactorial(10)).toBe(3628800)
    })

    it("should return 'It won't work with negative numbers' if the argument is negative", () => {
        expect(calculateFactorial(-1)).toBe("It won't work with negative numbers")
    })
})