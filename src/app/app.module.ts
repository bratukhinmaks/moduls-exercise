import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { LandingComponent } from './shared/components/landing/landing.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { OpenModuleDirective } from './open-module.directive';
import { SegmentComponent } from './moduls/elements/segment/segment.component';



@NgModule({
  declarations: [AppComponent, LandingComponent, ErrorPageComponent, HomeComponentComponent, OpenModuleDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
