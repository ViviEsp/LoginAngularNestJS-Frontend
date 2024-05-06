import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginUserDto } from '../models/login-user.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: LoginUserDto = { userName: '', locationName: null, password: ''};
  userName = '';
  locationName = null;
  password = '';

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onLogin(): void {
    this.userService.setUserName(this.userName);
    console.log(localStorage.getItem('userName'));
    this.user = new LoginUserDto(this.userName, this.locationName, this.password);
    this.userService.login(this.user).subscribe(
      data =>{
        this.toastr.success(data.message, 'Success', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });

        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }
}
