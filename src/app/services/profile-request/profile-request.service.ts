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

      var base = `${environment.apiUrl}Kisavi`;
      this.http.get<ApiResponse>(base, { headers: header }).toPromise().then((response: any) => {

        this.profile.avatar_url = response.avatar_url
        this.profile.name = response.name
        this.profile.login = response.login
        this.profile.bio = response.bio
        this.profile.followers = response.followers
        this.profile.following = response.following

        // console.log(response)
        resolve(response)
      },
        error => {

          reject(error)
        })
    })

    return promise
  }
}
