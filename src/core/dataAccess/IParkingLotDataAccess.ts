import ParkingLot from "../entities/ParkingLot.js";

export default interface IParkingLotDataAccess {
    getParkingLot(code: string): ParkingLot;
    saveParkedCar(code: string, plate: string, date: Date): void;
}