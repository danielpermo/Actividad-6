import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2'

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
    let response: any = await this.usersService.getUserbyId(pId);
    
    Swal.fire({
      title: `¿Desea borrar el usuario ${response.first_name} ?`,
      text: "¿Si lo haces, no podrás volver atrás!",
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
