import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myUsersArr: User[] = []
  currentPage: number = 1
  totalPages: number = 1


  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.goToPage()
  }

  async goToPage(pPage: number = 1): Promise<void> {
    try {
      let response = await this.usersService.getUsers(pPage);
      this.currentPage = response.page;
      this.totalPages = response.total_pages;
      this.myUsersArr = response.results;
    }
    catch (error){
      console.log(error); 
    }
  }

}