import { IAuthor } from './Author';
import { ICategory } from './Category';
export interface IBook {
    title: string;
    description: string;
    price: number;
    copies: number;
    edition: number;
    isbn: string;
    url: string;
    author: IAuthor;
    publishedDate: string;
    pages: number;
    publishingCompany: string;
    rating: number;
    categories: ICategory[];
    id: number;
}
