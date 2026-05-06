import {test,expect} from "@playwright/test"

test("radio", async ({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
//  await page.locator('//input[@value="Upi"]').click()
//  await page.waitForTimeout(3000)
   let isChecked= await page.locator('//input[@value="Upi"]').isChecked()
   console.log(isChecked);
   if (isChecked) {
   
    await expect(await page.locator('//input[@value="Upi"]').isChecked()).toBeTruthy()
    console.log(`Yes It is Checked`);
    
   } else {
await expect(await page.locator('//input[@value="Upi"]').isChecked()).toBeFalsy()
        await page.locator('//input[@value="Upi"]').check()
        await page.waitForTimeout(2000)
        await page.locator('//input[@value="wallet"]').click()
        await page.waitForTimeout(2000)
       await expect(await page.locator('//input[@value="Upi"]')).toBeChecked()
        await page.locator('//input[@value="Upi"]').click()
        await page.waitForTimeout(2000)
        let result = await page.locator('//input[@value="Upi"]').isChecked()
        console.log(result);
        
   }
})