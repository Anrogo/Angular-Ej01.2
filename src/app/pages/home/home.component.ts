import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _titleService: Title,
  ) { 
    _titleService.setTitle('Home');
  }

  ngOnInit(): void {
  }

  //Setter to change page's title althrough Browser Module
  public setTitle(newTitle: string) {
    this._titleService.setTitle(newTitle);
  }

}
