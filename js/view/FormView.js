/**
 * Represents the View. View holds refences to all GUI elements user interacts with.
 * The View exposes methods to interact with the view elements. 
 */
export class FormView {
    constructor() {
        this.inputs = null;
        this.form = document.querySelector('#order-form2');
    }




    /**
     * Creates form inputs based on the injected JS object with data.
     * 
     * @param {Object} dataObject - JS object containing input data for this form
     * @returns {undefined}
     */


    createInputs(dataObject) {
        const readonlyFields = ['productCategory', 'specificPart', 'ram'];
        const contactInfoFieldset = this.form.querySelector('fieldset:first-of-type');
        const orderInfoFieldset = Array.from(this.form.querySelectorAll('fieldset'))
            .find(fieldset => fieldset.querySelector('legend').textContent === 'Order Information');

        for (let property in dataObject) {
            let inputType = property === 'email' ? 'email' : 'text'; // Use 'email' type for email
            let readonlyAttribute = readonlyFields.includes(property) ? 'readonly' : '';
            let inputHTML = `<p>${property}
                <input name='${property}' 
                       value='${dataObject[property]}' 
                       type='${inputType}' size='30' ${readonlyAttribute} placeholder='Please Enter ${property}'/>`;

            // Add error message span specifically for email and name fields
            if (property === 'email') {
                inputHTML += `<span class='error-message' id='email-error'>Email field is required</span>`;
            } else if (property === 'name') {
                inputHTML += `<span class='error-message' id='name-error'>Name field is required</span>`;
            }

            inputHTML += `</p>`;

            // Determine the appropriate fieldset for the input
            if (readonlyFields.includes(property)) {
                orderInfoFieldset.insertAdjacentHTML('beforeend', inputHTML);
            } else {
                contactInfoFieldset.insertAdjacentHTML('beforeend', inputHTML);
            }

            if (property === 'email') {
                const emailInput = this.form.querySelector('input[name="email"]');
                const emailError = document.getElementById('email-error');

                // Hide the error message initially
                emailError.style.display = 'none';

                // Event listener for when the field is focused
                emailInput.addEventListener('focus', function () {
                    // Check if the field is empty and apply the error class immediately
                    if (!this.value) {
                        this.classList.add('input-error');
                        emailError.style.display = 'block'; // Show error message if needed
                    }
                });

                // Event listener for when the field loses focus (blur event)
                emailInput.addEventListener('blur', function () {
                    if (!this.value) {
                        this.classList.add('input-error');
                        emailError.style.display = 'block'; // Keep or show error message
                    } else {
                        this.classList.remove('input-error');
                        emailError.style.display = 'none'; // Hide error message
                    }
                });

                // Event listener for real-time input validation
                emailInput.addEventListener('input', function () {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
                    if (!this.value || !emailRegex.test(this.value)) { // Checks if empty or invalid format
                        this.classList.add('input-error');
                        emailError.textContent = !this.value ? 'Email field is required' : 'Please enter a valid email address'; 
                        emailError.style.display = 'block';
                    } else {
                        this.classList.remove('input-error');
                        emailError.style.display = 'none';
                    }
                });

                // Update inputs reference
                this.inputs = this.form.querySelectorAll('input');
            } else if (property === 'name') {
                const nameInput = this.form.querySelector('input[name="name"]');
                const nameError = document.getElementById('name-error');

                // Hide the error message initially
                nameError.style.display = 'none';

                // Event listener for when the field is focused
                nameInput.addEventListener('focus', function () {
                    // Check if the field is empty and apply the error class immediately
                    if (!this.value) {
                        this.classList.add('input-error');
                        nameError.style.display = 'block'; // Show error message if needed
                    }
                });

                // Event listener for when the field loses focus (blur event)
                nameInput.addEventListener('blur', function () {
                    if (!this.value) {
                        this.classList.add('input-error');
                        nameError.style.display = 'block'; // Keep or show error message
                    } else {
                        this.classList.remove('input-error');
                        nameError.style.display = 'none'; // Hide error message
                    }
                });

                // Event listener for real-time input validation
                nameInput.addEventListener('input', function () {
                    if (this.value) {
                        this.classList.remove('input-error');
                        nameError.style.display = 'none'; // Correct input, hide error
                    }
                });

                // Update inputs reference
                this.inputs = this.form.querySelectorAll('input');
            }
        }
    }

}

