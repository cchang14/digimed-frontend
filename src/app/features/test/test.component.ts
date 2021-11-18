import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('authorize', this.userService.isAuthorized());

    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        console.log(err);
        this.content = JSON.parse(err.error).message;
      }
    )
  }

}
