import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-class-change',
  templateUrl: './learn-class-change.component.html',
  // styleUrls: ['./learn-class-change.component.css']
  styles: [`
    .greaterThan {
      color: red;
    }
  `]
})
export class LearnClassChangeComponent implements OnInit {


  myRandomNumber: number;



  constructor() {


    this.guessNumber();
   }

  ngOnInit() {


  }

  guessNumber() {

    this.myRandomNumber = Math.random() * 10;

    this.myRandomNumber = Math.round(this.myRandomNumber);

    console.log(this.myRandomNumber);


  }

}
