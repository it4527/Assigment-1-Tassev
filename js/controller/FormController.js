export class FormController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        // Reference to the show form button and form itself
        this.form = document.getElementById('order-form2');
        this.backButton = document.getElementById('back-to-selection');
        this.updateFormFields();


        // Event Listeners
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
        this.backButton = document.getElementById('back-to-selection');


        if (this.backButton) {
            this.backButton.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent form submission or other default actions
                window.location.href = 'index.html#order'; // Redirect to the main page
            });
        }
        // Create form inputs based on model data
        this.view.createInputs(this.model.getInputData());
    }



    handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission
        // Check if email is empty or not valid
        const emailInput = this.form.querySelector('input[name="email"]');
        const emailError = document.getElementById('email-error');
        if (!emailInput.value) {
            // Email validation failed
            emailInput.classList.add('input-error'); // Make the border red or apply any error styling
            emailError.style.display = 'block'; // Show error message
        } else {
            // Email validation passed
            emailInput.classList.remove('input-error'); // Remove error styling
            emailError.style.display = 'none'; // Hide error message
            // Proceed with form submission logic here
            this.model.persist();
            alert('Order placed successfully!');
        }
    }



    updateFormFields() {
        const inputData = this.model.getInputData();
        this.form.elements['productCategory'].value = inputData.productCategory;
        this.form.elements['specificPart'].value = inputData.specificPart;
        this.form.elements['ram'].value = inputData.ram;
    }
}
