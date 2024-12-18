function Car(name) {
  this.name = name;
  this.isTurnOn = false;
  this.speed = 0;
  this.engine = {
    v: 1.3,
    horsesPower: 120,
    isTurnOn: false,
  };
}

Car.prototype.start = function () {
  this.isTurnOn = true;
  this.speed = 30;
  this.engine.isTurnOn = true;
  console.log(this.name, "", this.speed);
};

let reno = new Car("reno");
reno.start();

let mers = new Car("mers");
mers.start();
