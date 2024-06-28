import { describe, it, expect } from "vitest"
import { getCoupons } from "../core"


describe("getCoupons", () => {

    const getCouponsResult = getCoupons()

    it("should return a non-empty array", () => {
        expect(Array.isArray(getCouponsResult)).toBeTruthy()
        expect(getCouponsResult.length).toBeGreaterThan(0)
    })


    it ("should have 2 properties in each object", () => {
        getCouponsResult.forEach((coupon) => {
            expect(Object.keys(coupon).length).toBe(2)
        })
    })

    it("should have the code property in each object that is a valid string", () => {
        getCouponsResult.forEach((coupon) => {
            expect(coupon).toHaveProperty("code")
            expect(typeof coupon.code).toBe("string")
            expect(coupon.code).toBeTruthy()
        })
    })

    it("should have the discount property in each object that is a number between 0.1 & 1", () => {
        getCouponsResult.forEach((coupon) => {
            expect(coupon).toHaveProperty("discount")
            expect(typeof coupon.discount).toBe("number")
            expect(coupon.discount).toBeGreaterThanOrEqual(0.1)
            expect(coupon.discount).toBeLessThanOrEqual(1)
        })
    })

})