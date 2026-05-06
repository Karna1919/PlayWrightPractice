import {test} from "@playwright/test"

test("hardcodedwaits",async ({page})=>{

    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=8971301311062495599&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062072&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1")
    await page.locator("//input[@id='twotabsearchtextbox']").click()

    await page.waitForTimeout(2000)
    await page.locator("//input[@id='twotabsearchtextbox']").fill("shirt")
    await page.waitForTimeout(4000)
     let items=await page.locator('//div[@role="row"]').allTextContents()
   
    await page.waitForTimeout(2000)
     await page.locator("//input[@id='twotabsearchtextbox']").fill(items[2])

     await page.locator("#nav-search-submit-button").click()
    await page.waitForTimeout(5000)

   
    
})