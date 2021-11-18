import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-my-research',
  templateUrl: './my-research.component.html',
  styleUrls: ['./my-research.component.scss']
})
export class MyResearchComponent implements OnInit {
  defaultNav: boolean = true;
  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
    else {
      this.router.navigate(['/login']);
    }

  }

}
