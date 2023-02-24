import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {

  newUserForm: FormGroup

  constructor() {
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
    this.newUserForm.reset();
  }

  checkControl(pControlName: string, pError: string): boolean {
    if(this.newUserForm.get(pControlName)?.hasError(pError) && this.newUserForm.get(pControlName)?.touched){
      return true;
    }
    return false;
  }

}
