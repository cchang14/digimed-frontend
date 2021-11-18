import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoggedFailed = false;
  errorMessage = '';
  roles: string[] = [];
  hide = true;
  intervalId?: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles.map((role: { authority: any; }) => role.authority);
    }    
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoggedFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles.map((role: { authority: any; }) => role.authority);
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoggedFailed = true;
      }
    );
  }

  reloadPage(): void {
    this.intervalId = setInterval(function() {window.location.href="/my-research"}, 5000);

    
    // window.location.reload();
    // this.router.navigate(['/my-research']);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }  

}
