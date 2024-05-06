import { LocationName } from "./location.enum";

export class LoginUserDto {
    userName: string;
    locationName: LocationName| null | "";
    password: string;

    constructor(userName: string, locationName: LocationName| null | "", password: string){
        this.userName = userName;
        this.locationName = locationName;
        this.password = password;
    }
}