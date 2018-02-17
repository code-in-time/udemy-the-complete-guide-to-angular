import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  username: string = '';
  // // Change the value depending on if the user name is empty of not.
  // usernameEmpty: boolean = this.checkIfInputIsEmpty();
  // usernameEmpty: boolean =  false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * The click handler for the reset button
   * @param e
   */
  clickBtnReset(e): void {
    // Resetn the user name to be an empty string
    this.username = '';
  }

}
