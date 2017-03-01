import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
import { ITopbarActionsComponent } from '../../admin/settings/navigation';
import { MdMenu } from '@angular/material';

@Directive({
  selector: '[appDirectives]'
})
export class AppDirective {

  constructor() { }

}

@Directive({
  selector: '[action-type]'
})
export class ActionTypeDirective {
  @Input('action-type') topBarAction: ITopbarActionsComponent;

  constructor(private el: ElementRef,
              private renderer: Renderer){
  }

  ngOnInit() {
    if (this.topBarAction.routeType === 'menu') {
      this.renderer.setElementAttribute(this.el.nativeElement, "menu-name", this.topBarAction.actionName);
      //console.log("Directive received from " + this.el.nativeElement.innerHTML);
      this.renderer.createElement(this.el.nativeElement, 'app-menu');
      let appMenuElement = this.renderer.selectRootElement('app-menu');
      this.renderer.setElementAttribute(appMenuElement, 'data', this.topBarAction.actionName)
    }
  }

}