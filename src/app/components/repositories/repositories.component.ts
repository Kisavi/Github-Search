import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/classes/repository/repository';
import { RepositoryRequestService } from 'src/app/services/repository-request/repository-request.service';
import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  faCodeFork = faCodeFork;
  faStar = faStar;

  repositories!: Repository[]

  constructor(private repositoryService: RepositoryRequestService) { }

  ngOnInit(): void {
    this.repositoryService.repositories = []
    this.repositoryService.repositoryRequest("Kisavi")
    this.repositories = this.repositoryService.repositories
    // console.log(this.repository);
  }

  receiveName($event: string) {
    let githubUserName = $event;
    this.repositoryService.repositoryRequest(githubUserName)
    console.log(githubUserName);
  }
  
}
