import { Passenger } from './../../models/passenger.interface';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span 
            class="status"
            [class.checked-in]='detail.checkedIn'></span>
            <input 
                *ngIf="editing"
                (input)="onNameChange(name.value)"
                #name
                [value]="detail.fullname">
            <div *ngIf="!editing">    
                {{ detail.fullname }}
            </div>    
            <div class="date">
                Check in date: {{detail.checkInDate | date: 'yMMMMd' | uppercase}}
            </div>

            <div>
            Children: {{detail.children?.length || 0}}
            </div>
            <button (click)="toggleEdit()">
                {{editing ? 'Done' : 'Edit'}}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
        </div>
    `

})
export class PassengerDetailComponent {
    @Input()
    detail: Passenger;

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter()

    editing: boolean = false;

    onNameChange(value: string) {
        this.detail.fullname = value;
    }
    toggleEdit() {
        if(this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }
    onRemove() {
        this.remove.emit(this.detail)
    }
}