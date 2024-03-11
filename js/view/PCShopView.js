/**
 * View class for displaying the PC shop data.
 */
export class PCShopView {
    constructor() {
        // Initialize DOM elements that the view will interact with.
        this.productCategorySelect = document.getElementById('product-category');
        this.specificPartSelect = document.getElementById('specific-part');
        this.dynamicImage = document.getElementById('dynamic-image');
    }


    // Binds a handler for the change event on the product category select element.
    bindProductCategoryChange(handler) {
        this.productCategorySelect.addEventListener('change', event => handler(event.target.value));
    }


    // Binds a handler for the change event on the specific part select element.
    bindSpecificPartChange(handler) {
        this.specificPartSelect.addEventListener('change', event => handler(event.target.value));
    }

    bindRamChange(handler) {
        document.getElementById('ram').addEventListener('change', event => handler(event.target.value));
    }
    

    updateSpecificPartOptions(category) {
        let options = '';
        switch (category) {
            case 'components':
                options = `<option value="processor">Processor</option>
                           <option value="motherboard">Motherboard</option>
                           <option value="graphics-card">Graphics Card</option>`;
                break;
            case 'peripherals':
                options = `<option value="monitor">Monitor</option>
                           <option value="keyboard">Keyboard</option>
                           <option value="mouse">Mouse</option>`;
                break;
            case 'accessories':
                options = `<option value="hdmi">HDMI Cable</option>
                           <option value="printer">printer</option>
                           <option value="headphones">headphones</option> ;
                           <option value="usbCable">USB-Cable</option>` ;
                break;
        }
        this.specificPartSelect.innerHTML = options;
    }

    updateImage(imagePath) {
        this.dynamicImage.src = imagePath;
    }

    getFirstAvailablePart() {
        return this.specificPartSelect.options[0].value; // Assuming there's always at least one option
    }

}







