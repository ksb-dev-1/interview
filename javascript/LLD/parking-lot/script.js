// Enum-like objects for SpotType and VehicleSize
const SpotType = {
  COMPACT: "COMPACT",
  REGULAR: "REGULAR",
  LARGE: "LARGE",
};

const VehicleSize = {
  COMPACT: "COMPACT",
  REGULAR: "REGULAR",
  LARGE: "LARGE",
};

// Vehicle class
class Vehicle {
  constructor(licensePlate, size) {
    this.licensePlate = licensePlate;
    this.size = size;
  }
}

// ParkingSpot class
class ParkingSpot {
  constructor(spotNumber, type) {
    this.spotNumber = spotNumber;
    this.isOccupied = false;
    this.vehicle = null;
    this.type = type;
  }

  park(vehicle) {
    if (!this.isOccupied && this.canFit(vehicle)) {
      this.isOccupied = true;
      this.vehicle = vehicle;
      return true;
    }
    return false;
  }

  remove() {
    const vehicle = this.vehicle;
    this.isOccupied = false;
    this.vehicle = null;
    return vehicle;
  }

  canFit(vehicle) {
    const typeMapping = {
      [VehicleSize.COMPACT]: [
        SpotType.COMPACT,
        SpotType.REGULAR,
        SpotType.LARGE,
      ],
      [VehicleSize.REGULAR]: [SpotType.REGULAR, SpotType.LARGE],
      [VehicleSize.LARGE]: [SpotType.LARGE],
    };
    return typeMapping[vehicle.size].includes(this.type);
  }
}

// Level class
class Level {
  constructor(levelNumber, spots) {
    this.levelNumber = levelNumber;
    this.spots = spots; // List of ParkingSpot objects
  }

  parkVehicle(vehicle) {
    for (const spot of this.spots) {
      if (spot.park(vehicle)) {
        return true;
      }
    }
    return false;
  }

  removeVehicle(vehicle) {
    for (const spot of this.spots) {
      if (
        spot.isOccupied &&
        spot.vehicle.licensePlate === vehicle.licensePlate
      ) {
        spot.remove();
        return true;
      }
    }
    return false;
  }

  getAvailableSpots() {
    return this.spots.filter((spot) => !spot.isOccupied);
  }

  getTotalSpots() {
    return this.spots.length;
  }
}

// ParkingLot class
class ParkingLot {
  constructor(levels) {
    this.levels = levels; // List of Level objects
    this.totalSpots = levels.reduce(
      (total, level) => total + level.getTotalSpots(),
      0
    );
    this.occupiedSpots = 0;
  }

  parkVehicle(vehicle) {
    for (const level of this.levels) {
      if (level.parkVehicle(vehicle)) {
        this.occupiedSpots++;
        return true;
      }
    }
    return false;
  }

  removeVehicle(vehicle) {
    for (const level of this.levels) {
      if (level.removeVehicle(vehicle)) {
        this.occupiedSpots--;
        return true;
      }
    }
    return false;
  }

  getAvailableSpots() {
    return this.levels.reduce((availableSpots, level) => {
      return availableSpots.concat(level.getAvailableSpots());
    }, []);
  }
}

// Example usage
const level1 = new Level(1, [
  new ParkingSpot(1, SpotType.REGULAR),
  new ParkingSpot(2, SpotType.COMPACT),
  new ParkingSpot(3, SpotType.LARGE),
]);

const level2 = new Level(2, [
  new ParkingSpot(4, SpotType.COMPACT),
  new ParkingSpot(5, SpotType.REGULAR),
  new ParkingSpot(6, SpotType.LARGE),
]);

const parkingLot = new ParkingLot([level1, level2]);

const car1 = new Vehicle("ABC123", VehicleSize.REGULAR);
const car2 = new Vehicle("XYZ789", VehicleSize.COMPACT);

console.log(parkingLot.parkVehicle(car1)); // true
console.log(parkingLot.parkVehicle(car2)); // true
console.log(parkingLot.getAvailableSpots().length); // 4 (2 spots available after parking 2 cars)
console.log(parkingLot.removeVehicle(car1)); // true
console.log(parkingLot.getAvailableSpots().length); // 5 (1 spot available after removing car1)
