import {test} from "@playwright/test"

test("getBy",async ({page})=>{


    await page.goto("https://demo.nopcommerce.com/login?returnUrl=%2F")
//-----------hetByLabel()
 //   await page.getByLabel("Email:").fill("aa@gmail.com")

 //-----------------getByPlaceHolders()
  await page.getByPlaceholder("Search store").fill("Dinga")
  //await page.locator("//button[@type='submit']").first().click()

//--------------getBytext()

//await page.getByText("Search").first().click()

await page.getByRole("button",{name:'submit'}).first().click()

})