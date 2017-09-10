import { Passenger } from './../../models/passenger.interface';
import { Component, Input } from '@angular/core';
@Component({
    selector: 'passenger-count',
    template: `
        <div>
            Total checked in: {{checkedInCount()}} / {{items.length}}           
        </div>
    `

})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];

    checkedInCount(): number {
        console.log('Run checked in count')
        if(!this.items) return;
        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
}