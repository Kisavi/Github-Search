import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Repository } from '../../classes/repository/repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryRequestService {

  repository!: Repository

  constructor(private http: HttpClient) {
    this.repository = new Repository("", "", new Date, "", "", "")
  }

  repositoryRequest() {
    interface ApiResponse {
      name: string,
      description: string,
      updated_at: Date,
      language: string,
      stargazers_count: string,
      forks_count: string,
    }

    let promise = new Promise((resolve, reject) => {

      let header = new HttpHeaders().set(
        "Authorization", environment.apiKey
      );

      this.http.get<ApiResponse>(environment.apiUrl, { headers: header }).toPromise().then((response: any) => {

        this.repository.name = response.name
        this.repository.description = response.description
        this.repository.updated_at = response.updated_at
        this.repository.language = response.language
        this.repository.stargazers_count = response.stargazers_count
        this.repository.forks_count = response.forks_count

        resolve(response)
      },
        error => {

          reject(error)
        })
    })
    return promise
  }
}
