import { Injectable } from "@angular/core";
import { environment } from '../environments/environment';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SignupService{
    private apiurl:string = environment.apiurl;
    constructor(private http:Http){}
    signup(user){
        //console.log("signup service is running")
        let headers = new Headers()
        headers.append('content-type','application/json')
        let url=this.apiurl+'user/signup'
        return this.http.post(url,user,{headers:headers})
    }
}