import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl = '';
  constructor(private backend: BackendService, private session: SessionService) {}

  register(data) {}

  login(loginData: { username: string; password: string }) {}

  logout() {}
}
