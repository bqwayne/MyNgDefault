import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, EventEmitter, Renderer, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { MdButtonModule, MdButton, MdIconRegistry, MdIconModule } from '@angular/material';
import { ISideBarItemComponent } from '../admin/settings/navigation';

@Component({
  selector: 'app-nav-sidebar-item',
  templateUrl: './nav-sidebar-item.component.html',
  styleUrls: ['./nav-sidebar.component.scss'],
  host: {
    '[class.app-sidebar-list-item]': 'true',
    'role': 'listitem'
  },
  viewProviders: [MdIconRegistry],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NavSidebarListItemComponent {
  @Input() sideBarItem: ISideBarItemComponent;
  @Output() expand = new EventEmitter;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer, private mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
   }

   isExpandable(sideBarItem: ISideBarItemComponent){
     return !!sideBarItem.subItems && sideBarItem.subItems.length > 0;
   }

   isExpanded(sideBarItem: ISideBarItemComponent){
     return this.isExpandable(sideBarItem) && sideBarItem.expanded;
   }
}

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss'],
  host: {
    '[class.app-sidebar-list]': 'true',
    '[class.app-sidebar-list-collapse]': '!_opened'
  },
  viewProviders: [MdIconRegistry],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class NavSidebarListComponent implements OnInit {
  @Input('selectedSideBarItem') selectedSideBarItem: ISideBarItemComponent;
  @Input('sideBarItemList') sideBarItemList: Array<ISideBarItemComponent>;
  @Output() onSideBarItemSelect = new EventEmitter;

  _opened: boolean = true;
  _pinned: boolean = false;

  @ViewChild('openCloseButton')
  public openCloseButton: MdButton;

  constructor(private mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
   }

  ngOnInit() {
  }

  itemClicked(sideBarItem: ISideBarItemComponent){
    if (this.isExpandable(sideBarItem)) {
      sideBarItem.expanded = !sideBarItem.expanded;
      return;
    }
    this.onSideBarItemSelect.emit(sideBarItem);
  }

  isExpanded(sideBarItem: ISideBarItemComponent){
    return this.isExpandable(sideBarItem) && sideBarItem.expanded
  }

  isExpandable(sideBarItem: ISideBarItemComponent){
    return !!sideBarItem.subItems && sideBarItem.subItems.length >0;
  }

  toggleOpened() {
    if(!this._pinned) {
      this._opened = !this._opened;
    }
  }

  togglePinned(){
    this._pinned = !this._pinned;
    this.openCloseButton.disabled = this._pinned;
  }

}
