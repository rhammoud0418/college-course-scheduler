export class Time {

    constructor(public hour: number,
                public minute: number,
                public period: string) { }

    get formattedString(): string {
        return this.hour + ':' + this.minute + ' ' + this.period;
    }
}