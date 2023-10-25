const { $, $$ } = require('@wdio/globals')
const commonHelper = require('../../helpers/common.helper');
class AddUsersPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get selectAddUsers () {
        return $('[data-testid="non-bulk-mode-users-field-select"]');
    }

    get btnSubmitAddUser () {
        return $('button[data-testid="add-users-to-group-modal-submit-button"]');
    }

    get chooseFirstUser () {
        return $('.asi-AppSelectOptionsItem-default-next');
    }

    get btnPlusAddUser () {
        return $('[data-target-id="icon-plus-small"]');
    }

    get btnBulkAdd() {
        return $('[data-target-id="icon-bulk-add"]');
    }

    get btnAddUser () {
        return $('[data-testid="add-users-to-group-modal-submit-button"]');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async clickSelectAddUser() {
        await commonHelper.waitUntilElementVisible(this.selectAddUsers, 'The "Select Add User" button is not visible');
        await this.selectAddUsers.click();
    };

    async clickFirstUserDropdown() {
        await commonHelper.waitUntilElementVisible(this.chooseFirstUser, 'The "First user " dropdown is not visible');
        await this.chooseFirstUser.click();
    };

    async clickConfirmCreateNewGroupButton() {
        await commonHelper.waitUntilElementVisible(this.btnConfirmCreateNewGroup, 'The "Confirm Create new Group" button is not visible');
        await this.btnConfirmCreateNewGroup.click();
    }

    async clickPlusAddUserButton() {
        await commonHelper.waitUntilElementVisible(this.btnPlusAddUser, 'The "Plus Add User" button is not visible');
        await this.btnPlusAddUser.click();
    }

    async clickBulkAddButton() {
        await commonHelper.waitUntilElementVisible(this.btnBulkAdd, 'The "Bulk Add" button is not visible');
        await this.btnBulkAdd.click();
    }

    async clickAddUserButton() {
        await commonHelper.waitUntilElementVisible(this.btnAddUser, 'The "Add User" button is not visible');
        await this.btnAddUser.click();
    }

}

module.exports = new AddUsersPage;