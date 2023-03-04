import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() myUser: User | any;

  constructor(private usersService: UsersService, private router: Router) {

  }

  ngOnInit(): void {
    
  }

  async deleteUser(pId: string) {
    let response = await this.usersService.deleteUser(pId);
    console.log(response);
    // alert('Usuario borrado correctamente');
  }
  confirm() {
    alert('Usuario borrado correctamente');
  }
}
