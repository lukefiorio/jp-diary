import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntryData } from './interface.service';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  register(registerData: { username: string; name: string; email: string; password: string; passwordCheck: string }) {
    return this.http.post('/api/register', registerData).toPromise();
  }

  login(loginData: { username: string; password: string }): Promise<object> {
    return this.http.post('/api/login', loginData).toPromise();
  }

  logout() {
    return this.http.get('/api/logout').toPromise();
  }

  getProfile(): Promise<object> {
    return this.http.get('/api/users').toPromise();
  }

  addEntry(newEntry: EntryData): Promise<object> {
    return this.http.post('/api/entries', newEntry).toPromise();
  }
}
