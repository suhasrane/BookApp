import { IBook } from './../../shared/Book';
import { Observable } from 'rxjs/Rx';
import { BookService } from './../../services/book.service';
import { ICategory } from './../../shared/Category';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  public model: any;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.categories.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  formatter = (x: { name: string }) => x.name;

  // tslint:disable-next-line:member-ordering
  categories: ICategory[];
  // tslint:disable-next-line:member-ordering
  book: IBook = {
    id: 0,
    title: '',
    description: '',
    price: null,
    copies: null,
    edition: null,
    isbn: '',
    url: '',
    author: null,
    publishedDate: null,
    pages: null,
    publishingCompany: '',
    rating: null,
    categories: []
  };
  // tslint:disable-next-line:member-ordering
  insertSuccess: string;
  constructor(private categoryService: CategoryService, private bookService: BookService) { }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe(
      categories => {
        this.categories = categories;
        // console.log(this.categories);
        // console.table(this.categories);
      }

      );


  }
  submitBook() {
    this.book.categories = this.selectedOptions;
    this.bookService.insertBook(this.book)
      .subscribe(
      s => { this.insertSuccess = s.title; }
      );
    console.table(this.insertSuccess);
  }

  get selectedOptions() {
    console.log(this.categories);
    return this.categories
      .filter(opt => opt.isChecked);
    // .map(opt => opt.id);
  }
}
