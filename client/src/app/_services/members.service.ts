import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMember } from '../_models/member';

@Injectable({
    providedIn: 'root'
})
export class MembersService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}
    getMembers() {
        return this.http.get<IMember[]>(this.baseUrl + 'users');
    }

    getMember(username: string) {
        return this.http.get<IMember>(this.baseUrl + 'users/' + username);
    }
}
