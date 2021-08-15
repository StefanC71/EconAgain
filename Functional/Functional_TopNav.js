//tests all 5 links in the top nav

import { t } from 'testcafe';
import page from '../page-model';
import {Selector} from 'testcafe';

//reads the topnav dataset fields
const dataset = require ('../navBarData.json');

fixture `Functional Test - Nav Bar Links`
    .meta({type: "functional"})
    .page `https://jobs.economist.com/`
    //test
    //loops through the topnav dataset and performs the following test for each row
    dataset.forEach(data => {
        
     //uses linkname from topnav dataset to identify the topnav tests for the report   
     test(`Top Nav Test - '${data.linkName}'`, async t => {
     await t

        //clicks the relevant topnav button using linkSelector from the topnav dataset
        .click(data.linkSelector)

        //expects to find the relevant selector on the new page with newPageSelector
        //expects to find the relevant text within that selector
        //this confirms that after clicking the topnav button that we land on the correct page
        .expect(Selector(data.newPageSelector).withText(data.textToFind).exists).ok() 
        
         });     
     });
