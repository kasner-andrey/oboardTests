const { $ } = require('@wdio/globals')
const commonHelper = require('../../helpers/common.helper');
const Page = require('../page');
class SignInPo extends Page{

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get microsoftAuthButton () {
        return $('#microsoft-auth-button');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async clickMicrosoftAuthButton() {
        await commonHelper.waitUntilElementVisible(this.microsoftAuthButton, 'The "microsoft-auth-button" button is not visible');
        await this.microsoftAuthButton.click();
    };

    open() {
        return super.open("/");
    }
}

module.exports = new SignInPo;