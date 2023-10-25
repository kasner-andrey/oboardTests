const axios = require('axios');
const signInPage = require("./signIn/signIn.po");
const jiraYourWorkPage = require("./jiraBoard/yourWorkPo");
const jiraBoardPage = require("./jiraBoard/jiraBoardPage");
const WorkspacePage = require('./okrBoard/workspacesPage.js');
const {expect} = require("@wdio/globals");

class Preconditions {
    async deleteWorkspaceApi(workspaceName) {
        console.log(await browser.getCookies())
        let id = (await WorkspacePage.workspaceID.getAttribute('href')).split('/');
        const request = {id : id[id.length-1]}
        let cookies = await browser.getCookies()
        const response = await axios.post('https://backend.okr-api.com/removeWorkspace', request);

        console.log(response);
        expect(response.status).toBe(200);

    };

}

module.exports = new Preconditions;