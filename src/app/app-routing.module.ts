import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './shared/components/landing/landing.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HomeComponentComponent} from './home-component/home-component.component';


const routes: Routes = [
  {
    path: '', component: LandingComponent, children: [
      {path: '', component: HomeComponentComponent, pathMatch: 'full'},
      {path: 'elements', loadChildren: () => import('./moduls/elements/elements.module').then((m) => m.ElementsModule)},
      {path: 'collections', loadChildren: () => import('./moduls/collections/collections.module').then((m) => m.CollectionsModule)},
      {path: 'views', loadChildren: () => import('./moduls/views/views.module').then((m) => m.ViewsModule)},
      {path: 'modals', loadChildren: () => import('./moduls/mods/mods.module').then((m) => m.ModsModule)},
      {path: '**', component: ErrorPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
