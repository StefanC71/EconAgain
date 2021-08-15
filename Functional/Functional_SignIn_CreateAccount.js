//tests the sign in and create account buttons

import { t } from 'testcafe';
import page from '../page-model';
import {Selector} from 'testcafe';

fixture `Functional Test - Sign In and Create Account Links`
    .meta({type: "functional"})
    .page `https://jobs.economist.com/`
    
     //tests that the sign in button works  
     test(`Sign In Button`, async t => {
     await t

        //clicks the sign in button
        .click(page.signInButton)

        //expects to find the Sign In Text on the Sign In page
        .expect(Selector(page.signInHeader).withText('Sign in').exists).ok()
        
        //Although the sign In / Create account buttons go to a very similar page with both options present,
        //the text block that appears above the Sign In header only appears when clicking create account.
        
        //This ensures that the text block 'To manage your job search please sign in or create an account below.'
        //does NOT appear
        .expect(Selector(page.toManageYourJobSearch).withText('To manage your job search please sign in or create an account below.').visible).notOk()

         });     

        //tests that the create account button works  
         test(`Create Account Button`, async t => {
         await t
   
           //clicks the create account button
           .click(page.createAccountButton)
   
           //expects to find the Sign In Text on the Sign In page
           .expect(Selector(page.createAccountHeader).withText('Create an account').exists).ok()
           
           //Although the sign In / Create account buttons go to a very similar page with both options present,
           //the text block that appears above the Sign In header only appears when clicking create account.
           
           //This ensures that the text block 'To manage your job search please sign in or create an account below.'
           //DOES appear

           .expect(Selector(page.toManageYourJobSearch).withText('To manage your job search please sign in or create an account below.').exists).ok()
           
            });     
      