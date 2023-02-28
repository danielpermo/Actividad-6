import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {

  newUserForm: FormGroup

  constructor(private usersService: UsersService) {
    this.newUserForm = new FormGroup({
      name: new FormControl("", [
        Validators.required
      ]),
      lastname: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ]),
      image: new FormControl("", [
        Validators.required
      ])
    }, []);
  }

  saveDataForm() {
    console.log(this.newUserForm.value);
    //  COMPROBAR SI ESTO ESTÁ BIEN
    this.usersService.postUser(this.newUserForm.value);
    this.newUserForm.reset();
  }

  checkControl(pControlName: string, pError: string): boolean {
    if(this.newUserForm.get(pControlName)?.hasError(pError) && this.newUserForm.get(pControlName)?.touched){
      return true;
    }
    return false;
  }

}
