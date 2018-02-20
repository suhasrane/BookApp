import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-admin-book-details',
  templateUrl: './admin-book-details.component.html',
  styleUrls: ['./admin-book-details.component.css']
})
export class AdminBookDetailsComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {


    // tslint:disable-next-line:max-line-length
    // If you are sure that You don’t allow user to be on same page  and navigate back and forth then we can use a snapshot instead of Observable
    // console.log(this.route.snapshot.paramMap.get('bookid'));

    // Here we can get the Route Parameter
    this.route.paramMap
      .subscribe(params => {
        // console.log(params);
        console.log(params.get('bookid'));
        // looks like its case-sensitive
        // get() method returns a string, use + sign before to convert to number.
      });

    // query Params
    // console.log(this.route.snapshot.queryParamMap.get('page'));

    // this.route.queryParamMap
    //   .subscribe(params => {
    //     // console.log(params);
    //     console.log(params.get('bookid'));
    //     // looks like its case-sensitive
    //     // get() method returns a string, use + sign before to convert to number.
    //   });

    let newObservable = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap

    ]);
    newObservable.subscribe(
      combined => {
        const id = combined[0].get('id');
        const search = combined[0].get('search');

        // then call the service based on these
      }
    );
  }


}
