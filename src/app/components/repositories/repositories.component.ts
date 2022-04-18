import { Component, OnInit, Input } from '@angular/core';
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

//    @Input() githubUsername = ''
//   //  console.log(githubUserName);

// repoSearch(userName: string){
//   this.repositoryService.repositories = []
//   this.repositoryService.repositoryRequest(userName)
//   this.repositories = this.repositoryService.repositories
//   console.log(userName);
// }

  receiveName($event: string) {
    let githubUserName = $event;
    this.repositoryService.repositories = []
    this.repositoryService.repositoryRequest(githubUserName)
    this.repositories = this.repositoryService.repositories
    console.log(githubUserName);
  }

}
