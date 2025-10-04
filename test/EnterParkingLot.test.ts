import { test, expect } from "@jest/globals";
import { EnterParkingLot } from "../src/core/usecases/EnterParkingLot.js";
import ParkingLotRepositoryMemory from "../src/core/infra/repositories/ParkingLotRepositoryMemory.js";

test("EnterParkingLot", () => {
	const parkingLotRepository = new ParkingLotRepositoryMemory();
	const enterParkingLot = new EnterParkingLot(parkingLotRepository);
	const parkingLot = enterParkingLot.execute('shopping');
	expect(parkingLot.getCode()).toBe("shopping");
});