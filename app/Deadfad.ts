import * as Electron from 'electron';
const {app, dialog} = Electron;
import {resolve} from 'path';
import {readFileSync} from 'fs';

import {DeadfadWindow} from './DeadfadWindow';
import {setupMenu} from './menu/menu';
import {setupGlobalIPC, IPCHandler} from './ipc/Handler'

export class Deadfad {
  windows: DeadfadWindow[] = [];

  constructor() {
    setupGlobalIPC(this);
    app.on('ready', () => {
      setupMenu(() => this.openFile(), () => this.saveAll());
    });

    app.on('window-all-closed', () => {
      app.quit();
    });
  }

  createWindow(): DeadfadWindow {
    let window = new DeadfadWindow(this, {
      width: 800,
      height: 600
    });
    this.windows.push(window);

    window.loadURL('file://' + __dirname + '/../web/index.html');

    // window.webContents.openDevTools({mode: "undocked"});

    window.on('closed', () => {
      let after = this.windows.filter(a => a != window);
      console.log(`Closed a window ${this.windows.length} -> ${after.length}`);
      this.windows = after;
    });

    console.log('Set up a window');

    return window;
  }

  openFile() {
    console.log("Showing open dialog");
    dialog.showOpenDialog({
      // title: 'Open File',
      properties: ['openFile'],
      filters: [
        {name: 'All Files', extensions: ['*']}
      ]
    }, (file) => {
      console.log(`Opening '${file}'`)
    });
  }

  saveAll() {
    console.log("Saving all");
  }
}
