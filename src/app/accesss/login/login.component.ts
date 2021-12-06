import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

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
            localStorage.setItem('JWT-TOKEN', user.token)
            console.log('LOGIN EXITOSO : ', response);
            this.router.navigateByUrl('/');
          } else {
            alert("Credenciales inválidas, intente nuevamente!!")
          }
        })
    } else {
      alert("Complete las credenciales!!")
    }
  }
}
