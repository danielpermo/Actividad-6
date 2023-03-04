import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  UserForm: FormGroup
  myUser!: User;
  title: string = "NUEVO";
  buttonName: string = "Guardar";
  msg: string = "";
  type: string = ""
  
  constructor( private activatedRoute: ActivatedRoute, private usersService: UsersService ) {
    this.UserForm = new FormGroup({
      name: new FormControl("", [
        Validators.required
      ]),
      lastname: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      image: new FormControl("", [
        Validators.required
      ])
    }, []);
  }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      let pId=params['userId']
      if(pId){
        this.title = "ACTUALIZAR";
        this.buttonName = "Actualizar";
        this.myUser = await this.usersService.getUserbyId(pId);
        this.UserForm = new FormGroup({
          id: new FormControl(this.myUser?._id, []),
          name: new FormControl(this.myUser?.first_name, [
            Validators.required
          ]),
          lastname: new FormControl(this.myUser?.last_name, [
            Validators.required
          ]),
          email: new FormControl(this.myUser?.email, [
            Validators.required
          ]),
          image: new FormControl(this.myUser?.image, [
            Validators.required
          ])
        }, []);
      }
    })
  }
  
  checkControl(pControlName: string, pError: string): boolean {
    if(this.UserForm.get(pControlName)?.hasError(pError) && this.UserForm.get(pControlName)?.touched){
      return true;
    }
    return false;
  }
  
  async getDataForm() {
    let user: User = this.UserForm.value;
    if(user.id) {
      try {
        let user: User = this.UserForm.value;
        let response = await this.usersService.updateUser(user);
        if(response.id) {
          this.msg = "El usario ha sido actualizado con éxito.";
          this.type = 'success';
          console.log(response);
        }
      }
      catch (err) {
        console.log(err);
      }
    } else {
      try {
        let user: User = this.UserForm.value;
        let response = await this.usersService.createUser(user);
        if(response.id) {
          this.msg = "El usario ha sido registrado con éxito.";
          this.type = 'success';
          console.log(response);
        }
      }
      catch (err) {
        console.log(err);
      }

    }

  }
}

