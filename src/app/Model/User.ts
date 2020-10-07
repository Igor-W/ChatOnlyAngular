export class User {
  id: number;
  userName: string;
  name: string;
  surname: string;
  gender: string;
  telephoneNumber: string;
  email: string;
  position: string;
  isAdmin: boolean;
  avatarPath: string;
  isAuthorized: boolean;


  constructor(id: number, userName: string, name: string, surname: string, gender: string, telephoneNumber: string, email: string, position: string, isAdmin: boolean, avatarPath: string, isAuthorized: boolean) {
    this.id = id;
    this.userName = userName;
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.telephoneNumber = telephoneNumber;
    this.email = email;
    this.position = position;
    this.isAdmin = isAdmin;
    this.avatarPath = avatarPath;
    this.isAuthorized = isAuthorized;
  }
}
