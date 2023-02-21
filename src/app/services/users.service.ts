import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private apiUrl: string = "https://peticiones.online/api/users"
  apiObject: any = {}

  constructor(private httpClient: HttpClient) {

  }
  
  getUsers(): Promise<any> {
    this.apiObject = lastValueFrom(this.httpClient.get<any>(this.apiUrl));
    return this.apiObject;
   }

}
