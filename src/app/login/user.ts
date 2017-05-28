export class UserLogin {
  constructor(
    public _username: string,
    public _password: string,
    public _remember: string,
    public _xsrf: string
  ) {  }
}

export class User {
  constructor(
    public _id: Number,
    public _username: string,
    public _xsrf: string,
    public _email: string
  ) { }
}