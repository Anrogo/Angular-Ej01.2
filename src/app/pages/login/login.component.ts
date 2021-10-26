import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  constructor(
    private _titleService: Title,
  ) { 
    _titleService.setTitle('Login');
  }

  ngOnInit(): void {
  }

    //Setter to change page's title althrough Browser Module
    public setTitle(newTitle: string) {
      this._titleService.setTitle(newTitle);
    }

}
