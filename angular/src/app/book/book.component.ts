import { Component, OnInit } from '@angular/core';
import { BooksService  } from "../../service/books.service";
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EditpopupComponent } from '../../app/editpopup/editpopup.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookname:string
  book
  books:any
  constructor(private bookServe:BooksService, private diloge:MatDialog) { }

  ngOnInit() {
    this.loadBooks();
  }

  delete(book:any){
      this.bookServe.deleteBooks(book).subscribe((res)=>{
      console.log(res)
      this.books= this.books.filter(books=>books!==book)
    })
  }

  loadBooks() {
    this.bookServe.books().subscribe((res) => {
      this.books = res.json();
    });
  }
  
  editBooksDialog(book:any){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.autoFocus = true
    dialogConfig.data = book
    let dialogRef = this.diloge.open(EditpopupComponent, dialogConfig)
    const sub = dialogRef.componentInstance.updated.subscribe(() => {
      console.log('inside onupdated');
      this.loadBooks();
    });
    dialogRef.afterClosed().subscribe(() => {
      /*console.log('loading books')
      this.loadBooks();*/
    });

    }
}