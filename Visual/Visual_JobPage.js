import { takeSnapshot } from 'testcafe-blink-diff';
import page from '../page-model';

fixture `Visual test for job page rendering`
    .meta({type: "visual"})
    .page `https://jobs.economist.com/`
      
            test(`Visual Comparison for above the fold job page`, async t => {
            await t 

                    await takeSnapshot(t, {
                    timeout: 2000

                    });
                });

                test(`Visual comparison for full job page`, async t => {
                await t
                    
                    await takeSnapshot(t, {
                    fullPage: true,
                    timeout: 2000
                    });
                });
