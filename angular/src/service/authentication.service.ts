import { Injectable } from "@angular/core";
import { Http, Headers} from "@angular/http";
import { environment } from "../environments/environment";

@Injectable() 
export class AuthenticationService{
private apiurl:string = environment.apiurl;
    constructor(private http:Http){}
    authenticate(user){
        let headers = new Headers()
        headers.append('content-type','application/json')
        let url = this.apiurl+'user/authenticate';
        return this.http.post(url, user, {headers:headers})   
    }
}