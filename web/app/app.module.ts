import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PolymerElement} from '@vaadin/angular2-polymer';

import {DeadfadComponent} from './deadfad.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    DeadfadComponent,
    PolymerElement('paper-button'),
    PolymerElement('paper-toolbar'),
    PolymerElement('paper-icon-button'),
    PolymerElement('iron-icon')
  ],
  bootstrap: [
    DeadfadComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {

}
