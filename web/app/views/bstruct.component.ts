import {Component} from '@angular/core'
import {BStructStore} from "../services/BStructStore";
import * as Electron from 'electron';


@Component({
  moduleId: module.id,
  selector: 'deadfad-bstruct',
  templateUrl: 'bstruct.component.html'
})
export class DeadfadBStructView {
  constructor(public bstructStore: BStructStore) {
  }

  loadBStructs() {
    Electron.remote.dialog.showOpenDialog({
      title: 'Load Structs',
      filters: [{
        name: 'bstruct',
        extensions: ['bstruct']
      }],
      properties: ['openFile', 'multiSelections']
    }, (files) => {
      this.bstructStore.loadFromFiles(files);
    });
  }
}
