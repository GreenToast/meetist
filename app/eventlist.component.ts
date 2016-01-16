import {Component} from 'angular2/core';
import {Event} from './event.component'

@Component({
    selector: 'eventlist',
    template: `
        <h1>{{title}}</h1>
        <ul>
            <li *ngFor="#event of events">
                {{ event.name }} at {{event.time}}
            </li>
        </ul>
        `
})

export class EventlistComponent {
    title = 'List of events';
    events = [
        new Event(10, 'event10'),
        new Event(15, 'event15'),
        new Event(20, 'event20'),
        new Event(25, 'event25'),
        new Event(30, 'event30')
    ];
}