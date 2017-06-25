import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as globals from './globals'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post(globals.api_base_url+'/api/authenticate', JSON.stringify({ username: username, password: password }), { withCredentials: true })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                
                if (!user || (user && user.error)) {
                    throw Observable.throw('username or password wrong');
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                }
                localStorage.setItem('id_token', user.id_token);
                //return response;
            });
    }

    logout() {
        console.log('logout');
        // remove user from local storage to log user out
        localStorage.removeItem('id_token');
    }
}
