import { Component, OnInit } from '@angular/core';
import { RepositoryRequestService } from 'src/app/services/repository-request/repository-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor(private repositoryService:RepositoryRequestService) { }

  ngOnInit(): void {
  }

}
