import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BooksService } from '../../service/books.service';

@Component({
  selector: 'app-editpopup',
  templateUrl: './editpopup.component.html',
  styleUrls: ['./editpopup.component.css']
})
export class EditpopupComponent implements OnInit {
  item:string[]
  
  @Output() updated: EventEmitter<string> = new EventEmitter<string>();

  constructor(private bookService: BooksService,
    public dialogRef: MatDialogRef<EditpopupComponent>,@Inject(MAT_DIALOG_DATA)data) { 
    this.item =JSON.parse(JSON.stringify(data))
  }

  ngOnInit() {
  }

  onClickOk(updatedBook: any) { 
      var bookSansID = Object.assign({}, updatedBook);
      delete bookSansID._id;    
      //console.log(clone)
      this.bookService.updateBooks(updatedBook._id, bookSansID).subscribe(
        (res) => {
          if(res.ok == true) {
            console.log('emiting')
            this.updated.emit('updated');                 
           }
        }
      );  
  }
}
