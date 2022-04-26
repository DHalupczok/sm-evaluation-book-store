import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../book-list/book-list.component";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
@Input() book: Book = {} as Book
  @Input() orderNumber = 0 as number

  constructor() { }

  ngOnInit(): void {
  }

}
