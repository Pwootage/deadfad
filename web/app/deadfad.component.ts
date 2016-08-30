import {Component} from '@angular/core'


@Component({
  selector: 'deadfad-app',
  template: `
<h1>Welcome to deadfad</h1>
`
})
export class DeadfadComponent {
  constructor() {
    console.log('Init first component')
  }
}
