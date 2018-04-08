import five from 'johnny-five'

export default class Garden {
  constructor() {
    this.led = new five.Relay({
      type: "NA",
      pit: 17
    });
  }

  on(uptime) {
    this.led.on();
    console.log("garden turned on!");
    setTimeout(() => {
      this.off()
    }, uptime);
  }

  off() {
    this.led.off();
    console.log("garden turned off!");
  }
}
