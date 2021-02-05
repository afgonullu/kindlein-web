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
  moments: IMoment[];
}

export interface IMoment {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  createdBy: string;
  belongsTo: {
    id: string;
    name: string;
  };
  momentDate: string;
  location: string;
  comments: IComment[];
  likes: [
    {
      id: string;
      username: string;
    },
  ];
  likeCount: number;
  commentCount: number;
}

export interface IComment {
  id: string;
  body: string;
  username: string;
  createdAt: string;
}
