const { $ } = require('@wdio/globals')
const commonHelper = require('../../helpers/common.helper');
class MicrosoftPo {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get inputEmail () {
        return $('input[type="email"]');
    }

    get btnEmailNext () {
        return $('input[type="submit"]');
    }

    get inputPassword () {
        return $('input[type="password"]');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async fillInputPasswordField(password) {
        await commonHelper.sendKeys(this.inputPassword, password);
    };

    async clickSubmitButton() {
        await commonHelper.waitUntilElementVisible(this.btnEmailNext, 'The "Email Next" button is not visible');
        await this.btnEmailNext.click;
    };

    async fillInputEmailField(email) {
        await commonHelper.sendKeys(this.inputEmail, email);
    }
}

module.exports = new MicrosoftPo;