import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Book {
  id: number
  title: string
  isbn: string
  author: string
  publishYear: string

}

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})

export class BookSearchComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  books: Book[] = []
  searchedBook: string = ''
  bookQuantity: number = 0

  modifySearchedBook(payload: Event): void {
    this.searchedBook = (payload.target as HTMLInputElement).value
  }

  getProperSearchQuery(): string {
    return `https://openlibrary.org/search.json?title=${this.searchedBook.toLocaleLowerCase().split(" ").join('+')}&mode=everythink`
  }

  searchForBooks() {
    this.http.get<any>(this.getProperSearchQuery()).subscribe(
      response => {
        console.warn("mój response to ", response)
        this.bookQuantity = response.docs.length;
        this.books = response.docs.map((item: any, index: number) => ({
          id: index,
          title: item.title,
          isbn: item.isbn?.[0] || '',
          author: item?.author_name?.[0] || '',
          publishYear: item?.publish_year?.join()
        }))
      }
    )
  }

  ngOnInit(): void {
  }

}
