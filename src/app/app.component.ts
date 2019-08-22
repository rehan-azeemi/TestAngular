import { Component, ViewChild, OnInit } from '@angular/core';
import { ServerComponent } from './server/server.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //@ViewChild( ServerComponent ,{static:false}) child: ServerComponent ;

  ngOnInit() {

  }

  //title = 'my-app';

  //counter = 0;

  /*private increaseCounter(){
    this.counter++;
  }

  public getServerCounter(){
    this.counter = this.child.getCounter();
  }*/

  events: Array<any> = [{
    time: '08:00',
    subject: "Breakfast with Simon",
    location: "Lounge Caffe",
    description: "Discuss Q3 targets"
  },
  {
    time: '09:00',
    subject: "Daily meeting",
    location: "Lounge Caffe",
    description: "Discuss Q3 targets"
  },
  {
    time: '10:00',
    subject: "Calling HRs",
    location: "Lounge Caffe",
    description: "Discuss Q3 targets"
  },
  {
    time: '08:00',
    subject: "Breakfast with Simon"
  }
  ]

  deleteEvent(event: any) {
    const itemIndex = this.events.findIndex(el => el === event);
    this.events.splice(itemIndex, 1);
  }

  addEvent(){
    const newEvent: any = {
      time: "11:00",
      subject: "Calling Scrum",
      location: "Karachi, Pakistan",
      description: "Discuss Catalyst"
    }

    this.events.push(newEvent);
  }
}
