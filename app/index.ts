import * as Electron from 'electron';

let mainWindow: Electron.BrowserWindow;

function initMainWindow() {
  mainWindow = new Electron.BrowserWindow({
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

Electron.app.on('ready', () => {
  initMainWindow();
});

Electron.app.on('window-all-closed', () => {
  Electron.app.quit();
});
