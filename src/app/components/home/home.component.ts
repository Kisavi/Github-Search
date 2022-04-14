import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from 'src/app/services/profile-request/profile-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private profileService:ProfileRequestService) { }

  ngOnInit(): void {
  }

}
