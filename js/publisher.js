class Publisher {
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

class PreviewSubscriber {
    constructor(elementToUpdate) {
        this.element = elementToUpdate;
    }

    update(data) {
        // Actualiza la previsualización de la planta usando los datos proporcionados
        // Puedes manipular la imagen, el título, etc., dentro de este método
    }
}

class InfoSubscriber {
    constructor(elementToUpdate) {
        this.element = elementToUpdate;
    }

    update(data) {
        // Actualiza la información de la orden usando los datos proporcionados
        // Puedes manipular el texto con los detalles de la orden dentro de este método
    }
}

export { Publisher, PreviewSubscriber, InfoSubscriber };
