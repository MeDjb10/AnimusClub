import { Formation } from "./formation";

export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public email: string,
    public isAdmin: boolean,
    public isMember: boolean,
    public formation : Formation[],
  ) {}
}
