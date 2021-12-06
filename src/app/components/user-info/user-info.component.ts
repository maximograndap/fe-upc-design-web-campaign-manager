import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: string
  userDetail: string
  constructor(private router: Router) { }

  ngOnInit(): void {
    const ui = localStorage.getItem('USER-INFO')
    if (ui) {
      const userInfo: IUser = JSON.parse(ui)
      this.user = `${userInfo.nombrePersona} ${userInfo.apellidoPersona}`
      this.userDetail = `${userInfo.nombreusuario} (${userInfo.idUsuario}) | ${userInfo.numeroDocumento}`
    }
  }

  signOut() {
    localStorage.removeItem('USER-INFO')
    localStorage.removeItem('JWT-TOKEN')
    this.router.navigate(['login'])

  }

}
