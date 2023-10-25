const { $, $$ } = require('@wdio/globals')
const commonHelper = require('../../helpers/common.helper');

class WorkspacesPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------


    get fieldWorkspaceName () {
        return $(`/html/body/div/div/div/main/div[2]/div[2]/div/div/div[2]/div[2]/div/div[1]/div/span`);
    }

    get workspaceID () {
        return $('.amnl-List_Item-home .amni-Item-default');
    }

    get btnCreateObj() {
        return $(`/html/body/div/div/div/main/div[2]/div[2]/div/div/div[2]/div[2]/div/div[1]/div/button`);
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

    workspaceNameButton() {
        return this.fieldWorkspaceName;
    }

    async clickWorkspaceNameButton() {
        await commonHelper.waitUntilElementVisible(this.fieldWorkspaceName, 'The "Workspace Name" button is not visible')
        await this.fieldWorkspaceName.click();
    }

    async clickWorkspaceObjButton() {
        await commonHelper.waitUntilElementVisible(this.btnCreateObj, 'The "Workspace Obj" button is not visible');
        await this.btnCreateObj.click();
    }

    async moveToWorkspaceNameButton() {
        await commonHelper.waitUntilElementVisible(this.fieldWorkspaceName, 'The "Workspace Name" button is not visible');
        await this.fieldWorkspaceName.moveTo();
    }

}

module.exports = new WorkspacesPage;