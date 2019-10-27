const { remote, ipcRenderer } = require('electron');
const gameWindow = remote.getCurrentWindow();
const consts = require('./constants.js');
const log = require('electron-log');
const Utilities = require('./utilities.js');

const initLogging = () => {
	console.log = log.info;
	console.info = log.info;
	console.warn = log.warn;
	console.error = log.error;
	console.debug = log.debug;
};
initLogging();