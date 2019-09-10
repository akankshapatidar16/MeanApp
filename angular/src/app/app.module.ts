import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookComponent } from './book/book.component';
import { AuthenticationService } from '../service/authentication.service';
import { BooksService } from '../service/books.service';
import { SignupService } from '../service/signup.service';
import { EditpopupComponent } from './editpopup/editpopup.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BookComponent,
    EditpopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, 
    MatDialogModule, 
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService, BooksService, SignupService],
  bootstrap: [AppComponent],
  entryComponents :[EditpopupComponent]
})
export class AppModule { }
