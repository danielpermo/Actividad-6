import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit{

  pId: string = "";
  myUser: any = {};
  
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pId=params['userId']
    })
    this.myUser = await this.usersService.getUserbyId(this.pId);
  }


}
