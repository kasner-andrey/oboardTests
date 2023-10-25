const { $ } = require('@wdio/globals')
const commonHelper = require('../../helpers/common.helper');
class CreateNewWorkspacePage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get inputWorkspaceName () {
        return $('[data-testid="main-modal"] input[class="o-input-field"]');
    }
    get inputWorkspaceKey () {
        return $('[data-testid="main-modal"] input.wm-Key');
    }

    get btnConfirmCreateNewWorkspace () {
        return $('[data-testid="main-modal"] button.ab-Button-primary-next');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async clickConfirmCreateNewWorkspaceButton() {
        await commonHelper.waitUntilElementClickable(this.btnConfirmCreateNewWorkspace, 'The "Confirm Create New Workspace" button is not clickable')
        await this.btnConfirmCreateNewWorkspace.click();
    }

    async fillInputWorkspaceName(workspaceName) {
        await commonHelper.sendKeys(this.inputWorkspaceName, workspaceName);
    };

    async fillInputWorkspaceKey(workspaceKey) {
        await commonHelper.sendKeys(this.inputWorkspaceKey, workspaceKey);
    };

}

module.exports = new CreateNewWorkspacePage;