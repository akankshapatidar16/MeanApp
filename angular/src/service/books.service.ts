import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { environment } from "../environments/environment";

@Injectable()
export class BooksService {

    private apiurl: string = environment.apiurl;
    constructor(private http: Http) { }
        
    books() {
        let headers = new Headers()
        headers.append('content-type', 'application/json')
        let url = this.apiurl + 'books?country=Indiaw'
        console.log(url)
        return this.http.get(url, { headers: headers });
    }

    deleteBooks(book) {
        let id = book._id;
        console.log(id)
        let header = new Headers()
        header.append('content-type', 'application/json')
        let url = this.apiurl + 'books/'+id
        console.log(url)
        return this.http.delete(url);
    }

    updateBooks(id, book) {
        let url = this.apiurl + '/books/' + id;
        console.log("booksUrl", url)
        let header = new Headers;
        header.append('content-type', 'application/json')
        return this.http.put(url, book, {headers: header});
    }
}