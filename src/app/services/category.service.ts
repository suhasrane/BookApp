import { ActivatedRoute } from '@angular/router';
import { IUserLogin, ITokenApiResponse } from './../shared/interfaces';
import { ICategory } from './../shared/Category';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { AbstractRestService } from './abstract.rest.service';


@Injectable()
export class CategoryService extends AbstractRestService<ICategory> {
  private _categoryUrl = 'http://localhost/api/categories';
  constructor( _http: HttpClient) {
    super(_http, 'http://localhost/api/categories');
  }

  // getCategories(): Observable<ICategory[]> {
  //   const options = {
  //     headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  //   };
  //   return this._http.get<ICategory[]>(this._categoryUrl, options)
  //     // .do( data => console.table(data))
  //     .catch(this.handleError);
  // }


  // private handleError(error: HttpErrorResponse) {
  //   console.error('server error:', error);
  //   if (error.error instanceof Error) {
  //     const errMessage = error.error.message;
  //     return Observable.throw(errMessage);
  //     // Use the following instead if using lite-server
  //     // return Observable.throw(err.text() || 'backend server error');
  //   }
  //   return Observable.throw(error || 'Server error');
  // }
}
