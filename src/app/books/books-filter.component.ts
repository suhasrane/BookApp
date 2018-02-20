import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from '../shared/Category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.css']
})
export class BooksFilterComponent implements OnInit {
  categories: ICategory[];
 @Input('cat') cat;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
    this.categoryService.getAll()
      .subscribe(
      categories => {
        this.categories = categories;
        console.log('Child Componet received: ' + this.cat);
      }
      );
  }

  ngOnInit() {
  }

}
