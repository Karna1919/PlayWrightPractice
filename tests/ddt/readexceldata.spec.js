import {test} from "@playwright/test"
import excel from 'exceljs'
import path from "node:path"

test("read from excel", async ({page})=>{
       
    /**Creating the work book because playwright can not read the excel file directly in to the script
     * 
     * here the excel which should be readden will be strored as a Workbook
     * 
     * for that we need to create a Object of the Workbook 
     * before that we need to import the excel package by using
     * import excel {Workbook} from 'exceljs'
     * and store the object in one variable
     * After that we need show the path of excel by providing extension and the path to the readFile 
     * 
     * Example : -
     *     let book= new Workbook()
     * 
     * in book it will create place where we can access the excel file
     * 
     *      after that we need to store the excel by providingthe path
     * 
     *         book.xlsx.readFile(path.join("path")) it will store the paticular file 
     * 
     *        from that book we neet to select the sheet by using getWorksheet() it will take sheet name as argument
     * 
     * let sheet =book.getWorksheet("sheet name")
     * 
     * from the sheet select data by selecting row and column
     * 
     * for that we need to make use getCell() it will select the column in excel sheet and it will take cell position as an argument
     * 
     * use getRow() it select row of the sheet it will take row positionas an argument
     *     
     *     sheet.getRow(1).getCell(1) this both will return the cell and row information
     * 
     * to get the requried value from that we need to make use value or toString
     *     let result= sheet.getRow(1).getCell(1).value
      * 
      */
     
   
       let book=  new excel.Workbook()
   await   book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
   let sheet = await book.getWorksheet("Demo")
   let result= await sheet.getRow(1).getCell(1).toString()
   console.log(result);
   let sheet2= book.getWorksheet("Test")
   console.log(sheet2.getRow(1).getCell(1).value);
})

test.only("read multiple data", async ({page}) => {


    let book1= new  excel.Workbook()

   await book1.xlsx.readFile("C:/Users/DELL/Desktop/Playwright/testdata/exceldata.xlsx")
    let sheet=   book1.getWorksheet("Test")

    for(let row=1;row<=sheet.actualRowCount;row++){

        for(let column=1;column<=sheet.actualColumnCount;column++){

            let data = sheet.getRow(row).getCell(column).value
            console.log(data);
            

        }
    }
    
})