import {test}from '@playwright/test';

import mdata from '../testdata/MultipleData.json';

test('Multiple Data Testing',async ({page})=>{

    for(const data in mdata){

       for(const key of mdata[data]){

        console.log(key);
        
       }
    }

 })