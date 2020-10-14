import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';


const modules = [
  CommonModule,
  CollectionsRoutingModule
]

const components = [
   CollectionHomeComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [...components, ...modules]
})
export class CollectionsModule { }
