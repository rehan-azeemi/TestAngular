import { Component, ViewChild, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //@ViewChild( ServerComponent ,{static:false}) child: ServerComponent ;
  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();

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
  }
  ]

  deleteEvent(event: any) {
    const itemIndex = this.events.findIndex(el => el === event);
    this.events.splice(itemIndex, 1);
  }

  addEvent(){
    const newEvent: any = {
      time: this.timeInput.value,
      subject: this.subjectInput.value,
      location: this.locationInput.value,
      description: this.descriptionInput.value
    }

    this.events.push(newEvent);
    this.clear();
  }

  clear(){
     this.timeInput.setValue('');
     this.subjectInput.setValue('');
     this.locationInput.setValue('');
     this.descriptionInput.setValue('');
  }
}
