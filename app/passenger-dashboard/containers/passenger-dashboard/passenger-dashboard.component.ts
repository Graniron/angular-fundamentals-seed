import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count [items]="passengers"></passenger-count>
            <passenger-detail 
                *ngFor="let passenger of passengers;" 
                [detail]="passenger"
                (edit)="handleEdit($event)"
                (remove)="handleRemove($event)"></passenger-detail>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor() {}

    ngOnInit() {
        this.passengers = [{
            id: 1,
            fullname: 'Stephen',
            checkedIn: true,
            checkInDate: 1490742000000,
            children: null
        
          }, {
            id: 2,
            fullname: 'Rose',
            checkedIn: false,
            checkInDate: null,
            children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
          }, {
            id: 3,
            fullname: 'James',
            checkedIn: true,
            checkInDate: 1491606000000,
            children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
          }, {
            id: 4,
            fullname: 'Louise',
            checkedIn: true,
            children: null   
          }, {
            id: 5,
            fullname: 'Tina',
            checkedIn: false,
            checkInDate: 1491606000000
          }];
    }

    handleRemove(event) {
        console.log(event)
    }

    handleEdit(event) {
        console.log(event)        
    }

    
}