import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  mode; // "login" or "signup"

  enteredName = '';
  enteredNameTouched = false;
  enteredLastName = '';
  enteredLastNameTouched = false;
  enteredEmail = '';
  enteredEmailTouched = false;
  enteredPassword = '';
  enteredPasswordTouched = false;
  enteredAddress = '';
  enteredAddressTouched = false;

  enteredNameValid() {
    return this.enteredName.length > 2;
  }
  enteredNameInputValid() {
    return this.enteredNameValid() || !this.enteredNameTouched;
  }
  enteredLastNameValid() {
    return this.enteredLastName.length > 4;
  }
  enteredLastNameInputValid() {
    return this.enteredLastNameValid() || !this.enteredLastNameTouched;
  }
  enteredEmailValid() {
    return this.enteredEmail.includes(`@`);
  }
  enteredEmailInputValid() {
    return this.enteredEmailValid() || !this.enteredEmailTouched;
  }
  enteredPasswordValid() {
    return this.enteredPassword.length > 6;
  }
  enteredPasswordInputValid() {
    return this.enteredPasswordValid() || !this.enteredPasswordTouched;
  }
  enteredAddressValid() {
    return this.enteredAddress.length > 6;
  }
  enteredAddressInputValid() {
    return this.enteredAddressValid() || !this.enteredAddressTouched;
  }

  formIsValid() {
    if (this.mode === `login`) {
      return this.enteredEmailValid() && this.enteredPasswordValid();
    } else if (this.mode === `signup`) {
      return (
        this.enteredNameValid() &&
        this.enteredLastNameValid() &&
        this.enteredEmailValid() &&
        this.enteredPasswordValid() &&
        this.enteredAddressValid()
      );
    } else {
      return false;
    }
  }

  nameBlur() {
    this.enteredNameTouched = true;
  }
  lastNameBlur() {
    this.enteredLastNameTouched = true;
  }
  emailBlur() {
    this.enteredEmailTouched = true;
  }
  passwordBlur() {
    this.enteredPasswordTouched = true;
  }
  addressBlur() {
    this.enteredAddressTouched = true;
  }

  handleFormSubmit() {
    if (this.mode === 'login') {
      this.authService.login({
        email: this.enteredEmail,
        password: this.enteredPassword,
      });
    } else {
      this.authService.signup({
        name: this.enteredName,
        lastName: this.enteredLastName,
        email: this.enteredEmail,
        password: this.enteredPassword,
        address: this.enteredAddress,
      });
    }
    this.router.navigate([""]);
  }

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((newParams) => {
      this.mode = newParams['mode'];
    });
  }
}
