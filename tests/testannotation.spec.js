import {test} from "@playwright/test"
import { log } from "node:console"

test.skip("test annotation test1", async ()=>{

    console.log("It is using skip annotation");
    
     //test.skip(2===2,"Not A Zero")
})
test("test annotation test2", async ()=>{

    console.log("It is using only annotation");
})

test("test annotation test3", async ()=>{

    test.fail(2===2,"its fail")
})