const { $, $$ } = require('@wdio/globals')
const commonHelper = require('../../helpers/common.helper');

class KrPage {



    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get btnPlusNewOkr () {
        return $('#v-step-0');
    }

    get inputNameObj () {
        return $('textarea[data-testid="name-field"][placeholder="Enter objective name"]');
    }

    get btnCreateObj() {
        return $('button[data-testid="create-button"]');
    }

    get fieldObjectiveName () {
        return $('.obn-ObjectiveName');
    }

    get btnCollapseSettingMenu () {
        return $('.am-Wrapper_Menu button');
    }

    get btnHomeMenu () {
        return $('[data-target-id="icon-menu-home"]');
    }

    async chooseSelectionOptionNewOkrButton(buttonName) {
        return await commonHelper.chooseElementByText(this.chooseSelectionOptionNewOkrButton(), buttonName);
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------


    async clickPlusNewOkrButton() {
        await commonHelper.waitUntilElementVisible(this.btnPlusNewOkr, 'The "Plus New Okr" button is not visible')
        await this.btnPlusNewOkr.click();
    }

    async clickSelectionOkrOptionButton(buttonName) {
        await commonHelper.waitUntilElementVisible(this.chooseSelectionOptionNewOkrButton(buttonName), `The "Selection ${buttonName}" button is not visible`);
        await this.chooseSelectionOptionNewOkrButton(buttonName).click();
    }

    async switchToObjPage(){
        await commonHelper.switchTo(1);
    }

    async fillNameObjInput (nameObj){
        await commonHelper.sendKeys(this.inputNameObj, nameObj);
    }

    async clickCreateObjButton() {
        await commonHelper.waitUntilElementVisible(this.btnCreateObj, 'The "Create Obj" button is not visible');
        await this.btnCreateObj.click();
    }

}

module.exports = new KrPage;