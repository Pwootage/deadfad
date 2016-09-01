import * as Electron from 'electron';
const {app} = Electron;

import {DeadfadWindow} from './DeadfadWindow';
import {setupMenu} from './menu/menu';

import {IPCHandler} from './ipc/Handler'

export class Deadfad {
  windows: DeadfadWindow[] = [];

  constructor() {
    app.on('ready', () => {
      setupMenu(() => this.openFile(), () => this.saveAll());
    });

    app.on('window-all-closed', () => {
      app.quit();
    });
  }

  createWindow() {
    let window = new DeadfadWindow(this, {
      width: 800,
      height: 600
    });
    this.windows.push(window);

    window.loadURL('file://' + __dirname + '/../web/index.html');

    // window.webContents.openDevTools({mode: "undocked"});

    window.on('closed', () => {
      window.deadfad = null; //Break reference cycle
      let after = this.windows.filter(a => a != window);
      console.log(`Closed a window ${this.windows.length} -> ${after.length}`);
      this.windows = after;
    });

    console.log('Set up a window');
  }

  openFile() {
    console.log("Showing open dialog");
  }

  saveAll() {
    console.log("Saving all");
  }
}
