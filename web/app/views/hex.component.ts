import {Component} from '@angular/core'


@Component({
  selector: 'deadfad-hex',
  template: `
<ul>
    <li *ngFor="let item of [1,2,3,4,5,6,7]">hex goes here</li>
</ul>
`
})
export class DeadfadHexView {
  constructor() {
  }
}
