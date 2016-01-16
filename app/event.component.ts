import {Person} from './person.component'
export class Event {
    public guests:Person[];
    constructor(
        public time:number,
        public name:string
        ) 
        { this.guests = [];  }
    
    
       
}