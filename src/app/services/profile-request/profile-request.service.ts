import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Profile } from '../../classes/profile/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  profile!: Profile

  constructor(private http: HttpClient) {
    this.profile = new Profile("", "", "", 0, 0);
  }

  profileRequest() {
    interface ApiResponse {
      name:string;
      login:string;
      bio:string;
      followers:number;
      following:number;
    }
  }
}
