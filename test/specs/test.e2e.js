const params = require('../config/test.json');
const {expect, browser } = require('@wdio/globals')
const Precondition = require('../pageobjects/precondition.po.js');
const Postcondition = require('../pageobjects/postcondition.js');
const OkrBoardPage = require('../pageobjects/okrBoard/okrBoardPage.js');
const CreateNewWorkspacePage = require('../pageobjects/okrBoard/createNewWorkspacePage.js');
const GroupPage = require('../pageobjects/okrBoard/groupPage.js');
const AddUserPage = require('../pageobjects/okrBoard/addUsersPage.js');
const WorkspacesPage = require('../pageobjects/okrBoard/workspacesPage.js');
const ObjPage = require('../pageobjects/okrBoard/objPage.js');
const KrPage = require('../pageobjects/okrBoard/krPage.js');
const assert = require("assert");
const firstNameUser = params.users.owner.firstName;
const lastNameUser = params.users.owner.lastName;

describe('C104 Smoke for JIRA', () => {

    let workspaceName = 'TestWorkspaceKasner';
    let workspaceKey = 'TST';
    let groupName = "testGroup";
    let selectCreateOkr = "Group";
    let objNewName = 'testObject';

    beforeAll(async () => {
        await Precondition.signInToAtlassian();
        await Precondition.goToOKRBoard();
    });

    afterAll(async () => {
        // await Postcondition.deleteWorkspaceApi();
    });

    it('Create Workspace', async () => {

        await OkrBoardPage.switchToWorkspaceFrame();
        await OkrBoardPage.clickCollapseSettingMenuButton()
        await OkrBoardPage.clickHomeMenuButton();
        await OkrBoardPage.clickMyWorkspaceButton();
        await OkrBoardPage.clickCreateNewWorkspaceButton();
        await CreateNewWorkspacePage.fillInputWorkspaceName(workspaceName);
        await CreateNewWorkspacePage.fillInputWorkspaceKey(workspaceKey);
        await CreateNewWorkspacePage.clickConfirmCreateNewWorkspaceButton();
        await GroupPage.clickCloseGroupPageButton();
        await expect(WorkspacesPage.fieldWorkspaceName).toHaveText(workspaceName);

    });

    it('Create Group', async () => {

        await WorkspacesPage.clickWorkspaceNameButton(workspaceName);
        await GroupPage.clickCreateNewGroupButton();
        await GroupPage.fillInputGroupName(groupName);
        await GroupPage.clickConfirmCreateNewGroupButton();
        await expect(GroupPage.fieldGroupName).toHaveText(groupName);

    });

    it('Add User', async () => {

        await GroupPage.clickAddUserButton();
        await AddUserPage.clickSelectAddUser();
        await AddUserPage.clickFirstUserDropdown();
        await AddUserPage.clickBulkAddButton();
        await AddUserPage.clickPlusAddUserButton();
        await AddUserPage.clickAddUserButton();
        await GroupPage.clickUsersRowButton();
        await expect(GroupPage.fieldAddedUserName).toHaveText(`${firstNameUser} ${lastNameUser}`);
        await GroupPage.clickCloseGroupPageButton();

    });

    xit('Create Objective in new WS', async () => {

        await WorkspacesPage.moveToWorkspaceNameButton();
        await WorkspacesPage.clickWorkspaceObjButton();
        await ObjPage.switchToObjPage();
        await ObjPage.clickPlusNewOkrButton();
        await ObjPage.clickSelectionOkrOptionButton(selectCreateOkr);
        await ObjPage.fillNameObjInput(objNewName);
        await ObjPage.clickCreateObjButton();
        await expect(ObjPage.fieldObjectiveName).toHaveText(objNewName);

    });

    xit('Create KR in new Objective', async () => {

    });


})

