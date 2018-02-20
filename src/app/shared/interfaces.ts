import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface IUserLogin {
    // grant_type: string;
    username: string;
    password: string;
}

export interface ITokenApiResponse {
    userName: string;
    role: Array<string>;
    exp: string;
    lastName: string;
    firstName: string;
    isAdmin: boolean;
}
// export interface IAuthor {
//     id: number;
//     name: string;
// }
// export interface ICategory {
//     id: number;
//     name: string;
//     isChecked: boolean;
// }
// export interface IBook {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     copies: 35;
//     edition: 3;
//     isbn: string;
//     url: string;
//     authorId: number;
//     publishedDate: Date;
//     pages: number;
//     publishingCompany: string;
//     rating: number;
//     categories: Array<number>;
// }
