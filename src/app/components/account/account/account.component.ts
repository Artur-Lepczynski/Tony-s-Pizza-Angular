import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{

  userData = {
    name: '',
    lastName: '', 
    email: '',
    address: '',
    password: ''
  };
  modalShown = false; 

  getUserData(){
    this.userData.name = localStorage.getItem('name');
    this.userData.lastName = localStorage.getItem('lastName');
    this.userData.email = localStorage.getItem('email');
    this.userData.address = localStorage.getItem('address');
    this.userData.password = localStorage.getItem('password');
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getUserData();
  }

  signOut(){
    this.modalShown = true;
  }

  cancelHandler(){
    this.modalShown = false;
  }

  confirmHandler(){
    this.modalShown = false;
    this.authService.logout();
    this.router.navigate([""]);
  }

}
