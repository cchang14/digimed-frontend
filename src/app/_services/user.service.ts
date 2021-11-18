import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../_helpers/constants';
import { TokenStorageService } from './token-storage.service';


const API_URL = 'http://localhost:8081/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, 
              private router: Router, 
              private tokenStorageService: TokenStorageService) { }

  isAuthorized() {
    let roles: any;
    let value: { authority: string};
    
    // const requiredRole: string = Constants.AUTHORIZED_URLS[this.router.routerState.snapshot.url]
    const requiredRole: any = Constants.AUTHORIZED_URLS.find(o => o.url === this.router.routerState.snapshot.url)?.role;
    console.log('requiredRole', requiredRole);

    if (requiredRole != null) {

        roles = this.tokenStorageService.getUser().roles;
        if (roles) {

          for (value of roles) {
              if (value.authority == requiredRole) {
                  return true;
              }
          }
        }
    }
    return false;   
  }

  getPublicContent(): Observable<any> {
    // console.log(this.isAuthorized());
    return this.http.get(API_URL + '/test', { responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'dccuser', { responseType: 'text'});
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'dccmod', { responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'dccadmin', { responseType: 'text'});
  }

}
