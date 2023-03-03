import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit{

  myUser: any = {};
  
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let pId: string = params['userId']
      this.myUser = await this.usersService.getUserbyId(pId);
    })
  }

  async deleteUser(pId: string) {
    let response = await this.usersService.deleteUser(pId);
    console.log(response); 
    alert('Usuario borrado correctamente'); 
  }


}
