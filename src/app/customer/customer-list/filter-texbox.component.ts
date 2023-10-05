import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  template: `filter : <input type="text" />`,
})
export class FilterTextBoxComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
