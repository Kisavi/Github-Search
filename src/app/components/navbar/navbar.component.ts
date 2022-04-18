
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() submittedName:EventEmitter<string> = new EventEmitter()
  userInput: string | undefined;

  searchValue(userInput: string){
    if(userInput) {
      this.submittedName.emit(userInput)
      console.log(userInput);   
    }
  }

  ngOnInit(): void {
  }

}

