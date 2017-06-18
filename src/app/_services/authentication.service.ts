import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('http://kylin-ux.com:8888/api/authenticate', JSON.stringify({ username: username, password: password }))
        //return this.http.post('http://localhost:8888/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                
                if (!user || (user && user.error)) {
                    throw Observable.throw('username or password wrong');
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                }
                localStorage.setItem('currentUser', JSON.stringify(user));
                //return response;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
