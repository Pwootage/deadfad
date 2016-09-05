import * as Electron from 'electron';
import {Deadfad} from "./Deadfad";
import {IPCHandler} from "./ipc/Handler";

export class DeadfadWindow extends Electron.BrowserWindow {
  openFile: string;
  ipc: IPCHandler;

  constructor(public deadfad: Deadfad, options?: Electron.BrowserWindowOptions) {
    super(options);
    this.ipc = new IPCHandler(this);
  }
}
