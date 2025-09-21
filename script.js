function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
  return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
  // Call Car constructor to inherit make & model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Reset constructor reference back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add SportsCar-specific method
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
