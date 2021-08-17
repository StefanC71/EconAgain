//required to enable blink-diff to work
import { takeSnapshot } from 'testcafe-blink-diff';
import page from '../page-model';

fixture `Visual test for job page rendering`
    .meta({type: "visual"})
    .page `https://jobs.economist.com/`
      
            //first test screenshots only what the user sees whrn the page loads above the fold
            test(`Visual Comparison for above the fold job page`, async t => {
            await t 
                    //takes the screenshot
                    await takeSnapshot(t, {
                    timeout: 2000

                    });
                });

                //second test uses fullPage:true to capture the entire webpage
                test(`Visual comparison for full job page`, async t => {
                await t
                    
                    //takes the screenshot
                    await takeSnapshot(t, {
                    fullPage: true,
                    timeout: 2000
                    });
                });
