import {test} from "@playwright/test"

test("login",async ({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/")
//     //By using id selector
//     await page.locator("#username").fill("student")
//     //By using id selector
//     await page.locator("#password").fill("Password123")
// //By using class selector
//     page.locator(".btn").click()


// //By Using tag+id
//   await page.locator("input#username").fill("student")
//   await page.locator("input#password").fill("Password123")
// //By Using tag + class
//   await page.locator("button.btn").click()

// //By using attribute
// await page.locator('[name="username"]').fill("student")
// //By using attribute
// await page.locator('[name="password"]').fill("Password123")
// //By using tag+id
// await page.locator("button#submit").click()

//https://www.flipkart.com/account/login?signup=true&ret=/

await page.locator("//input[@name='username']").fill("student")

await page.locator("//input[@name='password']").fill("Password123")

await page.locator("//button[@id='submit']").click()
})

test("fliplogin",async ({page})=>{

    await page.goto("https://www.flipkart.com/account/login?signup=true&ret=/")
    await page.locator(".c3Bd2c yXUQVt").fill("+91 9866940804")
    await page.locator("//button[@type='submit']").click()
})