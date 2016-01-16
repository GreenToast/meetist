import {Component} from 'angular2/core';
import {Person} from './person.interface';
import {SwipeStatus} from "./person.interface";
import {OnInit} from "angular2/core";
import {MeetistService} from "./meetist.service";


@Component({
    selector: 'Swipe',
    template: `<div>
    <h1>Welcome to Event XX</h1>
    <div *ngIf="people.length==0">
        Sorry, you have no friends.
    </div>

    <div *ngIf="people.length>0">
        <div *ngFor="#person of people">
            <h2>{{person.name}}</h2>
            <img src="{{person.imgUrl}}"/>
            <p>
                <b>{{person.status}}</b>
            </p>
            <button class="btn btn-danger"><i class="fa fa-times-circle fa-4x"></i></button>
            <button class="btn btn-success"><i class="fa fa-check-circle fa-4x"></i></button>
        </div>
    </div>
</div>
`,
    providers: [MeetistService]
})
export class SwipeComponent implements OnInit {
    public people:Person[] = [];

    constructor(private _meetistService:MeetistService) {
    }

    ngOnInit() {
        this._meetistService.getPeopleForEvent(123).then(people => {
            this.people = people;
            console.log(this.people);
        })
    }
}