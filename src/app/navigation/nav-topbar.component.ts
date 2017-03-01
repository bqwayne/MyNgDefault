import { NgModule, NgZone, ModuleWithProviders, Component, ViewEncapsulation, ViewChild, ElementRef, Renderer, EventEmitter, ChangeDetectionStrategy, Input, Output, OnInit } from '@angular/core';
import { MdButtonModule, MdButton, MdIconRegistry, MdIconModule } from '@angular/material';
import { ITopbarActionsComponent, NavigationDataService } from '../admin/settings/navigation';



@Component({
  selector: 'app-nav-topbar-action',
  templateUrl: './nav-topbar-actions.component.html',
  styleUrls: ['./nav-topbar.component.scss'],
  host: {},  
  viewProviders: [MdIconRegistry],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class NavTopbarActionComponent implements OnInit {
  @Input() topBarAction: ITopbarActionsComponent;
  @Input('iconSearch') iconSearch: boolean

  constructor(private mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  ngOnInit(){
  }
}

@Component({
  selector: 'app-nav-topbar',
  templateUrl: './nav-topbar.component.html',
  styleUrls: ['./nav-topbar.component.scss'],
  host: {},  
  viewProviders: [MdIconRegistry],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NavTopbarComponent implements OnInit {
  @Input('topBarActionsList') topBarActionsList: ITopbarActionsComponent;
  @Output() onTopBarActionSelect = new EventEmitter;
  public _showInputContainer: boolean = false;
  @ViewChild('input') public inputElement: ElementRef;

  constructor(private mdIconRegistry: MdIconRegistry,
              private _renderer: Renderer,
              private _ngZone: NgZone) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
   }

  ngOnInit() {
  }

  itemClicked(actionItem: ITopbarActionsComponent) {
    this.onTopBarActionSelect.emit(actionItem);
  }

  public alert(value: string) {
    alert(value);
  }
  public searchClick() {
    this._showInputContainer = true;
  // Give Angular a chance to create the input container and put focus on the input when shown
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => this._renderer.invokeElementMethod(this.inputElement.nativeElement, 'focus', []));
    });
  }

  public search(value){
    alert(value);
    this._showInputContainer = false;
  }

  public inputSearchClick() {
    this._showInputContainer = false;
  }  
}

