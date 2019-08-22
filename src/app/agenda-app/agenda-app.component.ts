import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-app',
  templateUrl: './agenda-app.component.html',
  styleUrls: ['./agenda-app.component.css']
})
export class AgendaAppComponent implements OnInit {
  isDisabled:boolean=true;
  constructor() { }

  ngOnInit() {
  }

}
