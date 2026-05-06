import {test} from "@playwright/test"

test("ex",async ({page})=>{

    // await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=8971301311062495599&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062072&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1")
    // await page.locator("//input[@id='twotabsearchtextbox']").click()
    //     await page.locator("//input[@id='twotabsearchtextbox']").fill("Shirt")

    //     await page.locator('//div[@role="row"]',{hasText:" for man"}).first().waitFor()

    //     let items=await page.locator('//div[@role="row"]').allTextContents()
    //     console.log(items);


    await page.goto("https://www.amazon.in/?gad_source=1&gad_campaignid=22878515986&gbraid=0AAAABA-sQEJfpFMRRz9Ee40kqkZyQnZi2&gclid=CjwKCAjw46HPBhAMEiwASZpLRNL0QbSHx0hY1HLUlunAqN7fa7yPOFLFn3WxkeZaShkXcV00-e-K2hoCCjAQAvD_BwE")
    await page.waitForFunction(()=>{return document.readyState==='complete'})

    await page.locator("#twotabsearchtextbox").fill("Hp Lap")

    await page.pause(3000)

    await page.waitForFunction(()=>{let el=document.querySelectorAll('.s-suggestion-container')
        return el.length>2
    })

    let all= await page.locator("#sac-suggestion-row-1").allTextContents()

    console.log(all);
    

})