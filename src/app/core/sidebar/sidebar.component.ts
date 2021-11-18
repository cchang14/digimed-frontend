import { Component, OnInit, Input } from '@angular/core';
import { ActionButton } from 'src/app/_models/action-button.model';
import { SidebarNavItem } from 'src/app/_models/sidebar-nav.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // actions
  @Input() buttons!: ActionButton[];
  @Input() buttonPrimary!: ActionButton;
  @Input() buttonWarn!: ActionButton;
  
  // nav
  @Input() defaultNav!: boolean;
  @Input() navTitle!: string;
  @Input() itemList!: SidebarNavItem[];

  constructor() { }

  ngOnInit(): void {}
}
