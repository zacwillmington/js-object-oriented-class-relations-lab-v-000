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
        const passengersIds = this.trips().map(trip => trip.passengerId);
        const passengers = [];

        for (let i = 0; i < store.passengers.length; i++){

             for(let j = 0; j < passengersIds.length; j++){
                 
                 if (store.passengers[i].id == passengersIds[j]){
                     passengers.push(store.passengers[i]);
                 }
             }
        }
        return passengers;
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
        const drivers = [];
        this.trips().forEach(function (trip){

            drivers.push(store.drivers.filter(driver => driver.id == trip.driverId));
        });
        return drivers[0];
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
