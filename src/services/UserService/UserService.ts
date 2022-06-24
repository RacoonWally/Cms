import axios, { AxiosResponse } from 'axios';

interface Auth {
    login: string;
    password: string;
}

interface User {
    id: string;
    login: string;
    password: string;
    firstName: string;
    lastName: string;
    surName: string;
}

const BASE_URL = '';

export class UserService {

    async auth(params: Auth): Promise<string> {
        const id = await axios.post<Auth, AxiosResponse<string>>(`${BASE_URL}/auth`, { ...params });
        return id.data;
    }

    async loadUserInfo(id: string): Promise<User> {
        const user = await axios.get<string, AxiosResponse<User>>(`${BASE_URL}/user`, { data: id });
        return user.data;
    }

}
