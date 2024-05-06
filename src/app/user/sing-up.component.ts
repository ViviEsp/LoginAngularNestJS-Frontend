import { Component } from '@angular/core';
import { NewUserDto } from '../models/new-user.dto';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent {

  user: NewUserDto = { userName: '', locationName: null, password: ''};
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

  onRegister(): void{
    this.user = new NewUserDto(this.userName, this.locationName, this.password);
    this.userService.singUp(this.user).subscribe(
      data =>{
        this.toastr.success(data.message, 'Success', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/login']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
