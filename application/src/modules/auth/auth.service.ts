import { Injectable } from "@nestjs/common";
import { IUser } from "src/commen";



@Injectable()
  export class AuthenticationService {
  private users: IUser[] = [];
  constructor() {}

    signup(data: any):number {
    const id = Date.now();
    this.users.push({ ...data, id});
    return id;
  }}