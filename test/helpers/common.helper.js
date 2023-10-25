const { browser } = require('@wdio/globals')
const config = require('../../wdio.conf');
const EC = require('wdio-wait-for');

let CommonHelper = function (script, args) {

	this.clearSessionStorage = async function () {
		await browser.executeScript('window.sessionStorage.clear();', args);
	};

	this.clearLocalStorage = async function (script, args) {
		await browser.executeScript('window.localStorage.clear();', args);
	};

	this.clearCookies = async function () {
		await browser.deleteCookies();
	};

	this.clearAllData = async function () {
		await this.clearSessionStorage();
		await this.clearLocalStorage();
		await this.clearCookies();
	};

	this.slowType = async function (element, keys, delay = 5) {
		await element.click();
		await this.clear(element);

		for (let i = 0; i < keys.length; i++) {
			await element.sendKeys(keys[i]);
			await browser.sleep(delay);
		}
	};

	this.clear = async function (element) {
		await element.clearValue();
	};

	this.waitUntilElement = async function (func, message, timeout = config.config.waitforTimeout) {
		await browser.waitUntil(func, {timeout, message});
	};


	this.waitUntilElementVisible = async function (element, message, timeout) {
		await this.waitUntilElement(EC.visibilityOf(element), message, timeout);
	};

	this.waitUntilElementInvisible = async function (element, message, timeout) {
		await this.waitUntilElement(EC.invisibilityOf(element), message, timeout);
	};

	this.waitUntilElementClickable = async function (element, message, timeout) {
		await this.waitUntilElement(EC.elementToBeClickable(element), message, timeout);
	};

	this.sendKeys = async function (element, input) {
		await this.waitUntilElementVisible(element, `The "${element.value}" field is not visible`);
		await this.clear(element);
		await element.setValue(input);
	};

	this.click = async function (element, message = `The "${element.value}" is not clickable`) {
		await this.waitUntilElementClickable(element, message);
		await element.click();
	};

	this.scrollIntoView = function(element, center = 0){
		let option = true;
		if(center) option = '{"block": "center"}';
		return browser.executeScript(`arguments[0].scrollIntoView(${option});`, element);
	};

	this.switchToFrame = async function (frameId) {
		await browser.switchToFrame(frameId);
	};

	this.switchTo = async function (tab) {
		await browser.getWindowHandles().then((handles) => {
			browser.switchWindow(handles[tab]);
		});
	};

	this.moveMouseOver = async function (element) {
		await browser.actions().mouseMove(element).perform();
	};
	
	this.chooseElementByText = async function (elements, text) {
		return this.elements.filter( (el) => {
			return  el.getText() === text;
		});	
	};
};

module.exports = new CommonHelper();
