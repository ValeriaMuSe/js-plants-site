import renderRecommendationPage2 from './modules/renderPreviewPage2.js'

renderRecommendationPage2()

import observer from './modules/form-handler.js';

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

const previewSubscriber = new PreviewSubscriber(/* referencia al elemento */);
const infoSubscriber = new InfoSubscriber(/* referencia al elemento */);

observer.subscribe(previewSubscriber);
observer.subscribe(infoSubscriber);
