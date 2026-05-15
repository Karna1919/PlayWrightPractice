import {test} from "@playwright/test"

test("demo test",async ({browser})=>{

        let context= await browser.newContext()
        console.log("Okkkk");
        

})