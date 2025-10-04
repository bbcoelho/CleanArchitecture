export default class ParkingLot {
    private code: string;
    private capacity: number;
    private openHour: number;
    private closeHour: number;

    constructor(code: string, capacity: number, openHour: number, closeHour: number) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
    }

    public getCode(): string {
        return this.code;
    }

    public getCapacity(): number {
        return this.capacity;
    }
    
    public getOpenHour(): number {
        return this.openHour;
    }

    public getCloseHour(): number {
        return this.closeHour;
    }

    public isOpen(date: Date): boolean {
        return date.getHours() >= this.openHour && date.getHours() <= this.closeHour;
    }
}