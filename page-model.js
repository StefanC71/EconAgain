import {Selector} from 'testcafe';

class Page {
    constructor () {
        //job page sign in /create account buttons
        this.signInButton = Selector('#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.jobseekers__item.jobseekers__item--sign-in > a');
        this.createAccountButton = Selector('#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.togglable-nav__item--last.jobseekers__item.jobseekers__item--create-account > a');

        //job page top nav
        this.topNavHome = Selector('#primary-nav > div > ul > li.togglable-nav__item.primary-nav__item.primary-nav__item--first.primary-nav__item--home.primary-nav__item--active > a');
        this.topNavFindJob = Selector('#primary-nav > div > ul > li.togglable-nav__item.primary-nav__item.primary-nav__item--find-a-job > a');
        this.topNavJobAlerts = Selector('#primary-nav > div > ul > li.togglable-nav__item.primary-nav__item.primary-nav__item--jbe > a');
        this.topNavSearchRecruiters = Selector('#primary-nav > div > ul > li.togglable-nav__item.primary-nav__item.primary-nav__item--recruiters > a');
        this.topNavJobsBlog = Selector('#primary-nav > div > ul > li.togglable-nav__item.primary-nav__item.primary-nav__item--careers-advice.togglable-nav__item--last.primary-nav__item--last > a');
        
        //job page job search fields
        this.jobType = Selector('#keywords');
        this.jobLocation = Selector('#location');
        this.search = Selector('#main > div.band.band--primary.band--primary--second.cf > div > section > div > div > form > fieldset > div.grid-item.two-twelfths.lap-one-quarter.portable-one-whole.palm-one-whole > div > input');
        
        //jobsector page
        this.viewDetailsButtonContainer = Selector('.lister__footer.cf > p > a');

        //individual job listing page
        this.sectorNameContainer = Selector('.job-detail-description__category-Sector > dd > a');
        this.applyButton = Selector('#main > div > div > div.grid > div.grid-item.four-fifths.lap-one-whole.palm-one-whole > div > div.grid-item.seven-twelfths.palm-one-whole > div:nth-child(1) > ul > li.job-actions__action.job-actions__action--applylink > a');
        this.goBackSearch= Selector('#main > div > div > div.job-pagination > ul > li.job-pagination__item.job-pagination__item--search > span > a > span');

        //Sign In / Create Account Page
        this.signInHeader = Selector('#main > div > div > div.grid-item.five-sixths.lap-one-whole.palm-one-whole > div > div:nth-child(1) > h1');
        this.createAccountHeader = Selector('#create-account');
        this.toManageYourJobSearch = Selector('#main > div > div > div.grid-item.five-sixths.lap-one-whole.palm-one-whole > div.card.block > p > strong')
    }

}

export default new Page();