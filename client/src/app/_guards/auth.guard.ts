import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
/** AuthGuard is used to protect the routes from unauthorized access in angular */ 
export class AuthGuard implements CanActivate {
  constructor(private accountservice:AccountService , private toastr:ToastrService){

  }
  canActivate(): Observable<boolean>  {
    return this.accountservice.currentUser$.pipe(
      map(user =>{
        if(user) return true;
        else {
          this.toastr.error('You shall not pass!');
          return false
        }
      })
    );
  }
  
}
