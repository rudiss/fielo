import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://challenge-fielo.herokuapp.com',
});

export interface IAuth {
  auth: boolean;
  token: string;
}
export interface IUser {
  balance: {
    currency: number;
    miles: number;
    points: number;
  }
  id: string;
  name: string;
  image: string;
}

export interface IUsers {
  data: IUser[];
}

export interface IUserActivity {
  id: string;
  description: string;
  date: string
}

export interface IUserActivities {
  data: IUserActivity[];
}

export const authApi = async (): Promise<IAuth> => {
  const response = await instance.post('/auth');
  return response.data;
}

export const getUsers = async (token: string): Promise<IUsers> => {
  const response = await instance.get('/users', {
    headers: {
      'x-access-token': token
    }
  });
  return response.data;
}

export const getUserById = async (token: string, id: string): Promise<IUser> => {
  const response = await instance.get(`users/${id}`, {
    headers: {
      'x-access-token': token
    }
  });
  return response.data;
}

export const getUserActivities = async (token: string, id: string):Promise<IUserActivities> => {
  const response = await instance.get(`users/${id}/activities`, {
    headers: {
      'x-access-token': token
    }
  });
  return response.data;
}