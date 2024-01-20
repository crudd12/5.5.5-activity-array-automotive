//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passengers = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

    loadPassenger(num) {
        if (num > this.maximumPassengers) {
            console.log('There are too many people in the car.')
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("The car engine started!")
            return this.started = true
        } else {
            console.log("The car fuel is empty.")
            return this.started = false
        }
    }

    timeForService() {
        if (this.mileage > 30000) {
            console.log('It\'s time to schedule maintenance.')
            return this.scheduleService = true
        } else {
            console.log("No need for maintenance.")
            return this.scheduleService = false
        }
    }
}

let Honda = new Car('mercury', 'rad_sedan', '2002', 'white', 20000)

Honda.start()
Honda.loadPassenger(7)
Honda.timeForService()
console.log(Honda)
