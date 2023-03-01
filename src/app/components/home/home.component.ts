import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myUsers: any = {}
  myUsersArr: User[] = []
  page: number = 1

  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    this.myUsers = await this.usersService.getUsers(this.page);
    this.myUsersArr = this.myUsers.results;
  }

}