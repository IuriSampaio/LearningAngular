import { Component } from "@angular/core";
import { IUser } from "src/models/User";
import { UsersService } from './users.service';

@Component({
  selector: 'user-crud',
  providers: [
    UsersService
  ],
  templateUrl: 'users.component.html',
  styleUrls: ['./users.component.scss']
})
export class Users {

  users: Array<IUser>;

  constructor() {
    this.users = new UsersService().getUsers();
  }

}