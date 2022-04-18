import { Profile } from './../../classes/profile/profile';
import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from 'src/app/services/profile-request/profile-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // userInput = "David"

  profile!:Profile

  constructor(private profileService:ProfileRequestService) { }

  ngOnInit(): void {
    this.profileService.profileRequest("Kisavi")
    // console.log(this.profileService.profile)
    this.profile = this.profileService.profile
    // console.log(this.profile)
  }

  receiveName($event: string) {
    let githubUserName = $event;
    this.profileService.profileRequest(githubUserName)
    console.log(githubUserName);
  }

  // userInput = "David"

}
