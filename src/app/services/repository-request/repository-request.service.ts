import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Repository } from '../../classes/repository/repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryRequestService {

  // repository: Repository[]
  repository!: Repository

  constructor(private http: HttpClient) {
    this.repository = new Repository("", "", new Date, "", "", "", "", "")
  }

  repositoryRequest() {
    interface ApiResponse {
      name: string,
      description: string,
      updated_at: Date,
      language: string,
      stargazers_count: string,
      forks_count: string,
      stargazers_url: string,
      forks_url: string,
    }

    let promise = new Promise((resolve, reject) => {

      let header = new HttpHeaders().set(
        "Authorization", environment.apiKey
      );

      this.http.get<ApiResponse>(environment.apiUrl, { headers: header }).toPromise().then((response: any) => {

        for (let i in response) {
          // console.log(response[i].name);
          this.repository.name = response[i].name
          // this.repository.name = response.name
          this.repository.description = response[i].description
          this.repository.updated_at = response[i].updated_at
          this.repository.language = response[i].language
          this.repository.stargazers_count = response[i].stargazers_count
          this.repository.forks_count = response[i].forks_count
          this.repository.url = response[i].forks_url
          this.repository.stargazers_url = response[i].stargazers_url
          // console.log(this.repository.forks_count )
        }
        console.log(response[0]); 
        // this.repository.name = response.name
        // this.repository.description = response.description
        // this.repository.updated_at = response.updated_at
        // this.repository.language = response.language
        // this.repository.stargazers_count = response.stargazers_count
        // this.repository.forks_count = response.forks_count

        // let info = response.map((response: any) => {
        //   console.log(response.language)
        // })

        // for (let i in response) {
        //   console.log(response[i].name);

        // }

        // console.log(this.response[1]);
        // console.log(response.length);

        resolve(response)
      },
        error => {

          reject(error)
        })
    })
    return promise
  }
}
