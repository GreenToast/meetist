import {Component} from 'angular2/core';
import {Event} from './event.component';
import {Person} from './person.component';

@Component({
    selector: 'eventlist',
    template: `
        <h1>{{title}}</h1>
        <!--<ul>
            <li *ngFor="#event of events">
                {{ event.name }} at {{ event.time }} ({{ event.guests.length }} participants)
                <ul>
                    <li *ngFor="#guest of event.guests">
                        {{ guest.forname }} {{ guest.surname }} 
                    </li>
                </ul>
            </li>
        </ul>-->
        <table style="width:100%">
            <tr>
            <td>Event</td>
            <td>Time</td>
            <td>no. participants</td>
            </tr>
            <tr *ngFor="#event of events">
                <td>{{ event.name }}</td>
                <td>{{ event.time }}</td> 
                <td>{{ event.guests.length }}</td>
            </tr>
        </table>
        `
})

export class EventlistComponent {
    public title:string;
    public events:Event[];
    
     constructor() 
     {
        this.title = 'List of events';
        this.events = [
            new Event(10, 'event10'),
            new Event(15, 'event15'),
            new Event(20, 'event20')
        ];
        
        this.events[0].guests.push(new Person('Forname1', 'Surname1'));
        this.events[0].guests.push(new Person('Forname2', 'Surname2'));
        this.events[0].guests.push(new Person('Forname3', 'Surname3'));
        this.events[1].guests.push(new Person('Forname2', 'Surname2'));
        this.events[1].guests.push(new Person('Forname4', 'Surname4'));
        this.events[1].guests.push(new Person('Forname1', 'Surname1'));
        this.events[2].guests.push(new Person('Forname2', 'Surname2'));
        this.events[2].guests.push(new Person('Forname5', 'Surname5'));
     }
}