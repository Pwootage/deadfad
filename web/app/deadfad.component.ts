import {Component} from '@angular/core'


@Component({
  selector: 'deadfad-app',
  template: `
<paper-toolbar>
  <paper-icon-button icon="fa:bars" (click)="menuTap()"></paper-icon-button>
  <div class="title">Title</div>
  <paper-icon-button icon="fa:refresh" (click)="reload()"></paper-icon-button>
  <paper-icon-button icon="fa:ellipsis-v" (click)="moreTap()"></paper-icon-button>
</paper-toolbar>
`
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
    history.go(0);
  }
}
