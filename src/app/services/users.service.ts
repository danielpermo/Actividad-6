import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private apiUrl: string = "https://peticiones.online/api/users/"
  apiObject: any = {}
  userObject: any = {}

  constructor(private httpClient: HttpClient) {

  }
  
  getUsers(pPage: number = 1): Promise<any> {
    this.apiObject = lastValueFrom(this.httpClient.get<any>(`${this.apiUrl}?page=${pPage}`));
    return this.apiObject;
  }

  getUserbyId(pId: string): Promise<any> {
    this.userObject = lastValueFrom(this.httpClient.get<User>(this.apiUrl+`/${pId}`));
    return this.userObject;
  }

  createUser(pUser: any) {
    return lastValueFrom(this.httpClient.post<User>(this.apiUrl, pUser));
  }

  updateUser(pUser: User) {
    return lastValueFrom(this.httpClient.put<User>(this.apiUrl+`${pUser._id}`, pUser));
  }

  deleteUser(pId: string) {
    return lastValueFrom(this.httpClient.delete<User>(this.apiUrl+`/${pId}`));
  }
  
}
