class Observer {
    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    publish(data) {
        this.subscribers.forEach(subscriber => {
            subscriber.update(data);
        });
    }
}

export default Observer;
