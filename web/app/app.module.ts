import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PolymerElement} from '@vaadin/angular2-polymer';

import {routing} from './app.routing';

import {DeadfadComponent} from './deadfad.component';
import {BStructStore} from "./services/BStructStore";
import {DeadfadHexView} from "./views/hex.component";
import {DeadfadBStructView} from "./views/bstruct.component";

let POLYMER_ELEMENTS = [
  'paper-button',
  'paper-toolbar',
  'paper-icon-button',
  'paper-tabs',
  'paper-scroll-header-panel',
  'paper-header-panel',
  'iron-icon'
].map(s => PolymerElement(s));

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    DeadfadComponent,
    DeadfadHexView,
    DeadfadBStructView,
    POLYMER_ELEMENTS
  ],
  bootstrap: [
    DeadfadComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    BStructStore
  ]
})
export class AppModule {

}
