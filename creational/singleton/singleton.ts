class Singleton {
    private static singletonInstance: Singleton;
    constructor() {
        // any construction
    }
    public static getInstance() {
        if (!this.singletonInstance) {
            this.singletonInstance = new Singleton();
        }
        return this.singletonInstance;
    }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

if (instance1 === instance2) {
    console.log('instances are same');
} else {
    console.log('instances are different');
}