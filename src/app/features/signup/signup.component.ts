import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: any = {
    name: null,
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoggedFailed = false;
  errorMessage = '';
  roles: string[] = [];
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);
  }

}
