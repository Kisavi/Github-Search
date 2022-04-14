import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  }
}
