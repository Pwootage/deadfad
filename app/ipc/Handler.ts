import * as Electron from 'electron';
import {DeadfadWindow} from "../DeadfadWindow";
import {Deadfad} from "../Deadfad";
import IpcMainEvent = Electron.IpcMainEvent;

namespace IPCEvents {
  export const bstruct_load = 'bstruct_load';
}


export function setupGlobalIPC(deadfad: Deadfad) {
  const ipc = Electron.ipcMain;
}

export class IPCHandler {
  constructor(private deadfadWindow: DeadfadWindow) {
  }
}
