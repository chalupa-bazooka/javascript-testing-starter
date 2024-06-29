import { describe, it, expect } from "vitest"
import { getCoupons, calculateDiscount, validateUserInput } from "../core"


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


describe("validateUserInput", () => {

    it("should return 'Validation successful' if there are no errors", () => {
        expect(validateUserInput("goga", 19)).toMatch(/successful/)
    })

    it("should return 'Invalid username' if the username isn't a string", () => {
        expect(validateUserInput(19, 19)).toMatch(/invalid username/i)
    })

    it("should return 'Invalid username' if the username is too short", () => {
        expect(validateUserInput("go", 19)).toMatch(/invalid username/i)
    })

    it("should return 'Invalid username' if the username is too long", () => {
        expect(validateUserInput("A".repeat(256), 19)).toMatch(/invalid username/i)
    })
    
    it("should return 'Invalid age' if the age isn't a number", () => {
        expect(validateUserInput("goga", "19")).toMatch(/invalid age/i)
    })
    
    it("should return 'Invalid age' if the age is below 18", () => {
        expect(validateUserInput("goga", 17)).toMatch(/invalid age/i)
    })

    it("should return 'Invalid age' if the age is above 200", () => {
        expect(validateUserInput("goga", 201)).toMatch(/invalid age/i)
    })

    it("should return 'Invalid username, Invalid age' if both the username & age are invalid", () => {
        expect(validateUserInput("go", 17)).toMatch(/invalid username/i)
        expect(validateUserInput("go", 17)).toMatch(/invalid age/i)
    })


})