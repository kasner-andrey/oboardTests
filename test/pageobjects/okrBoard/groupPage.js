const { $ } = require('@wdio/globals')
const commonHelper = require('../../helpers/common.helper');
let groupId;
class GroupPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get inputGroupName () {
        return $('input[data-testid="create-group-modal-input"]');
    }

    get btnCreateNewGroup () {
        return $('button[data-testid="empty-state-create-button"]');
    }

    get btnConfirmCreateNewGroup () {
        return $('button[data-testid="create-group-modal-submit-button"]');
    }

    get fieldGroupName() {
        return $('[data-testid="name-value"]');
    }

    get btnAddUser () {
        return $('button.wg-AddUserButton');
    }

    get fieldAddedUserName() {
        return $('[data-testid*="expandable-table-row-user-"] .wg-UserName_Link');
    }

    get btnCloseGroupPage() {
        return $('.uim-ClosePartWrapper button.uim-Close');
        // return $('button.uim-Close [data-target-id="icon-close-next"]');
    }
    get btnUsersRow () {
        return $(`[data-testid='expandable-table-row-group-${groupId}-users'] button`);
    }

    get groupId () {
        return $('[data-testid="groups-table-wrapper"] button').parentElement().getAttribute('data-testid')
            .then((attr) => {
                groupId = attr.split('-').pop();
            });
    }


    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async clickCreateNewGroupButton() {
        await commonHelper.waitUntilElementVisible(this.btnCreateNewGroup, 'The "Create new Group" button is not visible');
        await this.btnCreateNewGroup.click();
    };

    async fillInputGroupName(groupName) {
        await commonHelper.sendKeys(this.inputGroupName, groupName);
    };

    async clickConfirmCreateNewGroupButton() {
        await commonHelper.waitUntilElementVisible(this.btnConfirmCreateNewGroup, 'The "Confirm Create new Group" button is not visible');
        await this.btnConfirmCreateNewGroup.click();
    }

    async clickAddUserButton() {
        await commonHelper.waitUntilElementVisible(this.btnAddUser, 'The "Add User" button is not visible');
        await this.btnAddUser.click();
    }

    async clickUsersRowButton() {
        await this.groupId;
        await commonHelper.waitUntilElementVisible(this.btnUsersRow, 'The "User Row" button is not visible');
        await this.btnUsersRow.click();
    }

    async clickCloseGroupPageButton() {
        await browser.pause(1500)
        await commonHelper.waitUntilElementVisible(this.btnCloseGroupPage, 'The "Close Group page" button is not visible');
        await commonHelper.waitUntilElementClickable(this.btnCloseGroupPage, 'The "Close Group page" button is not clickable');
        await this.btnCloseGroupPage.click();
    }


}

module.exports = new GroupPage;