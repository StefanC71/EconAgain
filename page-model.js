import {Selector} from 'testcafe';

class Page {
    constructor () {
        //job page top nav
        this.topNavHome = Selector('#primary-nav > div > ul > li.togglable-nav__item.primary-nav__item.primary-nav__item--first.primary-nav__item--home.primary-nav__item--active > a');
        this.topNavFindJob = Selector('#primary-nav > div > ul > li.togglable-nav__item.primary-nav__item.primary-nav__item--find-a-job > a');
        this.topNavJobAlerts = Selector('#primary-nav > div > ul > li.togglable-nav__item.primary-nav__item.primary-nav__item--jbe > a');
        this.topNavSearchRecruiters = Selector('#primary-nav > div > ul > li.togglable-nav__item.primary-nav__item.primary-nav__item--recruiters > a');
        this.topNavJobsBlog = Selector('#primary-nav > div > ul > li.togglable-nav__item.primary-nav__item.primary-nav__item--careers-advice.togglable-nav__item--last.primary-nav__item--last > a')
        
    }

}

export default new Page();