import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);

  signup(userData) {
    //request do backendu, catch błędów, tap zapisuje dane do usera i localstorage
    //zamiast tego poglądowe tworzenie usera i zapis do localstorage
    // return this.http
    //   .post<any>(
    //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsTCKRjfw0Hv46LvHYyP4Qsj05gbpWImw",
    //     { email, password, returnSecureToken: true }
    //   )
    //   .pipe(
    //     catchError((errorRes) => {
    //       let error = "An unknown error occured!";
    //       switch (errorRes.error.error.message) {
    //         case "EMAIL_EXISTS":
    //           error = "This email exists already";
    //           break;
    //       }
    //       return throwError(error);
    //     }),
    //     tap((resData) => {
    //       const expDate = new Date(new Date().getTime() + resData.expiresIn * 1000);
    //       const user = new User(
    //         resData.email,
    //         resData.localId,
    //         resData.idToken,
    //         expDate,
    //       );
    //       this.user.next(user);
    //       localStorage.userData = JSON.stringify(user);
    //     })
    //   );

    const token = 'token' + Math.random();

    localStorage.email = userData.email;
    localStorage.password = userData.password;
    localStorage.name = userData.name || 'User';
    localStorage.lastName = userData.lastName || 'Last Name';
    localStorage.address = userData.address || 'Address';

    localStorage.token = token;

    const user = new User(token);
    this.user.next(user);
  }

  login(userData) {
    //request do backendu, catch błędów, tap zapisuje dane do usera i localstorage
    //zamiast tego poglądowe logowanie istniejącego usera i zapis do localstorage
    // return this.http.post<any>(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsTCKRjfw0Hv46LvHYyP4Qsj05gbpWImw",
    //   { email, password, returnSecureToken: true }
    // ).pipe(tap((resData) => {
    //   const expDate = new Date(new Date().getTime() + resData.expiresIn * 1000);
    //   const user = new User(
    //     resData.email,
    //     resData.localId,
    //     resData.idToken,
    //     expDate,
    //   );
    //   this.user.next(user);
    //   localStorage.userData = JSON.stringify(user);
    // }));

    const token = 'token' + Math.random();

    localStorage.email = userData.email;
    localStorage.password = userData.password;
    localStorage.name = userData.name || 'User';
    localStorage.lastName = userData.lastName || 'Last Name';
    localStorage.address = userData.address || 'Address';

    localStorage.token = token;

    const user = new User(token);
    this.user.next(user);
  }

  autoLogin() {
    //automatyczne logowanie aby nie trzeba było się logować przy każdym odświeżeniu strony
    if (!localStorage.token) return;
    const user = new User(localStorage.token);
    this.user.next(user);
  }

  logout() {
    //wylogowanie, czyści dane z localstorage
    delete localStorage.token;
    
    delete localStorage.email;
    delete localStorage.password;
    delete localStorage.name;
    delete localStorage.lastName;
    delete localStorage.address;
    
    this.user.next(null);
  }
}
