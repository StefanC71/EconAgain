//tests that performing a job search for particular jobs gives relevant listings

import { t } from 'testcafe';
import page from '../page-model';
import {Selector} from 'testcafe';

//reads the jobSearch dataset fields
const dataset = require ('../jobSearchData.json');

fixture `input job searches and ensure relevant results appear`
    .meta({type: "functional"})
    .page `https://jobs.economist.com/`

    //loops through the jobSearch dataset and performs the following test for each row/sector
    dataset.forEach(data => {
    
     //tests clicking a sector and the correct jobs appear for that sector
     test(`Job Search - '${data.jobTypeInput} ${data.locationInput}'`, async t => {

        //inputs a job type
        await t.typeText(page.jobType, data.jobTypeInput);

        //inputs an area/country
        await t.typeText(page.jobLocation, data.locationInput);

        //clicks the search button
        await t.click(page.search);

        //searches for and counts total View Details Buttons on the job listing page using container .lister__footer.cf > p >
        var viewDetailsElements = Selector(page.viewDetailsButtonContainer);
        var count = await viewDetailsElements.count;

        //iterates through each of the view details buttons using the nth method
        for (var i = 0; i < count; i++){

          //clicks the nth view details button on the page
          await t.click(viewDetailsElements.nth(i));

          /*
          Checks to see if any text on the body of the page matches the job title and the location we input.
          I did it this way because sometimes the title header or the profession does not include it
          but the word can appear in the various paragraphs of the job description.

          i.e i manually searched for advisor, one job simply stated that :
          
          Saxton Bampfylde Ltd is acting as an employment agency advisor 
          to the Marine Stewardship Council on this appointment

          Searching the body worked better than nested ifs looking for the job header, profession
          and any number of paragraphs within the job description.

          Needs more adding to this to stop it dropping a test if one job doesnt have the correct details
          and to report out which jobss failed the test
          */

          await t.expect(Selector('html').withText(data.jobTypeInput).exists).ok();

          await t.expect(Selector('html').withText(data.locationInput).exists).ok();

          //clicks the <search button to go back to the job listings page ready for the next iteration
          await t.click(page.goBackSearch);

        }
          
      });   
  });     
