import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavItem } from 'src/app/_models/sidebar-nav.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
    // action buttons
    // buttons: ActionButton[] = [
    //   {content: 'Save as Draft'},
    //   {content: 'Preview Study'},
    // ];
  
    // buttonPrimary: ActionButton = {content: 'Publish Study'};
    // buttonWarn: ActionButton = {content: 'Cancel'};

    // nav
    defaultNav: boolean = false;
    navTitle: string = 'NAVIGATION';
    itemList: SidebarNavItem[] = [
      { icon: '', content: 'About Project', path: 'project'},
      { icon: '', content: 'Publications', path: 'publications'},
      { icon: '', content: 'Other tools', path: 'tools'},
    ]

    onAbout!: boolean;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    // this.onAbout == true;
    console.log(this.router.url);
    if (this.router.url == '/about') {
      this.onAbout = true;
    }
  }

}
