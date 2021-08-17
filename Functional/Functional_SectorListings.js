//tests that clicking a sector on the jobs.economist.com page, only shows jobs for that sector

import { t } from 'testcafe';
import page from '../page-model';
import {Selector} from 'testcafe';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

fixture `Click on a sector and display jobs`
    .meta({type: "functional"})
    .page `https://jobs.economist.com/`
    
     //tests clicking a sector and the correct jobs appear 
     test(`Sector Job Listings`, async t => {
     

        //clicks the sector button for banking and finance
        await t.click('#main > div.band.band--primary.band--primary--third.cf > div > section > div > div > ul > li.facet-links__link.facet-links__link--banking-and-finance.lap-larger__item.column__item > a');

        //searches for and counts total View Details Buttons on the job sector page using container .lister__footer.cf > p >
        var viewDetailsElements = Selector('.lister__footer.cf > p > a');
        var count = await viewDetailsElements.count;

        //iterates through each of the view details buttons using the nth method
        for (var i = 0; i < count; i++){

          //clicks the nth view details button on the page
          await t.click(viewDetailsElements.nth(i));

          //looks for the container in the left hand side panel with the sector name and expects to find the correct sector name
          await t.expect(Selector('.job-detail-description__category-Sector > dd > a').withText('Banking and finance').exists).ok();
          
          //clicks the <search button to go back to the job listings page ready for the next iteration
          await t.click('#main > div > div > div.job-pagination > ul > li.job-pagination__item.job-pagination__item--search > span > a > span');
        }
          

  });     
