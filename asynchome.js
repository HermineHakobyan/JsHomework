class Clock {
    constructor() {
      this.timerId = null;
    }
  
    async start() {
      if (this.timerId) {
        console.log('Clock is already running.');
        return;
      }
      this.timerId = setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString();
        console.log(time);
      }, 1000);
      console.log('Clock started.');
    }
  
    async alarm(time) {
      if (!this.timerId) {
        console.log('Clock is not running.');
        return;
      }
      let currentTime = new Date();
      let alarmTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), ...time.split(':'));
      let timeDiff = alarmTime.getTime() - currentTime.getTime();
      if (timeDiff < 0) {
        alarmTime.setDate(alarmTime.getDate() + 1);
        timeDiff = alarmTime.getTime() - currentTime.getTime();
      }
      console.log(`Alarm set for ${alarmTime.toLocaleTimeString()}.`);
      await new Promise(resolve => setTimeout(resolve, timeDiff));
      console.log('Alarm ringing!');
    }
  
    async stop() {
      if (!this.timerId) {
        console.log('Clock is not running.');
        return;
      }
      clearInterval(this.timerId);
      this.timerId = null;
      console.log('Clock stopped.');
    }
  
    async tick(seconds) {
      if (!this.timerId) {
        console.log('Clock is not running.');
        return;
      }
      setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString();
        console.log(time);
      }, seconds * 1000);
    }
  }
  
  const myClock = new Clock();
  myClock.start();
  myClock.tick(5);
  myClock.alarm('12:30');
  myClock.stop();
  