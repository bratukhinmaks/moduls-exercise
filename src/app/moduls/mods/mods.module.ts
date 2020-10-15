import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModsRoutingModule} from './mods-routing.module';
import {ElementsRoutingModule} from '../elements/elements-routing.module';
import {ElementsHomeComponent} from '../elements/elements-home/elements-home.component';
import {ModulesHomeComponent} from './modules-home/modules-home.component';


const modules = [
  CommonModule,
  ModsRoutingModule

];

const components = [
  ModulesHomeComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [...components, ...modules]
})
export class ModsModule {
}
