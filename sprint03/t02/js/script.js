class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
    }
    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount= ${this.stopCount})`);
        this.stopCount--;
    }
    stop(interval) {
        clearInterval(interval);
        console.log(`Timer ${this.title} stopped`);
    }
    tick() {
        console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount}`);
        this.stopCount--;
    }
}

function runTimer(id, delay, counter) {
    let newTimer = new Timer(id, delay, counter);
    newTimer.start();
    let interval = setInterval( () => {
        newTimer.tick();
        if (newTimer.stopCount === -1) {
            newTimer.stop(interval);
        }
    }, newTimer.delay);
}