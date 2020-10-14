import {Directive, HostListener, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

// tslint:disable-next-line:label-position



@Directive({
  selector: '[appOpenModule]'
})

export class OpenModuleDirective {
  clickInside: boolean;

  @Input('appOpenModule') isOpen ;

  @HostListener('click') openModul() {
    this.isOpen.value = true;
    this.clickInside = true;
  }

  @HostListener('document:click') closeModul() {
    if (!this.clickInside) {
      this.isOpen.value = false;
    }
    this.clickInside = false;
  }

  constructor() {
  }

}
