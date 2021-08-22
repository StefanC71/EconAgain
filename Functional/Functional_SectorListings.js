//tests the following
//Clicking each sector on the jobs.economist.com page works
//That for every sector, only jobs for that sector appear on the job listings page
//That each individual job has an apply button

import { t } from 'testcafe';
import page from '../page-model';
import {Selector} from 'testcafe';

//reads the jobSectors dataset fields
const dataset = require ('../jobSectorsData.json');

/*In test i discovered the <search button to go back a page from a job listing
sometime appears in 2 dfferent places, or does not appear at all.

Initially I clicked this button, but after finding it may not even exist, i decided to 
use testcafe inbuilt functionality to go back a page
This import and const sets up the functionality
*/
import { ClientFunction } from 'testcafe';
const getLocation = ClientFunction(() => window.location.href);

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
          //used the container here as the apply button also had 2 possible selectors
          await t.expect(Selector(page.applyButton).withText('Apply').exists).ok();
        
          //uses the inbuilt testcafe functionality to go back a page ready for the next iteration
          const goBack = ClientFunction(() => window.history.back());
          await goBack();
        }
          
      });   
  });     
