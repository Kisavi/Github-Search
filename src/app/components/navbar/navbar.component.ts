import { ProfileRequestService } from './../../services/profile-request/profile-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _profileRequestService:ProfileRequestService
  ) { 
    // this.getProfileInfo()
  }

  getProfileInfo(){
    this._profileRequestService.profileRequest()
  }

  ngOnInit(): void {
  }

}
