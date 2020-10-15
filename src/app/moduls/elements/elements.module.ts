import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { RepeatDirective } from './shared/repeat.directive';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {OpenModuleDirective} from '../../open-module.directive';
import {SegmentComponent} from './segment/segment.component';

const modules = [
  CommonModule,
  ElementsRoutingModule
]

const components = [
  ElementsHomeComponent,
  SegmentComponent
]

@NgModule({
  declarations: [...components, PlaceholderComponent, RepeatDirective],
  imports: [
    ...modules,
    SharedModule,
  ],
  exports: [...components, ...modules]
})
export class ElementsModule { }
