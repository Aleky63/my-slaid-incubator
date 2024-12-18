let pic1 = {
  name: "Reno",
  isTurnOn: false,
  speed: 0,
  engine: {
    v: 1.3,
    horsesPower: 120,
    isTurnOn: false,
  },
  start: function () {
    this.isTurnOn = true;
    this.speed = 30;
    this.engine.isTurnOn = true;
  },
};
