import { action, computed, makeObservable, observable } from 'mobx';

export class UserStore {

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

    public constructor() {
        makeObservable(
            this,
            {
                login: observable,
                password: observable,
                firstName: observable,
                lastName: observable,
                surName: observable,
                initials: computed,
                fullName: computed,
                setLogin: action.bound,
                setFirstName: action.bound,
                setLastName: action.bound,
                setPassword: action.bound,
                setSurName: action.bound,
            },
        );
    }

    public setLogin(login: string) {
        this.login = login;
    }

    public setPassword(password: string) {
        this.password = password;
    }

    public setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    public setLastName(lastName: string) {
        this.lastName = lastName;
    }

    public setSurName(surName: string) {
        this.surName = surName;
    }

}
