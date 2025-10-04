import type ParkingLotDataAccess from "../../dataAccess/ParkingLotDataAccess.js";
import ParkingLot from "../../entities/ParkingLot.js";

export default class ParkingLotRepositoryMemory implements ParkingLotDataAccess {
    getParkingLot(code: string): ParkingLot {
        return new ParkingLot(code, 100, 8, 22);
    }
}