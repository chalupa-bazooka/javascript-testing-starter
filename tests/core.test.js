import { describe, it, expect, beforeEach } from "vitest"
import {
    getCoupons, calculateDiscount, validateUserInput, isValidUsername,
    canDrive, Stack
} from "../src/core"

describe("Stack", () => {
    let stack1

    beforeEach(() => {
        stack1 = new Stack()
    })

    it("push should add an item to the stack", () => {
        stack1.push(1)

        expect(stack1.size()).toBe(1)
    })


    it("pop should remove an item from the stack", () => {
        stack1.push(1)
        stack1.push(2)

        const poppedItem = stack1.pop()

        expect(poppedItem).toBe(2)
        expect(stack1.size()).toBe(1)
    })

    it("pop should throw an error if the stack is empty", () => {
        expect(() => stack1.pop()).toThrow(/empty/i)
    })

    it("peek should return the top item from the stack without removing it", () => {
        stack1.push(1)
        stack1.push(2)

        const peekedItem = stack1.peek()

        expect(peekedItem).toBe(2)
        expect(stack1.size()).toBe(2)
    })

    it("peek should throw an error if the stack is empty", () => {
        expect(() => stack1.peek()).toThrow(/empty/i)
    })

    it("isEmpty should only return true if the stack is empty", () => {
        expect(stack1.isEmpty()).toBe(true)

        stack1.push(1)

        expect(stack1.isEmpty()).toBe(false)
    })

    it("size should return the number of items in the stack", () => {
        stack1.push(1)

        expect(stack1.size()).toBe(1)

        stack1.push(2)

        expect(stack1.size()).toBe(2)
    })

    it("clear should remove all the items from the stack", () => {
        stack1.push(1)
        stack1.push(2)
        stack1.clear()

        expect(stack1.size()).toBe(0)
    })
})





// describe("canDrive", () => {

//     it("should return 'Invalid country code' if an invalid country code has been passed", () => {
//         expect(canDrive(16, "US")).toMatch(/invalid/i)
//     })

//     it("should return 'Age must be a number' if the age isn't a number", () => {
//         expect(canDrive("10", "GEO")).toMatch(/number/i)
//         expect(canDrive(null, "GEO")).toMatch(/number/i)
//     })

//     it("should return 'Pass 2 arguments: age & code' if another number of arguments has been passed", () => {
//         expect(canDrive()).toMatch(/2 arguments/i)
//         expect(canDrive(10, "GEO", 12)).toMatch(/2 arguments/i)
//         expect(canDrive(10)).toMatch(/2 arguments/i)
//     })

//     it.each([
//         {age: 16, countryCode: "GBR", result: false},
//         {age: 17, countryCode: "GBR", result: true},
//         {age: 18, countryCode: "GBR", result: true},
//         {age: 16, countryCode: "GEO", result: false},
//         {age: 17, countryCode: "GEO", result: true},
//         {age: 18, countryCode: "GEO", result: true},
//         {age: 14, countryCode: "MEX", result: false},
//         {age: 15, countryCode: "MEX", result: true},
//         {age: 16, countryCode: "MEX", result: true},
//         {age: 17, countryCode: "RUS", result: false},
//         {age: 18, countryCode: "RUS", result: true},
//         {age: 19, countryCode: "RUS", result: true},
//         {age: 15, countryCode: "USA", result: false},
//         {age: 16, countryCode: "USA", result: true},
//         {age: 17, countryCode: "USA", result: true},
//     ])("should return $result when ($age, $countryCode) have been passed", ({age, countryCode, result}) => {
//         expect(canDrive(age, countryCode)).toBe(result)
//     })

// })





// describe("isValidUsername", () => {

//     const minLength = 5
//     const maxLength = 15

