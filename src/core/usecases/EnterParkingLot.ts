import ParkingLot from "../entities/ParkingLot.js";
import type IParkingLotDataAccess from "../dataAccess/IParkingLotDataAccess.js";
import ParkedCar from "../entities/ParkedCar.js";

export class EnterParkingLot {
    private parkingLotRepository: IParkingLotDataAccess;

    constructor(parkingLotRepository: IParkingLotDataAccess) {
        this.parkingLotRepository = parkingLotRepository;
    }

    execute(code: string, plate: string, date: Date): ParkingLot {
        const parkingLot = this.parkingLotRepository.getParkingLot(code);
        const parkedCar = new ParkedCar(code, plate, date);
        if (!parkingLot.isOpen(date)) {
            throw new Error("Parking lot is closed");
        }
        // if (parkingLot.getCapacity() <= parkingLot.getParkedCars().length) {
        //     throw new Error("Parking lot is full");
        // }
        this.parkingLotRepository.saveParkedCar(parkedCar.getCode(), parkedCar.getPlate(), parkedCar.getDate());
        return parkingLot;
    }
}
