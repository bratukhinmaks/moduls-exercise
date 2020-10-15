import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DividerComponent} from './components/divider/divider.component';
import {FormsModule} from '@angular/forms';

const components = [
  DividerComponent,
];
const moduls = [
  CommonModule,
  FormsModule
];

@NgModule({
  declarations: [...components],
  imports: [
    ...moduls
  ],
  exports: [
    ...components,
    ...moduls
  ]
})
export class SharedModule {
}
