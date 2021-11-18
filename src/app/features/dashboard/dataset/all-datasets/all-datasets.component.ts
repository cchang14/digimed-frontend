import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaticService } from 'src/app/_services/static.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

export interface TableElement {
  status: string;
  title: string;
  updateDate: Date;
}

@Component({
  selector: 'app-all-datasets',
  templateUrl: './all-datasets.component.html',
  styleUrls: ['./all-datasets.component.scss']
})
export class AllDatasetsComponent implements OnInit {
  defaultNav = true;
  displayedColumns: string[] = ['status', 'title', 'updateDate', 'symbol'];
  allDatasets = this.staticService.getAllDatasets();
  
  dataSource = this.allDatasets;
  // ELEMENT_DATA: TableElement[] = [];
  // dataSource!: any;

  constructor(private tokenStorageService: TokenStorageService, 
              private router: Router,
              private staticService: StaticService) { }

  ngOnInit(): void {
    if (!this.tokenStorageService.getToken()) {
      this.router.navigate(['/login']);
    }
    console.log(this.allDatasets);
    // this.dataSource = this.staticService.getAllDatasets();
    
  }

}
