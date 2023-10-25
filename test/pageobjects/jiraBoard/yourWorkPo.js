const { $ } = require('@wdio/globals')
const commonHelper = require('../../helpers/common.helper');
const Page = require('../page');
class YourWorkPo extends Page{

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get btnProject () {
        return $('[href="https://kasner.atlassian.net/browse/TES"]');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async clickProjectButton() {
        await commonHelper.waitUntilElementClickable(this.btnProject, 'The "Project" button is not visible');
        await this.btnProject.click();
    };

    openProject () {
        return super.open('/browse/TES');
    }

}

module.exports = new YourWorkPo;