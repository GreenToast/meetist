import {Injectable} from 'angular2/core';
import {Person} from "./person.interface";
import {SwipeStatus} from "./swipe-status.enum";

@Injectable()
export class MeetistService {

    /**
     * Returns array of Person-objects
     * @param eventId id of the event to fetch from backend
     * @returns {Person[]}
     */
    getPeopleForEvent(eventId:number):Promise<Person[]> {
        return new Promise(resolve => {
            resolve(<Person[]>[
                <Person>{
                    id: 12,
                    name: "Poyan Nabati",
                    imgUrl: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg",
                    status: SwipeStatus.NotSwiped
                },
                <Person>{
                    id: 20,
                    name: "Niclas Unnervik",
                    imgUrl: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg",
                    status: SwipeStatus.NotSwiped
                }
            ]);
        })
    }
}