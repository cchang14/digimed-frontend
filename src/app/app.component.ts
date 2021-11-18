import { Component} from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  onShowSide!: boolean;

  acceptShowSide(data: any) {
    this.onShowSide = data;  
  }
}
