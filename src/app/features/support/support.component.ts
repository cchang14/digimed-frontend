import { Component, OnInit } from '@angular/core';
import { SidebarNavItem } from 'src/app/_models/sidebar-nav.model';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  // nav
  defaultNav: boolean = false;
  navTitle: string = 'NAVIGATION';
  itemList: SidebarNavItem[] = [
    { icon: '', content: 'FAQ', path: 'faq'},
    { icon: '', content: 'Contact us', path: 'contact'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
