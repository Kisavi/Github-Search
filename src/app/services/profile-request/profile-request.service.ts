import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Profile } from '../../classes/profile/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  profile!: Profile

  constructor(private http: HttpClient) {
    this.profile = new Profile("", "", "", "", 0, 0);
  }

  profileRequest() {
    interface ApiResponse {
      avatar_url: string;
      name: string;
      login: string;
      bio: string;
      followers: number;
      following: number;
    }

    let promise = new Promise((resolve, reject) => {
      
      let header = new HttpHeaders().set(
        "Authorization", environment.apiKey
      );
      
      this.http.get<ApiResponse>(environment.apiUrl,{headers:header}).toPromise().then((response: any) => {
  
        this.profile = response
        
        console.log(this.profile)
        resolve(response)
      },
        error => {

          reject(error)
        })
    })
    
    return promise
  }
}
