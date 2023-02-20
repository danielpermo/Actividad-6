import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  myUsers: User[] = []

  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    this.myUsers = await this.usersService.getUsers();
    console.log(this.myUsers);
  }

}
