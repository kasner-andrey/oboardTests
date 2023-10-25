const { $ } = require('@wdio/globals')
const commonHelper = require('../../helpers/common.helper');

class JiraBoardPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get btnOKRBoard () {
        return $('[href="/projects/TES?selectedItem=com.atlassian.plugins.atlassian-connect-plugin:okrplugin_prod__board-project"]');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async clickOKRBoard() {
        await commonHelper.waitUntilElementClickable(this.btnOKRBoard, 'The "Project" button is not visible');
        await this.btnOKRBoard.click();
    }

}

module.exports = new JiraBoardPage;