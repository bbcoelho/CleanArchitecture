import type ParkingLotDataAccess from "../../dataAccess/IParkingLotDataAccess.js";
import ParkedCar from "../../entities/ParkedCar.js";
import ParkingLot from "../../entities/ParkingLot.js";

export default class ParkingLotRepositoryMemory implements ParkingLotDataAccess {
    private parkingLots: ParkingLot[] = [new ParkingLot("shopping", 100, 8, 22)];
    private parkedCars: ParkedCar[] = [];

    getParkingLot(code: string): ParkingLot {
        return this.parkingLots.find(parkingLot => parkingLot.getCode() === code)!;
    }

    saveParkedCar(code: string, plate: string, date: Date): void {
        this.parkedCars.push(new ParkedCar(code, plate, date));
    }
}