// import { ProfileRequestService } from './../../services/profile-request/profile-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchValue(userInput: string) {
    if (userInput) {
      console.log(userInput)
      // return userInput
    }
  }

  // constructor(private _profileRequestService: ProfileRequestService) {}

  ngOnInit(): void {
  }

}
