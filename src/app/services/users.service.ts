import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 
  private usersArr: User[] = []
  private apiUrl: string = "https://peticiones.online/api/users"
  apiObject: any = {}

  constructor(private httpClient: HttpClient) {

  }
  
  getUsers(): Promise<User[]> {
    // console.log(lastValueFrom(this.httpClient.get<User[]>(this.apiUrl))); //quitar esto
    this.apiObject = lastValueFrom(this.httpClient.get<User[]>(this.apiUrl));
    console.log(this.apiObject);
    return this.apiObject;
   }

}
