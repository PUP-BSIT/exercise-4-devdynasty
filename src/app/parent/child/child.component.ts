import { Component, Input } from '@angular/core';
import { Book } from '../../../model/book';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()
  book: Book;
}
