export default class ParkedCar {
    private code: string;
    private plate: string;
    private date: Date;

    constructor(code: string, plate: string, date: Date) {
        this.code = code;
        this.plate = plate;
        this.date = date;
    }

    public getCode(): string {
        return this.code;
    }

    public getPlate(): string {
        return this.plate;
    }
    
    public getDate(): Date {
        return this.date;
    }
}