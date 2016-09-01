import * as Electron from 'electron';
import {Deadfad} from "./Deadfad";

export class DeadfadWindow extends Electron.BrowserWindow {
  openFile: string;

  constructor(public deadfad: Deadfad, options?: Electron.BrowserWindowOptions) {
    super(options);
  }
}
