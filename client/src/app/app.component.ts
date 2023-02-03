import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { IUser } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor( private accountService:AccountService){

  }
  ngOnInit(): void {
    this.setCurrentUser()


  }
  

  setCurrentUser(){

    const userString = localStorage.getItem('user')

    if(!userString) return;

      const user : IUser = JSON.parse(userString);
      this.accountService.setCurrentUser(user);

  }
}
