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
  active: boolean = false
  pagination: string = "1"

  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    this.myUsers = await this.usersService.getUsers(this.page);
    this.myUsersArr = this.myUsers.results;
  }

  async getPage($event: any) {
    this.pagination = $event.target.innerText;
    if(this.pagination === "Next") {
      this.page++;
      this.active = !this.active;
    }else if (this.pagination === "Previous"){
      this.page--;
      this.active = !this.active;
    }else if(this.pagination === "1"){
      this.page = 1;
      this.active = false;
    }else if(this.pagination === "2"){
      this.page = 2
      this.active = true
    }
    this.myUsers = await this.usersService.getUsers(this.page);
    this.myUsersArr = this.myUsers.results;
  }

}