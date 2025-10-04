import ParkingLot from "../entities/ParkingLot.js";

export default interface ParkingLotDataAccess {
    getParkingLot(code: string): ParkingLot;
}