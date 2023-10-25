const { $ } = require('@wdio/globals')
const commonHelper = require('../../helpers/common.helper');
let myWorkspaceFrameId = 0;
class OkrBoardPage {



    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get btnMyWorkspace () {
        return $('.amws-WorkspaceSelect_Button');
    }

    get btnCreateNewWorkspace () {
        return $('.asi-AppSelectOptionsItem_Content-single [data-target-id="icon-plus-next"]');
    }

    get myWorkspaceFrame () {
        return $('#ak-main-content iframe');
    }

    get btnCollapseSettingMenu () {
        return $('.am-Wrapper_Menu button');
    }

    get btnHomeMenu () {
        return $('[data-target-id="icon-menu-home"]');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async clickMyWorkspaceButton() {
        await commonHelper.waitUntilElementVisible(this.btnMyWorkspace, 'The "My Workspace" button is not visible');
        await this.btnMyWorkspace.click();
    }

    async switchToWorkspaceFrame(){
        await commonHelper.waitUntilElementVisible(this.myWorkspaceFrame, 'The "myWorkspaceFrame" frame is not visible' );
        await commonHelper.switchToFrame(myWorkspaceFrameId);
    }

    async clickCreateNewWorkspaceButton() {
        await commonHelper.waitUntilElementVisible(this.btnCreateNewWorkspace, 'The "Create New Workspace" button is not visible')
        await this.btnCreateNewWorkspace.click();
    }

    async clickCollapseSettingMenuButton() {
        await browser.pause(500);
        await commonHelper.waitUntilElementVisible(this.btnCollapseSettingMenu, 'The "Collapse Setting Menu" button is not visible');
        await this.btnCollapseSettingMenu.click();
    }

    async clickHomeMenuButton() {
        await commonHelper.waitUntilElementVisible(this.btnHomeMenu, 'The "Home Menu" button is not visible');
        await this.btnHomeMenu.click();
    }

}

module.exports = new OkrBoardPage;