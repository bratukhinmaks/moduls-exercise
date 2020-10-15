import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { TableComponent } from './table/table.component';
import {SharedModule} from '../../shared/shared.module';
import { TabsComponent } from './tabs/tabs.component';


const modules = [
  CommonModule,
  CollectionsRoutingModule,
  SharedModule
]

const components = [
   CollectionHomeComponent
]

@NgModule({
  declarations: [...components, TableComponent, TabsComponent],
  imports: [
    ...modules
  ],
  exports: [...components, ...modules]
})
export class CollectionsModule { }
