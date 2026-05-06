import  {test} from "@playwright/test"

test("test gmail",async({page})=>{
    await page.goto("https://mail.google.com/mail/u/1/#inbox")

    await page.waitForTimeout(3000)

    await page.locator("//input[@id='identifierId']").fill("saikumarkandrathi7@gmail.com")
        await page.waitForTimeout(3000)
        await page.getByRole("button",{name:'Next'}).click()
                await page.waitForTimeout(10000)




})