import { AppGuard } from './app.guard';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private guard: AppGuard) {}

  pageTitle = 'Moos - Shop';

  get isRoleAdmin(): boolean {
    return this.guard.canLoad();
  }

  ngOnInit(): void {}
}
