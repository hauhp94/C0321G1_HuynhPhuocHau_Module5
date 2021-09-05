import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Saving} from '../saving-manager/saving';
import {Vote} from './vote';

@Injectable({
  providedIn: 'root'
})
export class VoteServiceService {
  API_URL = 'http://localhost:8080/vote';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Vote[]> {
    return this.httpClient.get<Vote[]>(this.API_URL);
  }
}
