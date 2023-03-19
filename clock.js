class Clock {
    constructor() {
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.intervalId = null;
    }
  
    start() {
      this.intervalId = setInterval(() => {
        this.tick();
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
      }, 1000);
    }
  
    tick() {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }
      if (this.hours === 24) {
        this.hours = 0;
      }
    }
  
    setAlarm(alarmHours, alarmMinutes, alarmSeconds) {
      return new Promise((resolve, reject) => {
        const currentTime = new Date();
        const alarmTime = new Date(
          currentTime.getFullYear(),
          currentTime.getMonth(),
          currentTime.getDate(),
          alarmHours,
          alarmMinutes,
          alarmSeconds
        );
        const timeDifference = alarmTime.getTime() - currentTime.getTime();
  
        if (timeDifference < 0) {
          reject("Alarm time has already passed!");
        } else {
          setTimeout(() => {
            resolve("Alarm!");
          }, timeDifference);
        }
      });
    }
  }
  
  const myClock = new Clock();
  myClock.start(23,50,0);
  myClock.setAlarm(23, 51, 0)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });