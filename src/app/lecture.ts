import { Time } from './time';

export class Lecture {

    constructor(public days: string[],
                public startTime: Time,
                public endTime: Time,
                public professor?: string,
                public location?: string) { }

}