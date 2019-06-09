import { Lecture } from './lecture';

export class Course {

    constructor(public name: string, 
                public lectures: Lecture[]) { }


}