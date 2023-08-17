import renderRecommendationPage2 from './modules/renderPreviewPage2.js'

renderRecommendationPage2()

import { PreviewSubscriber, InfoSubscriber } from './publisher.js';
import publisher from './modules/form-handler.js';

// Obtén referencias a los elementos del preview y de la información de la orden
const previewImage = document.querySelector('.preview-image'); // Cambia esto por el selector correcto
const plantInfoElement = document.querySelector('.plant-info'); // Cambia esto por el selector correcto

// Crea instancias del patrón Observer
const previewSubscriber = new PreviewSubscriber(previewImage);
const infoSubscriber = new InfoSubscriber(plantInfoElement);

// Suscribe los elementos del preview y de la información de la orden al patrón Observer
publisher.subscribe(previewSubscriber);
publisher.subscribe(infoSubscriber);
