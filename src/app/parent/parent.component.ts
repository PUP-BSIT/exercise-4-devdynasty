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
}
