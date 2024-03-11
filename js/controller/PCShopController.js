
/* Controller class for managing interactions in the PC shop.
// Orchestrates interactions between the model and the view. Middle man */
export class PCShopController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        const orderForm = document.getElementById('order-form');
        if (orderForm) {
            orderForm.addEventListener('submit', this.handleFormSubmit.bind(this));
        }
    }

    
    init() {
        // Sets up bindings between view events and controller handling methods.
        this.view.bindProductCategoryChange(this.handleProductCategoryChange.bind(this));
        this.view.bindSpecificPartChange(this.handleSpecificPartChange.bind(this));
        this.view.bindRamChange(this.handleRamChange.bind(this));
        this.updateView();// Initial view update based on the default model state.

    }

    // Handles changes in product category: updates the model and the view accordingly.
    handleProductCategoryChange(category) {
        this.model.setProductCategory(category);
        this.view.updateSpecificPartOptions(category);
        const firstAvailablePart = this.view.getFirstAvailablePart();
        this.model.setSpecificPart(firstAvailablePart);
        this.updateView();
    }

    handleRamChange(ram) {
        this.model.setRam(ram);
        this.updateView();
    }




    // Handles changes in the specific part: updates the model and refreshes the view to reflect the new selection.
    handleSpecificPartChange(part) {
        this.model.setSpecificPart(part);
        this.updateView();
    }


    //Handles the submit button ///////////////////////////////////////
    handleFormSubmit(event) {
        //prevent the default action of a form (prevent submitting it
        event.preventDefault();
        this.model.persist();
        window.location.href = 'form.html';

    }
    //////////////////////////////////////////////////////////////////





    updateView() {
        // Refreshes the view to reflect the current state of the model.
        const imagePath = this.model.getImagePath();
        this.view.updateImage(imagePath);
    }





}