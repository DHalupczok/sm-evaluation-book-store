import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
@Component({
  selector: 'app-results-quantity',
  templateUrl: './results-quantity.component.html',
  styleUrls: ['./results-quantity.component.scss']
})
export class ResultsQuantityComponent implements OnInit {
@Input() quantity= 0 as number
  constructor() { }

  ngOnInit(): void {
  }

}
