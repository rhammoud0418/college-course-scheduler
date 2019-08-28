import { Time } from './time';

export class Lecture {

    constructor(public days: string[],
                public startTime: Time,
                public endTime: Time,
                public professor?: string,
                public location?: string) { }

    get formattedString(): string {
        var dayString: string = '';
        this.days.forEach(day => dayString += day);
        var formattedString = `${dayString} ${this.startTime.formattedString} - ${this.endTime.formattedString}`;
        if(this.location || this.professor) {
            var optionalString = ' (';
            if(this.location && this.professor) optionalString += this.location + ', ' + this.professor;
            else if(this.location && !this.professor) optionalString += this.location;
            else optionalString += this.professor;
            optionalString += ')';
            formattedString += optionalString;
        }
        return formattedString;
    }

}