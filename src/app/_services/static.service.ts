import { Injectable } from '@angular/core';
import { datasetModel } from '../_models/dataset.model';

@Injectable({
  providedIn: 'root'
})
export class StaticService {
  datasets: datasetModel[] = [
    {
      "status": "Draft",
      "name": "Kaggle - COVID-19 CBC News Coronavirus/COVID-19 articles (NLP)",
      "description": "This dataset contains the authors, the title, the publish date, the description about the story, the main story, and the url from CBC news articles related to COVID-19.",
      "creator": {
        "employees": {
            "name": "Ryan Han"
        }
      },
      "dateCreated": new Date()
    },
    {
      "status": "Published",
      "name": "Aspirin CBC News Coronavirus/COVID-19 articles (NLP)",
      "description": "This dataset contains the authors, the title, the publish date, the description about the story, the main story, and the url from CBC news articles related to COVID-19.",
      "creator": {
        "employees": {
            "name": "Kyle Han"
        }
      },
      "dateCreated": new Date()
    },
    {
      "status": "Draft",
      "name": "Aspirin CBC News Coronavirus/COVID-19 articles (NLP)",
      "description": "This dataset contains the authors, the title, the publish date, the description about the story, the main story, and the url from CBC news articles related to COVID-19.",
      "creator": {
        "employees": {
            "name": "Kyle Han"
        }
      },
      "dateCreated": new Date()
    },

  ];

  constructor() { }

  getDataset() {
    return this.datasets[0];
  }

  submitDataset(form: any) {
    console.log(form);
    return true;
  }

  getAllDatasets() {
    return this.datasets.slice()
  }
}
