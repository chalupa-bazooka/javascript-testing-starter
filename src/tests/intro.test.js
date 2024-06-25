import { describe, test, it, expect } from "vitest"
import { max, fizzBuzz } from "../intro"

describe("max", () => {
    it("should return the 1st argument if it's greater", () => {
        // AAA: Arrange, Act, & Assert

        // A1: Arrange
        const a = 2
        const b = 1

        // A2: Act
        const result = max(a, b)

        // A3: Assert
        expect(result).toBe(2)

        // you can break your test code into 3 A-parts as above
        // or you can simplify it, if it's straightforward enough:
        // expect(max(2, 1)).toBe(2)
        // – it will work just as well 
    })

    it("should return the 2nd argument if it's greater", () => {
        expect(max(1, 2)).toBe(2)
    })

    it("should return the 1st argument if the arguments are equal", () => {
        expect(max(2, 2)).toBe(2)
    })

})

describe("fizzBuzz", () => {
    it("should return Fizz if the argument is only fully divisible by 3", () => {
        expect(fizzBuzz(3)).toBe("Fizz")
    })

    it("should return Buzz if the argument is only fully divisible by 5", () => {
        expect(fizzBuzz(5)).toBe("Buzz")
    })

    it("should return FizzBuzz if the argument is fully divisible by both 3 and 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
    })

    it("should return the argument as a string if it's not fully divisible by neither 3 nor 5", () => {
        expect(fizzBuzz(2)).toBe("2")
    })

})