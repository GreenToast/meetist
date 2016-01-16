import {Component} from 'angular2/core';
import {Event} from './event.component';
import {Person} from './person.component';

@Component({
    selector: 'eventlist',
    template: `
        <h1>{{title}}</h1>
        <ul>
            <li *ngFor="#event of events">
                {{ event.name }} at {{event.time}}
                <ul>
                <li *ngFor="#guest of event.guests">
                    {{ guest.name }} 
                </li>
                </ul>
            </li>
        </ul>
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
        
        this.events[0].guests.push(new Person('person1'));
        this.events[0].guests.push(new Person('person2'));
        this.events[0].guests.push(new Person('person3'));
        this.events[1].guests.push(new Person('person2'));
        this.events[1].guests.push(new Person('person4'));
        this.events[1].guests.push(new Person('person1'));
        this.events[2].guests.push(new Person('person2'));
        this.events[2].guests.push(new Person('person5'));
     }
}