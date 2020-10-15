import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {
  @Input('appRepeat') set number(n: number) {
    this.viewRef.clear();
    for (let i = 0; i < n; i++) {
      this.viewRef.createEmbeddedView(this.temRef, {});
    }
  }
  constructor(private viewRef: ViewContainerRef, private temRef: TemplateRef<any>) {
  }
}
