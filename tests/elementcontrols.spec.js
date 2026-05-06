import {test} from "@playwright/test"
import { log } from "node:console"


test("element", async ({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//     await page.locator("#name").fill("Dinga Kumar")
//    let n =await page.locator("#name").inputValue()
//    console.log(n);
// //    let inner =await page.getByRole('link', { name: 'Radio Button' }).textContent()
//    let inner =await page.locator('//section[@class="poppins text-[14px]"]').allTextContents()

// console.log(inner);

//     await page.locator("#email").type("dinga@gmail.com")
// await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
//    let value= await page.locator('//input[@id="attended"]').getAttribute("value")
//    console.log(value);

//       let notlist =await page.locator('//section[@class="poppins text-[14px]"]').first().waitFor()
//       console.log(notlist);
      

//   let listofelements =await page.locator('//div[@class="flex gap-2 w-4/12 pb-5"]').all()
//                   console.log(listofelements);
                  
   
    // await page.getByRole("button",{name:'Register'}).click()
    // await page.pause(3000)


    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    await page.locator("//input[@id='name']").waitFor()
    let is =  await page.locator("//input[@id='name']").isVisible()

     let isEnabled =  await page.locator("//input[@id='name']").isEnabled()
     console.log(isEnabled);

     let isDisabled =  await page.locator("//input[@id='name']").isDisabled()
     console.log(isDisabled);

     let isEditable =  await page.locator("//input[@id='name']").isEditable()
     console.log(isEditable);
     await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
     await page.locator("//input[@id='attended']").click()
     let isCheked = await page.locator("//input[@id='attended']").isChecked()

    console.log(`Is Checked for Check Box ${isCheked}`);

    await page.goto("https://demoapps.qspiders.com/ui/radio")

    await page.locator("//input[@id='attended']").click()
    let isCheckedforRadio = await page.locator("//input[@id='attended']").isChecked()

    console.log(`Is Checked for Radio ${isCheckedforRadio}`);
    
    
})