import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  // styleUrls: ['./custom.component.css']
  styles: ['.container{ background: red;}']
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
