import {test} from  "@playwright/test"

test("registration",async ({page})=>{

    let email ;
    let password;
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("//input[@id='name']").click()
    let nameclick=await page.locator("//input[@id='name']").isEnabled()
    if (nameclick) {
        await page.locator("//input[@id='name']").fill("Dinga Kumar")
  await page.waitForTimeout(3000)
  
    } else {
        await page.screenshot({path:"RegistrationNameScreenshot.png"})
    }
  //  await page.pause(3000)

    await page.locator("//input[@id='email']").click()
    let isemailclick=await page.locator("//input[@id='email']").isEditable()
    if (isemailclick) {

        await page.locator("//input[@id='email']").fill("dinga@gmail.com")
        email=await page.locator("//input[@id='email']").inputValue()
          await page.waitForTimeout(3000)
    } else {
        await page.screenshot({path:"RegistrationEmailScreenShot.png"})

    }
    //await page.pause(3000)

    await page.locator("//input[@id='password']").click()
    let ispasswordclick=await page.locator("//input[@id='password']").isEnabled()
    if (ispasswordclick) {
        await page.locator("//input[@id='password']").fill("dinga1234")
        await page.getByText(/Show Password|Hide Password/).click()
        await page.waitForTimeout(3000)
     password=   await page.locator("//input[@id='password']").inputValue()
    } else {
        await page.screenshot({path:"RegistrationPasswordScreenShot.png"})
    }
    // await page.pause(3000)


    await page.getByRole("button",{name:'Register'}).click()


    
       // await page.goto("https://demoapps.qspiders.com/ui/login")

        await page.locator("//input[@id='email']").click()
      let islogemail=  await page.getByLabel("Email Id",{exact:true}).isEnabled()

      if (islogemail) {

        await page.getByPlaceholder("Enter your email").fill(email)
        
      } else {

        await page.screenshot({path:"LoginEmailScreenShot.png"})
        
      }

      await page.getByLabel("Password").click()
      let islogpassword=await page.getByPlaceholder("Password").isEnabled()
      if(islogpassword){
      await page.getByPlaceholder("password").fill(password)
      }
      else{

      }
await page.getByRole("button",{name:'Login'}).click()
 await page.pause(2000)
})