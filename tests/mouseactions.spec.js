import {test} from "@playwright/test"

test("mouse actions",async({page})=>{

//     await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")

//     await page.locator("//button[@id='btn']").click()

//     await page.waitForTimeout(3000)
// /** It is right click */
//     await page.locator('//a[text()="Right Click"]').click()

//     await page.locator('//button[@id="btn_a"]').click({button:"right"})
//         await page.waitForTimeout(3000)
// /*Double click*/
//       await page.locator('//a[text()="Double Click"]').click()

//       await page.locator('//button[@id="btn_a"]').click({button:'left',clickCount:2})
//         await page.waitForTimeout(3000)

//         await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")

//        await page.locator('//section[text()="Mouse Actions"]').click()

//                await page.waitForTimeout(3000)


//         await page.locator("#circle").hover()

//         await page.mouse.down() //It will click on targeted point
//         await page.waitForTimeout(3000)

//         await page.mouse.up()

//         await page.waitForTimeout(3000)

//         await page.goto("https://demoapps.qspiders.com/ui/checkbox/disabled?sublist=2")

//         await page.locator('//input[@id="domain_a"]').click({force:true})
await page.locator('//input[@id="domain_a"]').dispatchEvent()
//        let is= await page.locator('//input[@id="domain_a"]').isEnabled()
//        console.log(is);
//         await page.waitForTimeout(3000)
        await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")

        await page.locator("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer ']").hover()

        await page.waitForTimeout(4000)
        await page.mouse.move(100,200)
                await page.waitForTimeout(3000)
                



})

// test("scroll",async ({page})=>{
//         await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")

//         await page.locator("//input[@type='checkbox']").scrollIntoViewIfNeeded()
//                 await page.locator("//input[@type='checkbox']").click()

//        await page.waitForTimeout(3000)
// let sc=100
//         for (let index = 0; index <=10; index++) {
//                 await page.mouse.wheel(0,100)
//                       await page.waitForTimeout(2000)  
//         }

//         await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
//                       await page.waitForTimeout(2000)  

//       for (let index = 0; index <=10; index++) {
       
//         await page.mouse.wheel(1000,0)
//         await page.waitForTimeout(2000)  

//       }

test.only("drag and drop", async ({page})=>{
//         await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
// await page.waitForTimeout(2000)  
//         await page.locator("//div[text()='Mobile Charger']").hover()
// await page.waitForTimeout(2000)  
//         await page.mouse.down()
//         await page.waitForTimeout(2000)  
//         await page.locator("//div[text()='Mobile Accessories']/parent::div").hover()
//         await page.waitForTimeout(2000)  
//         await page.mouse.up()
//         await page.waitForTimeout(2000)  

//         await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
// await page.waitForTimeout(2000)  
//         await page.locator("//div[text()='Mobile Charger']").hover()
// await page.waitForTimeout(2000)  
//         await page.mouse.down()
//         await page.waitForTimeout(2000)  
//  let value=       await page.locator("//div[text()='Mobile Accessories']/parent::div").boundingBox()

//  console.log(value);

//  await page.mouse.move(value.x,value.y)
 
//         await page.waitForTimeout(2000)  
//         await page.mouse.up()
//         await page.waitForTimeout(2000)  

            await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
await page.waitForTimeout(2000)  
   let source =     page.locator("//div[text()='Mobile Charger']")

 let target=       await page.locator("//div[text()='Mobile Accessories']/parent::div")

 await source.dragTo(target)
 await page.waitForTimeout(3000)  

})
                