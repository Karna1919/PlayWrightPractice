import {expect, test} from "@playwright/test"
import { permission } from "node:process"
test("notification pop up",async ({browser})=>{

     let context= await browser.newContext()

    let page = await context.newPage()

    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")

    await page.getByRole("button",{name:"Notification"}).click()

  let result=  await page.evaluate(()=>{return Notification.requestPermission()})

  console.log(result);
  



    
})