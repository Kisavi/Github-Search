// import { ProfileRequestService } from './../../services/profile-request/profile-request.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //method 1
  @Output() submittedName:EventEmitter<string> = new EventEmitter()
  userInput: string | undefined;
  // name: any=""

  searchValue(userInput: string){
    if(userInput) {
      this.submittedName.emit(userInput)
      console.log(userInput);   
    }
  }

  // receiveName() {
  //   this.name = this.userInput;
  //   console.log(this.name);
  // }


  // searchValue(userInput: string) {
  //   if (userInput) {
  //     console.log(userInput)
  //     // return userInput
  //   }
  // }

  //method 2
  // name: string = "";
  // @Output() nameEmitter = new EventEmitter < string > (); 

  // getInput() {
  //   this.nameEmitter.emit(this.name);  
  //   console.log(this.name);
    
  // } 



  // constructor(private _profileRequestService: ProfileRequestService) {}

  ngOnInit(): void {
  }

}
// function newEventEmitter<T>() {
//   throw new Error('Function not implemented.');
// }

