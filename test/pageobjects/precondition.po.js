const params = require('../config/test.json');

const emailAdmin = params.users.owner.email;
const passwordAdmin = params.users.owner.password;

const signInPage = require('./signIn/signIn.po');
const microsoftPage = require('./signIn/microsoft.po');
const jiraYourWorkPage = require('./jiraBoard/yourWorkPo');
const jiraBoardPage = require('./jiraBoard/jiraBoardPage');

class Preconditions {
    async signInToAtlassian() {

        await signInPage.open();
        // await signInPage.clickMicrosoftAuthButton();
        //
        // await microsoftPage.fillInputEmailField(emailAdmin);
        // await microsoftPage.clickSubmitButton();
        //
        // await microsoftPage.fillInputPasswordField(passwordAdmin);
        // await microsoftPage.clickSubmitButton();

    };

    async goToOKRBoard() {
        await jiraYourWorkPage.openProject();
        await jiraBoardPage.clickOKRBoard();
    };
}

module.exports = new Preconditions;