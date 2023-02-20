import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  updateForm: FormGroup

  constructor() {
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

  saveDataUpdateForm() {
    console.log(this.updateForm.value);
  }

}
