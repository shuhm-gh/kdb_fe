import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import * as globals from './globals';

@Injectable()
export class svc {
    constructor(private http: Http) { }
    public get_data() {
        return this.http.post(globals.api_base_url + '/api/query_mshopbook_init_data', JSON.stringify({}), { withCredentials: true })
            .map((response: Response) => {
                
            }).toPromise();
    }
}