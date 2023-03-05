import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

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
    let response: any = await this.usersService.getUserbyId(pId);
    
    Swal.fire({
      title: `¿Desea borrar el usuario ${response.first_name}?`,
      text: "Si lo haces, ¡no podrás volver atrás!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#082147',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar'
    }).then(async(result) => {
      if (result.isConfirmed) {
        response = await this.usersService.deleteUser(response._id);
        console.log(response);
        
        Swal.fire(
          '¡Eliminado!',
          `El usuario ${response.first_name} ha sido borrado correctamente`,
          'success'
        )
      }
    })
  }
}
