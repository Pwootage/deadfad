import {Component} from '@angular/core'


@Component({
  moduleId: module.id,
  selector: 'deadfad-app',
  templateUrl: 'deadfad.component.html'
})
export class DeadfadComponent {
  constructor() {
    console.log('Init first component');
  }

  menuTap() {
    console.log('Menu tapped');
  }

  moreTap() {
    console.log('More tapped');
  }

  reload() {
    let url = document.getElementsByTagName('base')[0].href + 'index.html';
    location.replace(url);
  }
}
