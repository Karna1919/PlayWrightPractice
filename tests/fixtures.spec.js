import {test} from "@playwright/test"

// test("Fixtures",async({page})=>{

//     await page.goto("https://www.amazon.in/")

    
// })

test ("Fixtures",async({browserName,browser})=>{

    console.log(browserName);

     let context =  await browser.newContext()

     let page = await  context.newPage()

     await page.goto("https://www.amazon.in/")


    


})