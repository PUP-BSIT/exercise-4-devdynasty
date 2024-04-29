import { Component } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  booksToChild: Book[] = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960,
      genre: "Southern Gothic"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949,
      genre: "Dystopian"
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedYear: 1813,
      genre: "Romance"
    }
  ]
  
  newId: number;
  newTitle: string;
  newAuthor: string;
  newPublishedYear: number;
  newGenre: string;

  isClickToAddBook = false;

  showForm() {
    this.isClickToAddBook = !this.isClickToAddBook;
  }

  
  addNewBook() {
    this.booksToChild.push({
      id: this.newId,
      title: this.newTitle,
      author: this.newAuthor,
      publishedYear: this.newPublishedYear,
      genre: this.newGenre
    })
    this.newId = null
    this.newTitle = '';
    this.newAuthor = '';
    this.newPublishedYear = null;
    this.newGenre = '';
  }
}