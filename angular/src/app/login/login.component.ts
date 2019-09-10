import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  authfailure:boolean =false
  username: string
  password: string
  user
  isLoginDisable: boolean
  color: string = "black"

  constructor(private authServe:AuthenticationService, private router:Router) {
   }

  ngOnInit() {
   this.username = "dinky16"
    this.password = "1234"
    this.isLoginDisable = false
  }
  onLoginClick() {
    this.user = {   
      "username": this.username,
      "password": this.password
    }
    //console.log(this.user)
    this.authServe.authenticate(this.user).subscribe((response)=>{
      console.log(response.json())
      let result = response.json()
      if(result.authenticate)
      {
        this.authfailure = false;
        this.router.navigate(["books"])
      }
      else{
        this.authfailure = true;
      }
    });
  }
}