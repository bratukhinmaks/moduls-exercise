import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollectionHomeComponent} from './collection-home/collection-home.component';


const routes: Routes = [
  {path: '', component: CollectionHomeComponent, pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
