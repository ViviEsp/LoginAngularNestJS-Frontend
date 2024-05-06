import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  //isLogged = false;

  constructor(
    private userService : UserService,
    private router : Router
  ){ }

  ngOnInit(): void{
    //this.userService.isLogged()? this.isLogged = true : this.isLogged = false;
  }

  //logOut(): void{
    //this.userService.logOut();
    //this.router.navigate(['/login']);
  //}
}
