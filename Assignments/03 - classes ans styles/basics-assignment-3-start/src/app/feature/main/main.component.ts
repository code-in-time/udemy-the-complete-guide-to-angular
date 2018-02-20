import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // -1 hidden
  // 1 visible
  paragraphVisible = -1;
  logButtnClickArr: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  btnClickHandler() {
    console.log('click', this);
    // toggle
    this.paragraphVisible *= -1;

    this.logButtnClickArr.push(
        'time:' + new Date() + '  -------  paragraphVisible:' + this.paragraphVisible);

      console.log(this.logButtnClickArr);
  }

}
