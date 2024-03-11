//Exporting the Data from the selectedData.js
export const selectData = {// Stores the external resource (image paths)
    "components": {
        "processor": "media/cpu-pic.jpg",
        "motherboard": "media/Motherboards.jpg",
        "graphics-card": "media/Gpu.jpg",
    },
    "peripherals": {
        "monitor": "media/monitors.png",
        "keyboard": "media/keyboard.png",
        "mouse": "media/mouse2.png",
    },
    "accessories": {
        "hdmi": "media/hdmi_cable.png",
        "printer": "media/printer.png",
        "headphones": "media/Headset.png",
        "usbCable": "media/usbCable.png"
    },
    "ram": {
        "EightGBRam": "media/ram1.png",
        "SixteenGBRam": "media/ram2.png",
        "TTGBRam": "media/ram3.png",
        "SFGBRam": "media/ram4.png"
    }
};


// Defines the model for the application, holding the current state regarding the selected product category and specific part.
export class PCModel {
    static store = selectData; // Holds the reference to the image data structure.
    constructor() {
        this.productCategory = 'components'; // Default value
        this.specificPart = 'processor'; // Default value
        this.ram = '8GB DDR4'; //Default value
        this.imageData = selectData; // Assigns the external data structure to a class property for easy access.
    }

    setProductCategory(category) {
        this.productCategory = category;// Updates the product category
        this.currentFocus = 'category';
    }

    setSpecificPart(part) {
        this.specificPart = part; // Updates the specific part within the selected category
        this.currentFocus = 'part';
    }

    setRam(ram) {
        this.ram = ram;//Updates the ram memory
        this.currentFocus = 'ram';
    }


    //Here the path needs to be changed.
    getImagePath() {
        let path = "media/default.jpg"; // Default image path

        // Logic to determine which image to display based on the latest selection
        // This example assumes that the latest selection takes precedence
        if (this.currentFocus === 'ram') {
            switch (this.ram) {
                case '8GB DDR4':
                    path = this.imageData['ram']['EightGBRam'];
                    break;
                case '16GB DDR4':
                    path = this.imageData['ram']['SixteenGBRam'];
                    break;
                case '32GB DDR5': // Assuming you correct the case to match your selection
                    path = this.imageData['ram']['TTGBRam'];
                    break;
                    case '64GB DDR5': // Assuming you correct the case to match your selection
                    path = this.imageData['ram']['SFGBRam'];
                    break;
            }
        } else {

            // Returns back to component, peripheral, or accessory image based on the category and part selection
            path = this.imageData[this.productCategory]?.[this.specificPart] || path;
        }

        return path;
    }


    isRamFocus() {
        return this.currentFocus === 'ram'; // Assuming `currentFocus` tracks what the user is currently focusing on.
    }


    //Method for Storing the data inside the local host 
    persist() {
        const selection = {
            productCategory: this.productCategory,
            specificPart: this.specificPart,
            ram: this.ram, 
        };
        localStorage.setItem("product-selection", JSON.stringify(selection));
    }
}
