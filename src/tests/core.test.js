import { describe, it, expect } from "vitest"
import {
    getCoupons, calculateDiscount, validateUserInput, isValidUsername,
    canDrive,
} from "../core"

describe("canDrive", () => {

    it("should return 'Invalid country code' if an invalid country code has been passed", () => {
        expect(canDrive(16, "US")).toMatch(/invalid/i)
    })

    it("should return false if the passed age is below the min boundary for the specified country", () => {
        expect(canDrive(16, "GEO")).toBe(false)
        expect(canDrive(17, "RUS")).toBe(false)
    })

    it("should return true if the passed age is at the min boundary for the specified country", () => {
        expect(canDrive(17, "GEO")).toBe(true)
        expect(canDrive(18, "RUS")).toBe(true)
    })

    it("should return true if the passed age is above the min boundary for the specified country", () => {
        expect(canDrive(18, "GEO")).toBe(true)
        expect(canDrive(19, "RUS")).toBe(true)
    })

    it("should return 'Age must be a number' if the age isn't a number", () => {
        expect(canDrive("10", "GEO")).toMatch(/number/i)
        expect(canDrive(null, "GEO")).toMatch(/number/i)
    })

    it("should return 'Pass 2 arguments: age & code' if another number of arguments has been passed", () => {
        expect(canDrive()).toMatch(/2 arguments/i)
        expect(canDrive(10, "GEO", 12)).toMatch(/2 arguments/i)
        expect(canDrive(10)).toMatch(/2 arguments/i)

    })

})


// export function canDrive(age, countryCode) {
//     const legalDrivingAge = {
//       USA: 16,
//       GBR: 17,
//       MEX: 15,
//       GEO: 17,
//       RUS: 18,
//     };
  
//     if (!legalDrivingAge[countryCode]) {
//       return 'Invalid country code';
//     }
  
//     return age >= legalDrivingAge[countryCode];
//   }



// describe("isValidUsername", () => {

//     const minLength = 5
//     const maxLength = 15

//     it("should return false if the username is shorther than the lower boundary", () => {
//         expect(isValidUsername("a".repeat(minLength-1))).toBe(false)
//     })

//     it("should return false if the username is longer than the higher boundary", () => {
//         expect(isValidUsername("a".repeat(maxLength+1))).toBe(false)
//     })

//     it("should return true if the username's length is equal to either boundary", () => {
//         expect(isValidUsername("a".repeat(minLength))).toBe(true)
//         expect(isValidUsername("a".repeat(maxLength))).toBe(true)

//     })

//     it("should return true if the username's length is within the boundaries", () => {
//         expect(isValidUsername("a".repeat(minLength+1))).toBe(true)
//         expect(isValidUsername("a".repeat(maxLength-1))).toBe(true)

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