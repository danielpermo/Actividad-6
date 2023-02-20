import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 
  private usersArr: User[] = []

  constructor() {
  }
  
  getUsers() {
    console.log(this.usersArr); //Hay que quitar este console.log
    return this.usersArr;
   }

}
