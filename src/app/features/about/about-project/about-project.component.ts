import { Component, OnInit } from '@angular/core';
import { ActionButton } from 'src/app/_models/action-button.model';
import { SidebarNavItem } from 'src/app/_models/sidebar-nav.model';

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss']
})
export class AboutProjectComponent implements OnInit {
  // action buttons
  buttons: ActionButton[] = [
    {content: 'Save as Draft'},
    {content: 'Preview Study'},
  ];

  buttonPrimary: ActionButton = {content: 'Publish Study'};
  buttonWarn: ActionButton = {content: 'Cancel'};

  // nav
  defaultNav: boolean = false;
  navTitle: string = 'NAVIGATION';
  itemList: SidebarNavItem[] = [
    { icon: '', content: 'About Project', path: ''},
    { icon: '', content: 'Team', path: ''},
    { icon: '', content: 'Publications', path: ''},
    { icon: '', content: 'Other tools', path: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
