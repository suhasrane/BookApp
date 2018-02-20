import { IUserLogin, ITokenApiResponse } from './../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  returnUrl: string;
  credentials: IUserLogin = {
    // grant_type: 'password',
    username: '',
    password: ''
  };

  tokenResponse: ITokenApiResponse;
  // token: string;
  constructor(private router: Router, private route: ActivatedRoute, private _authService: AuthService) {

  }

  ngOnInit() {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl' || '/');
    console.log(this.returnUrl);
  }

  login() {

    this._authService.login(this.credentials)
      .subscribe((response) => {

        if (response) {
          // this.token = response;
          //  this.router.navigate(['/']);
         // console.log(this.returnUrl);
          this.router.navigateByUrl(this.returnUrl);
          // console.log(response);
          // console.log(this.tokenResponse.access_token);
        }

        // tslint:disable-next-line:one-line
        else {
          this.invalidLogin = true;

        }

      },
      // (err: any) => console.log(err));
      (err: any) => this.invalidLogin = true);

    // console.table(this.credentials);
    // console.log(this.tokenResponse.access_token);
    // console.table(this.tokenResponse);
  }
}
