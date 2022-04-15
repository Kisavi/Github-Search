import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Repository } from '../../classes/repository/repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryRequestService {

  repositories: Repository[] = []
  // repository!: Repository

  constructor(private http: HttpClient) {
    // this.repository = new Repository("", "", new Date, "", "", "", "", "")
  }

  repositoryRequest() {
    interface ApiResponse {
      name: string,
      description: string,
      updated_at: Date,
      language: string,
      stargazers_count: string,
      forks_count: string,
      url: string,
    }

    let promise = new Promise((resolve, reject) => {

      let header = new HttpHeaders().set(
        "Authorization", environment.apiKey
      );
      var base = `${environment.apiUrl}Kisavi/repos`;
      this.http.get<ApiResponse>(base, { headers: header }).toPromise().then((response: any) => {

        // this.repository = response

        for (let i in response) {
          let repository = new Repository("", "", new Date, "", "", "", "")
          // console.log(response[i].name);
          repository.name = response[i].name
          repository.description = response[i].description
          repository.updated_at = response[i].updated_at
          repository.language = response[i].language
          repository.stargazers_count = response[i].stargazers_count
          repository.forks_count = response[i].forks_count
          repository.html_url= response[i].html_url
          this.repositories.unshift(repository)
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
