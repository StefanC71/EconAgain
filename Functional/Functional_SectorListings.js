//tests the following
//Clicking each sector on the jobs.economist.com page works
//That for every sector, only jobs for that sector appear on the job listings page
//That each individual job has an apply button

import { t } from 'testcafe';
import page from '../page-model';
import {Selector} from 'testcafe';

//reads the jobSectors dataset fields
const dataset = require ('../jobSectorsData.json');

fixture `Click on a sector and display jobs`
    .meta({type: "functional"})
    .page `https://jobs.economist.com/`

    //loops through the jobSectors dataset and performs the following test for each row/sector
    dataset.forEach(data => {
    
     //tests clicking a sector and the correct jobs appear for that sector
     test(`Sector Job Listings - '${data.sectorNameText}'`, async t => {

        //clicks the sector button for the next sector in the dataset, by looking for the sector name text
        await t.click(Selector('a').withText(data.sectorNameText));     
        
        //searches for and counts total View Details Buttons on the job sector page using container .lister__footer.cf > p >
        var viewDetailsElements = Selector(page.viewDetailsButtonContainer);
        var count = await viewDetailsElements.count;

        //iterates through each of the view details buttons using the nth method
        for (var i = 0; i < count; i++){

          //clicks the nth view details button on the page
          await t.click(viewDetailsElements.nth(i));

          //looks for the container in the left hand side panel with the sector name and expects to find the correct sector name
          await t.expect(Selector(page.sectorNameContainer).withText(data.sectorNameText).exists).ok();
          
          //looks for the Apply button to ensure it exists
          await t.expect(Selector(page.applyButton).withText('Apply').exists).ok();

          //clicks the <search button to go back to the job listings page ready for the next iteration
          await t.click(page.goBackSearch);
        }
          
      });   
  });     
