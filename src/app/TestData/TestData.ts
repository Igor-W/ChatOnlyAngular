import {User} from '../Model/User';


export class TestData {
  static users: User[] = [
    {
      id: 1,
      userName: 'IS123',
      surname: 'Stoian',
      gender: 'Mele',
      telephoneNumber: '+40736022065',
      email: 'igori.stoian@gmail.com',
      position: 'Junior Developer',
      name: 'Igor',
      isAdmin: false,
      avatarPath: 'assets/images/avatar.jpg',
      isAuthorized: true
    },
    {
      id: 2,
      userName: 'AL1223',
      surname: 'Ronaldo',
      gender: 'Mele',
      telephoneNumber: '+44736822065',
      email: 'ronaldo@gmail.com',
      position: 'Manager',
      name: 'Cristiano',
      isAdmin: false,
      avatarPath: 'assets/images/user_avatars/ava_2.jpg',
      isAuthorized: false
    },
    {
      id: 3,
      userName: 'FGR456',
      surname: 'Smith',
      gender: 'Mele',
      telephoneNumber: '+457686822065',
      email: 'smith@gmail.com',
      position: 'HR',
      name: 'Jhone',
      isAdmin: true,
      avatarPath: 'assets/images/user_avatars/ava_3.jpg',
      isAuthorized: false
    },
    {
      id: 4,
      userName: 'FGH333',
      surname: 'Zakrevsky',
      gender: 'Female',
      telephoneNumber: '+24736890065',
      email: 'zakrevsky@gmail.com',
      position: 'Junior Developer',
      name: 'Cristina',
      isAdmin: false,
      avatarPath: 'assets/images/user_avatars/ava_4.jpg',
      isAuthorized: false
    },
    {
      id: 5,
      userName: 'SCG345',
      surname: 'Ionescu',
      gender: 'Female',
      telephoneNumber: '+4076890000',
      email: 'alina@gmail.com',
      position: 'Team Lieder',
      name: 'Alina',
      isAdmin: false,
      avatarPath: 'assets/images/user_avatars/ava_5.jpg',
      isAuthorized: false
    },
  ];


}
