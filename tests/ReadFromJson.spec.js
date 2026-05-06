import {test} from "@playwright/test"

import fs from "fs"

let userdata=   fs.readFileSync("C:/Users/DELL/Desktop/Playwright/testdata/JsonData.json")
let data =JSON.parse(userdata)
test("read from json", async ({page})=>{

    await page.goto(data.url)
    await page.locator("//input[@name='user_name']").fill(data.username)
    await page.locator("//input[@name='user_password']").fill(data.password)

    await page.locator("#submitButton").click()
    console.log(await page.title());
    

})

test.only("multiple data",async ({page})=>{

    for(let d of data){
        await page.goto(d.url)
        await page.locator("//input[@name='user_name']").fill(d.username)
        await page.locator("//input[@name='user_password']").fill(d.password)

        await page.locator("#submitButton").click()
console.log(await page.title());

        if(await page.title() === "Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM"){
        await page.locator("//img[@src='themes/softed/images/user.PNG']").hover()
        await page.getByRole("link", { name: "Sign Out" }).click()
    }
    }
})