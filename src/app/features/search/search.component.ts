import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';

export interface SearchData {
  'primarysourcecountry': 'string',
  'receiptdate': 'string',
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  defaultNav = true;
  dataSource: SearchData[] = [];
  displayedColumns: string[] = ['country', 'date', 'source', 'symbol'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
        console.log(data);
        this.dataSource = data.results.slice(1, 12)
        console.log(this.dataSource)
      }
    )
  }

}
