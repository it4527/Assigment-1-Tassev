import { PCModel } from './model/PCModel.js';
import { PCShopView } from './view/PCShopView.js';
import { PCShopController } from './controller/PCShopController.js';

import { FormView } from './view/FormView.js';
import { FormController } from './controller/FormController.js';
import { FormModel } from './model/FormModel.js';







// Entry point for initializing the MVC components and setting up the application.
document.addEventListener('DOMContentLoaded', function () {
    const pagePath = window.location.pathname;
    // Initialize PCShopController only if on the main shop page
    if (pagePath.endsWith('index.html') || pagePath === '/') {
        const model = new PCModel();
        const view = new PCShopView();
        const controller = new PCShopController(model, view);
        controller.init();
    }
});






class App {
    constructor() {
        const url = window.location.href;
        const page = url.match(/[a-z]+.html/)[0];   // match returns an array of matches

        switch (page) {
            case 'index.html':
                new PCShopController(new PCModel(), new PCShopView());
                break;
            case 'form.html':
                new FormController(new FormModel(), new FormView());
                break;
        }

    }

}

const app = new App();

