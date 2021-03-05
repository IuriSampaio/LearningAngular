import { Injectable } from "@angular/core";
import { IUser } from "src/models/User";

const e = () => {
  return true;
};

const s = () => {
  return { learn: true, subject: 'mathematic' };
};

@Injectable()
export class UsersService {

  private users: Array<IUser> = [
    {
      id: 1,
      name: 'Iuri',
      age: 18,
      eat: e,
      study: s
    },
    {
      id: 2,
      name: 'Iolanda',
      age: 18,
      eat: e,
      study: s
    },
    {
      id: 3,
      name: 'Lucas',
      age: 19,
      eat: e,
      study: s
    },
    {
      id: 4,
      name: 'Iuri',
      age: 18,
      eat: e,
      study: s
    },
    {
      id: 5,
      name: 'Iolanda',
      age: 18,
      eat: e,
      study: s
    },
    {
      id: 6,
      name: 'Lucas',
      age: 19,
      eat: e,
      study: s
    },
  ];

  getUsers = (): Array<IUser> => {
    return this.users;
  }

  addUser = (user: IUser) => {
    this.users.push(user);
  }

  updateUser = (user: IUser) => {
    this.users[this.users.length + 1 - user.id] = user;
  }

  deleteUser = (id: number) => {
    this.users.slice(this.users.length - id, this.users.length + id);
  }

}
