import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { IUser } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    baseUrl: string = environment.apiUrl;
    private currentUserSource = new BehaviorSubject<IUser | null>(null);
    currentUser$ = this.currentUserSource.asObservable();

    constructor(private http: HttpClient) {}

    login(model: any) {
        return this.http.post<IUser>(this.baseUrl + 'account/login', model).pipe(
            map((response: IUser) => {
                const user = response;
                if (user) {
                    this.setCurrentUser(user);
                }
            })
        );
    }

    register(model: any) {
        return this.http.post<IUser>(this.baseUrl + 'account/register', model).pipe(
            map((user) => {
                if (user) {
                    this.setCurrentUser(user);
                }
            })
        );
    }

    setCurrentUser(user: IUser) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
    }

    logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
    }
}
