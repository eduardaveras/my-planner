class Pomodoro {
    constructor(settings) {
        this.settings = settings;
        console.log("Pomodoro settings: ", this.settings);
        this.counter = 0;
        this.active = false;
        this.remaining = 0;
    }

    start() {
        console.log("Starting pomodoro...");
        
        this.active = true;
        this.remaining = this.settings.pomodoro * 60;        

        const interval = setInterval(() => {
            this.remaining--;

            if (this.remaining >= 0) 
                console.log("Pomodoro remaining: ", this.remaining);
            
            if (this.remaining <= 0) {
                clearInterval(interval);
                this.counter++;
                this.end();
            }
        }, 1000);
        
    }

    end() {
        this.active = false;
        //this.counter = this.counter % this.settings.sessions;
        console.log("Pomodoro counter: ", this.counter);

        if (this.counter < this.settings.sessions) {
            console.log("Pomodoro ended. Starting short break.");
            setTimeout(() => {
                this.startShort();
            }, this.settings.shortBreak * 60);
        }
        else if (this.counter == this.settings.sessions) {
            console.log("Pomodoro ended. Starting long break.");
            setTimeout(() => {
                this.startLong();
            }, this.settings.longBreak * 60);
        }
    }

    startShort() {
        console.log("Starting short break...");
        this.active = true;
        this.remaining = this.settings.shortBreak * 60;

        const interval = setInterval(() => {
            this.remaining--;

            if (this.remaining >= 0) 
                console.log("Short break remaining: ", this.remaining);
            
            if (this.remaining <= 0) {
                clearInterval(interval);
                this.start();
            }
        }, 1000);
    }

    startLong() {
        console.log("Starting long break...");
        this.active = true;
        this.remaining = this.settings.longBreak * 60;

        const interval = setInterval(() => {
            this.remaining--;

            if (this.remaining >= 0) 
                console.log("Long break remaining: ", this.remaining);
            
            if (this.remaining <= 0) {
                clearInterval(interval);
                console.log("Pomodoro ended!");
                this.active = false;
                this.counter = 0;
                
            }
        }, 1000);
    }
}

module.exports = Pomodoro;