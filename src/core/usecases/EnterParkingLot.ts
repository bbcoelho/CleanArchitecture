import ParkingLot from "../entities/ParkingLot.js";
import type ParkingLotDataAccess from "../dataAccess/ParkingLotDataAccess.js";

export class EnterParkingLot {
    private parkingLotRepository: ParkingLotDataAccess;

    constructor(parkingLotRepository: ParkingLotDataAccess) {
        this.parkingLotRepository = parkingLotRepository;
    }

    execute(code: string): ParkingLot {
        const parkingLot = this.parkingLotRepository.getParkingLot(code);
        return parkingLot;
    }
}
