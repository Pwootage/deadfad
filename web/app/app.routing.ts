import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DeadfadHexView} from "./views/hex.component";
import {DeadfadBStructView} from "./views/bstruct.component";

const appRoutes: Routes = [
  {
    path: '',
    component: DeadfadHexView
  },
  {
    path: 'struct',
    component: DeadfadBStructView
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
