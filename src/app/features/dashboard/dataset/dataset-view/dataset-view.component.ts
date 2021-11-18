import { Component, OnInit } from '@angular/core';
import { ActionButton } from 'src/app/_models/action-button.model';
import { datasetModel } from 'src/app/_models/dataset.model';
import { SidebarNavItem } from 'src/app/_models/sidebar-nav.model';
import { StaticService } from 'src/app/_services/static.service';

@Component({
  selector: 'app-dataset-view',
  templateUrl: './dataset-view.component.html',
  styleUrls: ['./dataset-view.component.scss']
})
export class DatasetViewComponent implements OnInit {
  // nav
  buttonPrimary: ActionButton = {
    content: 'Edit',
    url: '/dataset/edit'
  }
  defaultNav: boolean = true;

  dataset?: datasetModel;

  constructor(private staticService: StaticService) { }

  ngOnInit(): void {
    this.dataset = this.staticService.getDataset();
    // console.log(this.dataset);
  }

}
