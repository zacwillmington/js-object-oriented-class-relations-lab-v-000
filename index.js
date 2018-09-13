let store = { drivers: [], passengers: [], trips: [] }


let driverId = 0;

class Driver {
    constructor (name){
        this.name = name;
        this.id = ++driverId;
        store.drivers.push(this);
    }

    trips() {
        const trip = store.trips.filter(trip => trip.driverId === this.id);
        return trip;
    }

    passengers() {

    }

}



let passengerId = 0;

class Passenger {
    constructor (name){
        this.name = name;
        this.id = ++passengerId;
        store.passengers.push(this);
    }

    trips(){
        const trips = store.trips.filter(trip => trip.passengerId === this.id)
        return trips;
    }

    drivers(){
        const drivers = this.trips.forEach(function (trip){
            store.drivers.filter(driver => driver.id == trip.driverId);
        });
        return drivers;
    }
}


let tripId = 0;

class Trip {
    constructor (driver, passenger){
        this.id = ++tripId;
        store.trips.push(this);
        if (driver) {
            this.driverId = driver.id;
        }
        if (passenger) {
            this.passengerId = passenger.id;
        }
    }

    passenger() {
        const passenger = store.passengers.find(passenger => passenger.id === this.passengerId);

        return passenger;
    }

    driver() {
        const driver = store.drivers.find(driver => driver.id === this.driverId);

        return driver;
    }
}
