import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-server]',
  template:`
  <div class='big-div'>
    <p>Name : {{name.toUpperCase()}}</p>
    <p>Name Length : {{name.length}}</p>
    <p>Age : {{age}}</p>
    <p>Counter : {{getCounter()}}</p>
  </div>
  <div>
    Name : <input type='text' value='{{name}}' />
    Age : <input type='text' value='{{age}}' />
  </div>
  <div>
    <p>{{counter}}</p>
    <button (click)='increaseCounter()'>Increase Counter</button>
  </div>
  `,//templateUrl: './server.component.html',
  styles:[`
    .big-div{
        Color:green;
        margin-top:20px;
        font-size:40px;
    }
  `]//styleUrls: ['./server.component.css']
})
export class ServerComponent{
  name:string="Rehan";
  age:number=26;

  counter:number=0;

  private increaseCounter(this){
    this.counter++;
  }

  public getCounter(){
    return this.counter;
  }

}
