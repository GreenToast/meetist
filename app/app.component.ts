import {Component} from 'angular2/core';
import {EventlistComponent} from './eventlist.component';
@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <eventlist></eventlist>
    `,
    directives: [EventlistComponent]
})
export class AppComponent { }