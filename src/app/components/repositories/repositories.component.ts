import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/classes/repository/repository';
import { RepositoryRequestService } from 'src/app/services/repository-request/repository-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repository!:Repository

  constructor(private repositoryService:RepositoryRequestService) { }

  ngOnInit(): void {
    this.repositoryService.repositoryRequest
    this.repository = this.repositoryService.repository
  }

}
