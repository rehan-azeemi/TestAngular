import { Component,ViewChild, OnInit } from '@angular/core';
import { ServerComponent } from './server/server.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild( ServerComponent ,{static:false}) child: ServerComponent ;
  
  ngOnInit(){

  }
  
  title = 'my-app';

  counter = 0;

  private increaseCounter(){
    this.counter++;
  }

  public getServerCounter(){
    this.counter = this.child.getCounter();
  }
}
