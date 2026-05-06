import {test} from "@playwright/test"
import excel from 'exceljs'
test("Registration from xcel",async ({page,browser})=>{
    let book = new excel.Workbook()

    await book.xlsx.readFile("C:/Users/DELL/Desktop/Playwright/testdata/exceldata.xlsx")
let udata =[]
    let sheet = book.getWorksheet("Test")
console.log(sheet.actualRowCount);

          for(let row =1;row<=sheet.actualRowCount;row++){
            let r = sheet.getRow(row).toString()
             let url=   r.getCell(1).toString()
             let uname = r.getCell(2).toString()
             let uemail = r.getCell(3).toString()
             let upass = r.getCell(4).toString()
          udata.push({url:url,uname:uname,uemail:uemail,upass:upass})
          }

          for(let userdata of udata){
            console.log(userdata);
             page.waitForEvent("load")
            await page.goto(userdata.url)
            await page.locator("//a[@class='block w-full h-full']").click()
            await page.getByPlaceholder("Enter your name").fill(userdata.uname)
            await page.waitForTimeout(3000)
            await page.getByPlaceholder("Enter Your Email").fill(userdata.uemail)
            await page.waitForTimeout(3000)
            await page.getByPlaceholder("Enter your password").fill(userdata.upass)
            await page.waitForTimeout(3000)
           // await page.close()
          }
         // await page.waitForTimeout(3000)
})

test.only("Login",async ({page})=>{
    let book = new excel.Workbook()


  await  book.xlsx.readFile("C:/Users/DELL/Desktop/Playwright/testdata/exceldata.xlsx")
   let sheet=  await book.getWorksheet("LoginTest")
 let result=  sheet.getRow(1).getCell(1).toString()
 console.log(result);
 
   console.log(sheet.actualRowCount);
    let longindata=[]
   for(let row=1;row<=sheet.actualRowCount;row++)
   {
     let r = sheet.getRow(row)
     let lurl=r.getCell(1).toString()
     let lemail=r.getCell(2).toString()
     let lpassword=r.getCell(3).toString()
longindata.push({lurl:lurl,lemail:lemail,lpassword:lpassword})
   }

 for (let log of longindata) {

    console.log(log.lemail);
let p=  await Promise.all([

    page.waitForEvent("load"),
    page.goto(log.lurl),
    page.getByPlaceholder("Enter your email").fill(log.lemail)

]) 
    await page.waitForTimeout(3000)
    
    
 }
   
})