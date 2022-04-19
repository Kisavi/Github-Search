import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Repository } from '../../classes/repository/repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryRequestService {

  repositories: Repository[] = []

  constructor(private http: HttpClient) {}

  repositoryRequest(githubUserName: string) {
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

      var base = `${environment.apiUrl}${githubUserName}/repos`;
      this.http.get<ApiResponse>(base).toPromise().then((response: any) => {

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

        resolve(response)
      },
        error => {

          reject(error)
        })
    })
    return promise
  }
}
