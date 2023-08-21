class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  publish(topic, data) {
    this.subscribers.forEach(subscriber => {
      if (typeof subscriber.update === 'function') {
        subscriber.update(topic, data);
      }
    });
  }
}

export default Observer;
