import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: any = {};

  constructor(private backend: BackendService, private router: Router) {}

  ngOnInit() {
    this.backend.getProfile().then((data: any) => {
      this.profile = data;
    });
  }

  login() {
    return this.router.navigate(['/entry/new']);
  }
}
