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

  saveDataForm() {
    console.log(this.newUserForm.value);
  }

}
