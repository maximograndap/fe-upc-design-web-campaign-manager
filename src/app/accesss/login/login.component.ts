import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IResponse } from 'src/app/interfaces/response.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  matSnackConfig: MatSnackBarConfig = {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: 2500,
  }

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private snackBar: MatSnackBar,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const nombreUsuario = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.loginService.login(nombreUsuario, password)
        .subscribe((response: IResponse) => {
          if (response.issuccess) {
            const user: IUser = response.data as IUser;
            localStorage.setItem('JWT-TOKEN', JSON.stringify(user.token))
            delete user.token
            localStorage.setItem('USER-INFO', JSON.stringify(user))
            this.snackBar.open(`✅ Inicio de sesión exitoso, bienvenido ${user.nombrePersona} ${user.apellidoPersona} !!`, undefined, this.matSnackConfig);
            this.router.navigateByUrl('/');
          } else {
            this.snackBar.open('⚠️ Credenciales inválidas, intente nuevamente!!', undefined, this.matSnackConfig);
          }
        })
    } else {
      this.snackBar.open('⚠️ Complete las credenciales!!', undefined, this.matSnackConfig);
    }
  }

  fnProximamente(option: number) {
    if (option === 1) {
      this.snackBar.open('⚠️ Esta opción estará habilitado proximamente !', undefined, this.matSnackConfig);
    } else {
      this.snackBar.open('⚠️ Consulte con el administrador "danielhuaman@outlook.com" para recuperar su contraseña!', undefined, this.matSnackConfig);
    }
  }
}
