import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Profile } from '../../classes/profile/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  profile!: Profile

  constructor(private http: HttpClient) { }
}
