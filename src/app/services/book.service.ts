import { IBook } from './../shared/Book';
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
export class BookService extends AbstractRestService<IBook>  {

  private _bookUrl = 'http://localhost/api/books';
  constructor(_http: HttpClient) {
    super(_http, 'http://localhost/api/books');

  }

  getBooksByCategory(categoryId: string): Observable<IBook[]> {
    return this._http.get<IBook[]>(this._bookUrl + '/category/' + categoryId);
  }


  insertBook(book: IBook): Observable<IBook> {
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this._http.post<IBook>(this._bookUrl, book, options);
    // .map(response => { })
    // .catch(this.handleError);
  }

  
}
