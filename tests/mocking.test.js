import {it, expect, describe, vi} from "vitest"

describe("test suite 1", () => {
    
    it("test case 1", () => {
        const sendText = vi.fn()
        sendText.mockReturnValue("ok")

        const result = sendText("message")

        expect(sendText).toHaveBeenCalledWith("message")
        expect(result).toBe("ok")
    })

})