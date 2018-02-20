import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractRestService } from './abstract.rest.service';
import { IAuthor } from '../shared/Author';

@Injectable()
export class AuthorService extends AbstractRestService<IAuthor> {

  constructor(http: HttpClient, url: string) {
    super(http, url + 'author/');

  }
}
