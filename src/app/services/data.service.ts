import { NotFoundError } from './../shared/not.found.error';
import { BadInputError } from './../shared/bad.input.error';
import { AppError } from './../shared/app.error';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url)
      .map(response => response)
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response)
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map(response => response)
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response)
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInputError(error.json()));
     }
    if (error.status === 404) {
       return Observable.throw(new NotFoundError());
      }
    return Observable.throw(new AppError(error));
  }
}
