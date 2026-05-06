import {test} from "@playwright/test"
import path from "node:path"
import fs from "fs"
test("upload file",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//    // await page.mouse.wheel(0,1200)

//    await page.locator("//input[@id='singleFileInput']").scrollIntoViewIfNeeded()
//         await page.waitForTimeout(3000)
    /**Upload Single file which is existed in project*/
    // await page.locator("//input[@id='singleFileInput']").setInputFiles("C:/Users/DELL/Desktop/Playwright/tests/up/demo.txt")
    // await page.getByRole("button",{name:"Upload Single File"}).click()
/**---------A2---------- */
//     await page.locator("//input[@id='singleFileInput']").setInputFiles(path.join(__dirname,"../tests/up/demo.txt"))

    // await page.waitForTimeout(3000)


    /**Upload Multiple files which are existed in Project*/

    // await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["C:/Users/DELL/Desktop/Playwright/tests/up/demo.txt","C:/Users/DELL/Desktop/Playwright/tests/up/sample.txt"])
    // await page.waitForTimeout(3000)

    /**Upload single file which is out side the project */

//     await page.locator("//input[@id='singleFileInput']").setInputFiles("C:/Users/DELL/Desktop/STUDENT_Hibernate.txt")
// await page.locator("//input[@id='singleFileInput']").setInputFiles([])//It will remove already uploaded files
// await page.waitForTimeout(3000)
// await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["C:/Users/DELL/Desktop/STUDENT_Hibernate.txt","C:/Users/DELL/Desktop/SELECT.txt"])
// await page.waitForTimeout(3000)

/**Download a file */

await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")

await page.getByRole("textbox",{name:"Enter text here"}).fill("This is about Download a file")

await page.waitForTimeout(3000)
 let [downloaddata]= await Promise.all([
    page.waitForEvent("download"),
    await page.getByRole("button",{name:"Download"}).click()
])
//let downloadfolder="C:/Users/DELL/Desktop/Playwright/tests/downloadedfiles"
let downloadfolder="C:/Users/DELL/Desktop/In"
// let downloadwithfilename=downloaddata.suggestedFilename()

let downloadwithfilename="demo.txt"

//await downloaddata.saveAs(path.join(__dirname,"../tests/downloadedfiles",downloadwithfilename))
await downloaddata.saveAs(path.join(downloadfolder,downloadwithfilename))

await page.waitForTimeout(3000)

if (fs.existsSync(path.join(downloadfolder,downloadwithfilename))) {

    console.log("It is existed");
    
    
} else {

    console.log("Its not");
    
    
}

})