import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-comp',
  template: '<p>{{idx}}: {{title}}</p>',
  styleUrls: []
})
export class MyComponent implements OnInit {

  @Input() title: string;
  @Input() idx: number;

  constructor() { }

  ngOnInit() {
  }

}
