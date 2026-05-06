import {test} from "@playwright/test"
/*It statement level time seeting for wait statements*/
// test("fill",async ({page})=>{

//     await page.goto("https://demoapps.qspiders.com/ui/login",{timeout:60000})

//     await page.getByLabel("Email",{exact:true}).fill("email@gmail.com",{timeout:5000})

//     await page.getByRole("button",{name:'Login'}).click({timeout:5000})



// })

/* Block level time setting*/

// test("fill",async({page})=>{

//     page.setDefaultTimeout(10000)

//     await page.goto("https://demoapps.qspiders.com/ui/login")
//     await page.getByLabel("Email",{exact:true}).fill("email@gmail.com")
// })

/*Global time set for wait statements*/

// test.use({actionTimeout:2000})
// test("fill",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/login?scenario=2")

//     await page.getByLabel("Email",{exact:true}).fill("email@gmail.com")
// })

/*Configuring in playwright.config.js
 in that we need to add  
 actionTimeout:6000*/

test("fill",async ({page})=>{

   await page.goto("https://demoapps.qspiders.com/ui/login?scenario=2")
   await page.getByLabel("Email",{exact:true}).fill("email@gmail.com")
})

