import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../model/book';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()
  book: Book;
  @Output() 
  edit = new EventEmitter<Book>();
  @Output() 
  delete = new EventEmitter<number>();

  editing = false;
  editBook: Book;

  ngOnInit() {
    this.editBook = { ...this.book };
  }

  onEdit() {
    this.editing = true;
  }

  onSave() {
    this.edit.emit(this.editBook);
    this.editing = false;
  }

  onCancel() {
    this.editing = false;
    this.editBook = { ...this.book };
  }

  onDelete() {
    this.delete.emit(this.book.id);
  }
}
