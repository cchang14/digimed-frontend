import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActionButton } from 'src/app/_models/action-button.model';
import { datasetModel } from 'src/app/_models/dataset.model';
import { SidebarNavItem } from 'src/app/_models/sidebar-nav.model';
import { StaticService } from 'src/app/_services/static.service';

@Component({
  selector: 'app-dataset-edit',
  templateUrl: './dataset-edit.component.html',
  styleUrls: ['./dataset-edit.component.scss']
})
export class DatasetEditComponent implements OnInit {
  // form
  form: any = {
    title: null,
    authorName: null,
    description: null
  };

  submitForm!: datasetModel;

  // buttons
  // buttonPrimary: ActionButton = {
  //   content: 'Next',
  //   function: this.onSubmit()
  // };

  // nav
  defaultNav = false;
  navTitle = 'STEPS'
  itemList: SidebarNavItem[] = [
    { icon: '', content: 'Create dataset', path: '/dataset/edit'},
    { icon: '', content: 'Upload files', path: 'dataset/edit/upload'},
    { icon: '', content: 'Confirmation', path: 'dataset/edit/confirmation'},
  ]


  constructor(private staticService: StaticService, private location: Location) { }

  ngOnInit(): void {
    // this.buttonPrimary.function = this.staticService.submitDataset(this.form);
  }

  onSubmit() {
    this.submitForm = {
      "status": "Draft",
      "name": this.form.name,
      "description": this.form.description,
      "creator": {
          "employees": {
              "name": this.form.authorName
          }
      },
      "dateCreated": new Date()
    }
    const data = JSON.stringify(this.submitForm);
    this.staticService.submitDataset(data);

  }

  onCancel() {
    this.location.back();
  }

}