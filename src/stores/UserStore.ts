import { action, computed, makeObservable, observable } from 'mobx';
import { UserService } from '../services/UserService/UserService';

export class UserStore {

    public id: string;

    public login: string;

    public password: string;

    public firstName: string;

    public lastName: string;

    public surName: string;

    public get initials(): string {
        return `${this.firstName} ${this.lastName[0]}.${this.surName[0]}.`;
    }

    public get fullName(): string {
        return `${this.firstName} ${this.lastName} ${this.surName}`;
    }

    protected UserService = new UserService();

    public constructor() {
        makeObservable(
            this,
            {
                id: observable,
                login: observable,
                password: observable,
                firstName: observable,
                lastName: observable,
                surName: observable,
                initials: computed,
                fullName: computed,
                getId: action.bound,
                getUserInfo: action.bound,
            },
        );
    }

    public async getId(login: string, password: string) {
        this.id = await this.UserService.auth({ login, password });
    }

    public async getUserInfo() {
        const user = await this.UserService.loadUserInfo(this.id);
        this.login = user.login;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.surName = user.surName;
    }

}
