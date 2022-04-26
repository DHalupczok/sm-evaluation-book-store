import { Component, OnInit } from '@angular/core';

export interface Book {
  id: number
  title: string
  author: string
  publishYear: string

}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})


export class BookListComponent implements OnInit {
books: Book[] = [
  {
    id:1,
    title: "Persuader (Jack Reacher)",
    author: 'Lee Child',
    publishYear: '2003,2007,2004,2005'
  },
  {
    id:2,
    title: "Without Fail (Jack Reacher)",
    author: 'Lee Child',
    publishYear: '2003,2002,2007,2004,2006'
  },
  {
    id:3,
    title: "Persuader (Jack Reacher)",
    author: 'Lee Child',
    publishYear: '2003,2007,2004,2005'
  },
  {
    id:4,
    title: "Without Fail (Jack Reacher)",
    author: 'Lee Child',
    publishYear: '2003,2002,2007,2004,2006'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
