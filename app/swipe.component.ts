import {Component} from 'angular2/core';
import {Person} from './person.interface';
import {OnInit} from "angular2/core";
import {MeetistService} from "./meetist.service";
import {SwipeStatus} from "./swipe-status.enum";
import {Inject} from "angular2/core";


@Component({
    selector: 'Swipe',
    styles: [
        `
            #CardStack {
                position: relative;
            }

            .Card {
                position: absolute;
                top: 0;
                left: 0;
                background: white;
                width: 100%;
            }
        `
    ],
    template: `<div>
    <h1>Welcome to Event XX</h1>
    <div *ngIf="people.length==0">
        Sorry, you have no friends.
    </div>

    <div *ngIf="people.length>0">
        <div id="CardStack">
            <div *ngFor="#person of people" class="Card" style="z-index: {{person.id}}">
                <div *ngIf="person.status == SwipeStatus.NotSwiped">

                </div>
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
</div>
`,
    providers: [MeetistService],
})
export class SwipeComponent implements OnInit {
    public people:Person[] = [];
    public SwipeStatus;

    constructor(private _meetistService:MeetistService) {
        this.SwipeStatus = SwipeStatus;
    }

    ngOnInit() {
        console.log('ngOnInit is called');
        this._meetistService.getPeopleForEvent(123).then(people => {
            this.people = people;
        })
    }
}