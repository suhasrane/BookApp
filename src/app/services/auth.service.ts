import { ActivatedRoute } from '@angular/router';
import { IUserLogin, ITokenApiResponse } from './../shared/interfaces';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  tokenResponse: ITokenApiResponse;
  private _authUrl = 'http://localhost/api/token';
  constructor(private _http: HttpClient, private route: ActivatedRoute) {

  }

  login2(userLogin: IUserLogin): Observable<ITokenApiResponse> {

    const body = new URLSearchParams();
    body.set('username', userLogin.username);
    body.set('password', userLogin.password);
    body.set('grant_type', 'password');
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // console.table(userLogin);
    return this._http.post<ITokenApiResponse>(this._authUrl, body.toString(), options)
      .catch(this.handleError);
  }

  login(userLogin: IUserLogin): Observable<string> {

    const body = new URLSearchParams();
    body.set('username', userLogin.username);
    body.set('password', userLogin.password);
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // console.table(userLogin);
    return this._http.post<string>(this._authUrl, body.toString(), options)
      .map(response => {
        if (response) {
          localStorage.setItem('token', response);
          return true;
        }
        return false;
      })
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {

    // global function from jwt library that looks for local storage key with 'token' and retruns bool
    // below is the manual code
    return tokenNotExpired();
    // let jwtHelper = new JwtHelper();
    // const token = localStorage.getItem('token');
    // if (!token) {
    //   return false;
    // }

    // const expirationDate = jwtHelper.getTokenExpirationDate(token);
    // const isExpired = jwtHelper.isTokenExpired(token);

    // console.log('Expiration:', expirationDate);
    // console.log('Is Expired:', isExpired);

    // return !isExpired;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Server error');
  }


  get currentUser() {
    //   const token = localStorage.getItem('token');
    //   if (!token) {
    //     return null;
    //   }
    //   const decodedToken = new JwtHelper().decodeToken(token);
    //   // console.log(decodedToken);
    //   // console.table(decodedToken);
    //   // console.log(typeof(decodedToken));
    //   // let response =  new ITokenApiResponse();
    //   // this.tokenResponse.unique_name = decodedToken.unique_name;
    //   // this.tokenResponse.exp = decodedToken.exp;
    //   // this.tokenResponse.role = Array.from(decodedToken.role);
    //   this.tokenResponse = decodedToken;
    //  // console.log(typeof (decodedToken.unique_name));
    //   // console.log( (this.tokenResponse.unique_name));

    //   return this.tokenResponse;

    // console.log( this.decodedToken().unique_name);
    if (this.decodedToken() != null) {
      const decodedResponse = this.decodedToken();
      const username = decodedResponse.firstName + ' ' + decodedResponse.lastName;
      return username;
    }
  }
  private decodedToken(): ITokenApiResponse {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    const decodedToken = new JwtHelper().decodeToken(token);
    this.tokenResponse = decodedToken;
    return this.tokenResponse;
  }
  get isAdmin() {
  //  console.log(this.decodedToken());
    if (this.decodedToken() != null) {
      const roles = this.decodedToken().role;

      // if (roles.includes('Admin'))
      // // tslint:disable-next-line:one-line
      // {
      //   this.tokenResponse.isAdmin = true;
      // }
      return roles.includes('Admin');
    }

    // console.log(roles.includes('Admin'));

  }

}
