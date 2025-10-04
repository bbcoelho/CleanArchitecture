import ParkingLot from "../entities/ParkingLot.js";
import type IParkingLotDataAccess from "../dataAccess/IParkingLotDataAccess.js";

export class EnterParkingLot {
    private parkingLotRepository: IParkingLotDataAccess;

    constructor(parkingLotRepository: IParkingLotDataAccess) {
        this.parkingLotRepository = parkingLotRepository;
    }

    execute(code: string): ParkingLot {
        const parkingLot = this.parkingLotRepository.getParkingLot(code);
        return parkingLot;
    }
}
