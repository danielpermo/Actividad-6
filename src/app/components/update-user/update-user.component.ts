import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  updateForm: FormGroup
  pId: string = "";
  myUser: any = {};
  
  constructor( private activatedRoute: ActivatedRoute, private usersService: UsersService ) {
    this.updateForm = new FormGroup({
      name: new FormControl("", [
        Validators.required
      ]),
      surname: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required
      ]),
      image: new FormControl("", [
        Validators.required
      ])
    }, []);
  }
  
  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pId=params['userId']
    })
    this.myUser = await this.usersService.getUserbyId(this.pId);
  }

  
  
  saveDataUpdateForm() {
    console.log(this.updateForm.value);
  }
}
