import {test,expect} from "@playwright/test"

test("dialogs",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")


    page.on("dialog", async(dialog)=>{
        if (dialog.type()=='alert') {

        console.log(await dialog.message());
        
         await dialog.accept()            
        } else if(dialog.type()=='confirm'){

            console.log(await dialog.message());
            
         await dialog.accept()
        }
        else if(dialog.type()=='prompt'){

            if (await dialog.defaultValue()=='tom') {
                console.log(await dialog.defaultValue());
            } else {
                await dialog.accept("Dinga")
                console.log(await dialog.message());
            }
        }
    })

    await page.getByRole("button",{name:'Simple Alert'}).click()
  //  await expect(await page.locator("#demo")).toContainText("Cancel")
  await page.waitForTimeout(2000)
    await page.getByRole("button",{name:'Confirmation Alert'}).click()
      await page.waitForTimeout(2000)

        await expect(await page.locator("#demo")).toContainText("OK")
    await page.getByRole("button",{name:'Prompt Alert'}).click()
      await page.waitForTimeout(2000)

        await expect(await page.locator("#demo")).toContainText("are you today")



})