//     it.each([
//         {case: "price < min", username: "a".repeat(minLength-1), result: false},
//         {case: "price === min", username: "a".repeat(minLength), result: true},
//         {case: "price is between min & max", username: "a".repeat(minLength+1), result: true},
//         {case: "price === max", username: "a".repeat(maxLength), result: true},
//         {case: "price > max", username: "a".repeat(maxLength+1), result: false},
//     ])("should return $result if $case", ({username, result}) => {
//         expect(isValidUsername(username, minLength, maxLength)).toBe(result)
//     })

//     it("should return false for invalid username types", () => {
//         expect(isValidUsername(null)).toBe(false)
//         expect(isValidUsername()).toBe(false)
//         expect(isValidUsername(undefined)).toBe(false)
//         expect(isValidUsername(1)).toBe(false)

//     })

// })





// describe("getCoupons", () => {

//     const getCouponsResult = getCoupons()

//     it("should return a non-empty array", () => {
//         expect(Array.isArray(getCouponsResult)).toBeTruthy()
//         expect(getCouponsResult.length).toBeGreaterThan(0)
//     })


//     it ("should have 2 properties in each object", () => {
//         getCouponsResult.forEach((coupon) => {
//             expect(Object.keys(coupon).length).toBe(2)
//         })
//     })

//     it("should have the code property in each object that is a valid string", () => {
//         getCouponsResult.forEach((coupon) => {
//             expect(coupon).toHaveProperty("code")
//             expect(typeof coupon.code).toBe("string")
//             expect(coupon.code).toBeTruthy()
//         })
//     })

//     it("should have the discount property in each object that is a number between 0.1 & 1", () => {
//         getCouponsResult.forEach((coupon) => {
//             expect(coupon).toHaveProperty("discount")
//             expect(typeof coupon.discount).toBe("number")
//             expect(coupon.discount).toBeGreaterThanOrEqual(0.1)
//             expect(coupon.discount).toBeLessThanOrEqual(1)
//         })
//     })

// })


// describe("calculateDiscount", () => {
//     it("should return discounted price if given a valid code", () => {
//         expect(calculateDiscount(10, "SAVE10")).toBe(9)
//         expect(calculateDiscount(10, "SAVE20")).toBe(8)

//     })

//     it("should handle a non-numeric price", () => {
//         expect(calculateDiscount("10", "SAVE10")).toMatch(/invalid/i)
//     })

//     it("should handle a negative rice", () => {
//         expect(calculateDiscount(-1, "SAVE10")).toMatch(/invalid/i)
//     })

//     it("should handle a non-string discount code", () => {
//         expect(calculateDiscount(10, 10)).toMatch(/invalid/i)
//     })

//     it("should handle a non-existent discount code", () => {
//         expect(calculateDiscount(10, "INVALID")).toBe(10)
//     })

// })


// describe("validateUserInput", () => {

//     it("should return 'Validation successful' if there are no errors", () => {
//         expect(validateUserInput("goga", 19)).toMatch(/successful/)
//     })

//     it("should return 'Invalid username' if the username isn't a string", () => {
//         expect(validateUserInput(19, 19)).toMatch(/invalid username/i)
//     })

//     it("should return 'Invalid username' if the username is too short", () => {
//         expect(validateUserInput("go", 19)).toMatch(/invalid username/i)
//     })

//     it("should return 'Invalid username' if the username is too long", () => {
//         expect(validateUserInput("A".repeat(256), 19)).toMatch(/invalid username/i)
//     })
    
//     it("should return 'Invalid age' if the age isn't a number", () => {
//         expect(validateUserInput("goga", "19")).toMatch(/invalid age/i)
//     })
    
//     it("should return 'Invalid age' if the age is below 18", () => {
//         expect(validateUserInput("goga", 17)).toMatch(/invalid age/i)
//     })

//     it("should return 'Invalid age' if the age is above 200", () => {
//         expect(validateUserInput("goga", 201)).toMatch(/invalid age/i)
//     })

//     it("should return 'Invalid username, Invalid age' if both the username & age are invalid", () => {
//         expect(validateUserInput("go", 17)).toMatch(/invalid username/i)
//         expect(validateUserInput("go", 17)).toMatch(/invalid age/i)
//     })

// })