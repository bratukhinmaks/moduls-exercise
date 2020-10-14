import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ElementsHomeComponent} from './elements-home/elements-home.component';


const routes: Routes = [
  {path: '', component: ElementsHomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule {
}
