import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})

export class ServService {
    public userToken;

    public fromSession;

    constructor(private http: HttpClient) {

    }

    getFromUrl(url) {
       return this.http.get('http://localhost:3000/?url=' + encodeURIComponent(url));
    }

}

