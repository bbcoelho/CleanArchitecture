import ParkingLot from "../entities/ParkingLot.js";

export default interface IParkingLotDataAccess {
    getParkingLot(code: string): ParkingLot;
}