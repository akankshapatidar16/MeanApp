import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../service/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname: string
  lastname: string
  email: string
  Username: string
  password: string
  pincode: string
  gender: string
  country: string
  user

  constructor(private signupServe: SignupService, private router: Router) { }

  ngOnInit() {
    /*this.firstname = "akanksha"
    this.lastname = "patidar"
    this.email = "akankshapatidar16@gmail.com"
    this.pincode = "458553"*/
  }
  onSignupClick() {
    this.user = {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "username": this.Username,
      "password": this.password,
      "gender": this.gender,
      "country": this.country,
      "pincode": this.pincode
    }
    //console.log(this.user);
    this.signupServe.signup(this.user).subscribe((res) => {
      console.log(res.status)
      if (res.status != 201) 
      console.log("registration fail")
      else {
        this.router.navigate(["login"])
      }
    });
  }
}