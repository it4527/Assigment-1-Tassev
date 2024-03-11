
export class FormModel {
    constructor() {
        this.name = "";
        this.email = "";
        this.address = "";
        this.phone = "";
        this.init();
    }


    /**
     * Initializes this object properties. New properties are added based on the
     * data loaded from  localStorage.
     * 
     * @returns {undefined}
     */
    init() {
        // Assuming there's a way to load saved data, e.g., from localStorage
        let formData = JSON.parse(localStorage.getItem('formData')) || {};
        for (let property in formData) {
            if (this.hasOwnProperty(property)) {
                this[property] = formData[property];
            }
        }
        // Load the user's product selection from local storage
        let selectionData = JSON.parse(localStorage.getItem('product-selection')) || {};
        this.productCategory = selectionData.productCategory || '';
        this.specificPart = selectionData.specificPart || '';
        this.ram = selectionData.ram || '';
    }

    getInputData() {
        // Convert this model's properties to a plain object
        return JSON.parse(JSON.stringify(this));
    }

    persist() {
        // Save the current state to localStorage or another persistence layer
        localStorage.setItem('formData', JSON.stringify(this));
    }



}


