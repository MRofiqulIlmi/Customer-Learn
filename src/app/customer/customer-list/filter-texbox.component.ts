import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  //banana-in-a-box is for two way data binding,
  //ngModel directive used to bind the values of the HTML controls (input, select, and textarea) and stores the required user value.
  template: `filter : <input type="text" [(ngModel)]="filter" />`,
})
export class FilterTextBoxComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  private _filter: string = '';
  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    // event emitter class and emit function use for emit the change happen, so the parent a.k.a customer-list know every single value in child was change
    this.changed.emit(this.filter); //Raise change event
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
}
