import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUserDto } from '../models/login-user.dto';
import { Observable } from 'rxjs';
import { NewUserDto } from '../models/new-user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = 'http://localhost:8080/user/';

  constructor(private httpClient: HttpClient) { }

  login(dto: LoginUserDto): Observable<any>{
    return this.httpClient.post<any>(this.userURL + 'login', dto);
  }

  singUp(dto: NewUserDto): Observable<any>{
    return this.httpClient.post<any>(this.userURL, dto);
  }

  isLogged(): boolean{
    if(this.getUserName()){
      return true;
    }
    return false;
  }

  setUserName(userName : string): void{
    localStorage.setItem('userName', userName);
  }

  getUserName(): string{
    const userNameFromStorage = localStorage.getItem('userName');
    if (userNameFromStorage !== null) {
      return userNameFromStorage;
    } else {
      return '';
    }
  }

  logOut(): void{
    localStorage.clear();
  }
}
