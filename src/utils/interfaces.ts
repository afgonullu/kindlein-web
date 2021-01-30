export interface IUser {
  id: string;
  username: string;
  passwordHash: string;
  email: string;
  createdAt: string;
  token: string;
}

export interface IChild {
  id: string;
  name: string;
  birthDate: string;
  createdAt: string;
  createdBy: string;
}
