import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import {ElementsRoutingModule} from '../elements/elements-routing.module';
import {ElementsHomeComponent} from '../elements/elements-home/elements-home.component';
import { ViewsHomeComponent } from './views-home/views-home.component';


const modules = [
  CommonModule,
  ViewsRoutingModule
]

const components = [
  ViewsHomeComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [...components, ...modules]
})
export class ViewsModule { }
