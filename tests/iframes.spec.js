import {test,expect} from "@playwright/test"

test("iframes",async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    /**Total frames */
    let frames=await page.frames()

    // console.log(frames.length);

    // for (let frame of frames){
    //     console.log(await frame.title());
    // }

    /** ----------A1 frame()----------- */
    let frame1=     await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})

    await frame1.locator('//input[@name="mytext1"]').fill("Dinga")

    await page.waitForTimeout(3000)

    await expect(await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain("Dinga")

    /** A2 frameLocater() ------------------*/

    let fram2=await page.frameLocator('//frame[@src="frame_2.html"]').locator("//input[@name='mytext2']")
    await fram2.fill("Dingi")
     await page.waitForTimeout(3000)

     /**A3 By using Locator and contentFrame() */

     let frame3=    await page.locator('//frame[@src="frame_3.html"]').contentFrame()
        console.log(frame3);
        
     await frame3.locator('//input[@name="mytext3"]').fill("SAI KUMAR")

          await page.waitForTimeout(3000)
await frame3.frameLocator('//iframe').locator('//div[@class="ulDsOb" and .="I am a human"]').click()
          await page.waitForTimeout(3000)


          let frame4=await page.locator('//frame[@src="frame_4.html"]').contentFrame()

          frame4.locator('//input[@name="mytext4"]').fill("ABCD")

          await page.waitForTimeout(3000)

})

