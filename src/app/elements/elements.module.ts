import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const modules = [
  CommonModule,
  ElementsRoutingModule
]

const components = [
  ElementsHomeComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [...components, ...modules]
})
export class ElementsModule { }
