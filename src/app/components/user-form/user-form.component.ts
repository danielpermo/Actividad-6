import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  UserForm: FormGroup
  pId: string = "";
  myUser: any = {};
  title: string = "";
  buttonName: string = "";
  
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
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
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
    console.log(this.pId)
    if(this.pId === "undefined"){
      this.title = "NUEVO USUARIO";
      this.buttonName = "Guardar";
    }
    this.title = "ACTUALIZAR USUARIO";
    this.buttonName = "Actualizar";
    this.UserForm = new FormGroup({
      name: new FormControl(this.myUser.first_name, [
        Validators.required
      ]),
      lastname: new FormControl(this.myUser.last_name, [
        Validators.required
      ]),
      email: new FormControl(this.myUser.email, [
        Validators.required
      ]),
      image: new FormControl(this.myUser.image, [
        Validators.required
      ])
    }, []);
  }
  
  checkControl(pControlName: string, pError: string): boolean {
    if(this.UserForm.get(pControlName)?.hasError(pError) && this.UserForm.get(pControlName)?.touched){
      return true;
    }
    return false;
  }
  

  saveDataForm() {
    console.log(this.UserForm.value);
    //  COMPROBAR SI ESTO ESTÁ BIEN
    alert("Usario registrado con éxito.")
    this.usersService.postUser(this.UserForm.value);
    this.UserForm.reset();
  }
  
  saveDataUpdateForm() {
    console.log(this.UserForm.value);
  }
}

