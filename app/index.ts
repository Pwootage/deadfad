import * as Electron from 'electron';
const {BrowserWindow, app}  = Electron;

import {setupMenu} from './menu/menu';

import {openFile} from './actions/open';
import {saveAll} from "./actions/save";

let mainWindow: Electron.BrowserWindow;

function initMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL('file://' + __dirname + '/../web/index.html');

  mainWindow.webContents.openDevTools({mode: "undocked"});

  mainWindow.on('closed', () => {
    mainWindow = undefined;
  });

  console.log('Set up main window - we\'re ready to roll');
}

app.on('ready', () => {
  initMainWindow();
  setupMenu(() => openFile(), () => saveAll());
});

app.on('window-all-closed', () => {
  app.quit();
});
