import {test} from "@playwright/test"

test("drop down", async ({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
/**Single selector */
    // await page.locator("#select3").selectOption({value:'India'})
    //await page.locator("#select3").selectOption({index:6})
   // await page.locator("#select3").selectOption("India")
    await page.waitForTimeout(2000)

    /**Multi selectors */

    // await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    // await page.waitForTimeout(3000)

    // await page.locator("#select-multiple-native").selectOption([{value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},{value:"Mens Casual Premium Slim Fit T-Shirts "},{value:"Mens Cotton Jacket"}])

    // await page.locator("//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']").click()

    // await page.waitForTimeout(3000)
/**Custom drop down */

// await page.goto("https://www.amazon.in/s?k=smart+watch+for+men&i=computers&crid=24XKLTRRMRHHE&sprefix=men%2Ccomputers%2C447&ref=nb_sb_ss_mvt-t11-ranker_1_3")


// await page.locator("")


await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=3402027491578995680&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062072&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1")

await page.locator("#twotabsearchtextbox").fill("Shoes")
await page.waitForSelector('(//div[@class="s-suggestion-container"])[1]')
  await page.waitForTimeout(3000)

  await page.keyboard.press("ArrowDown")
  await page.keyboard.press("ArrowDown")

    await page.waitForTimeout(3000)
await page.keyboard.press("Enter")

    await page.waitForTimeout(3000)

// let result= await page.locator('//div[@class="s-suggestion-container"]').all()

// console.log(result);

// for(let res of result){

//     let text= await res.textContent()
//     if (text.includes("for men")) {

//         await res.click()
//         break;
//     }

//     await page.waitForTimeout(3000)
// }













})