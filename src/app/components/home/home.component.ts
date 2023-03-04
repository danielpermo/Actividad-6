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

  // page: number = 1
  // active: boolean = false
  // pagination: string = "1"

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

  // async getPage($event: any) {
  //   this.pagination = $event.target.innerText;
  //   if(this.pagination === "Next") {
  //     this.page++;
  //     this.active = !this.active;
  //   }else if (this.pagination === "Previous"){
  //     this.page--;
  //     this.active = !this.active;
  //   }else if(this.pagination === "1"){
  //     this.page = 1;
  //     this.active = false;
  //   }else if(this.pagination === "2"){
  //     this.page = 2
  //     this.active = true
  //   }
  //   this.myUsers = await this.usersService.getUsers(this.page);
  //   this.myUsersArr = this.myUsers.results;
  // }

}