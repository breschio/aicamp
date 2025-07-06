document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    
    const form = document.getElementById('registration-form');
    const submitBtn = document.querySelector('.submit-btn');
    const timeButtons = document.querySelectorAll('.time-btn');
    const timeSelectionInput = document.getElementById('time-selection');
    const parentGuardianSection = document.getElementById('parent-guardian-section');
    const kidNameInput = document.getElementById('kid-name');
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    // Signup button scroll functionality
    const signupCta = document.getElementById('signup-cta');
    const signupSection = document.getElementById('signup-section');
    
    if (signupCta && signupSection) {
        signupCta.addEventListener('click', function() {
            signupSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Time button selection
    timeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove selected class from all buttons
            timeButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Add selected class to clicked button
            this.classList.add('selected');
            
            // Set the hidden input value
            timeSelectionInput.value = this.dataset.value;
            
            // Clear any existing error for time selection
            clearError(timeSelectionInput);
            
            // Check if we should show parent/guardian section
            checkProgressiveForm();
        });
    });
    
    // Progressive form functionality
    kidNameInput.addEventListener('input', function() {
        checkProgressiveForm();
    });
    
    function checkProgressiveForm() {
        const kidNameFilled = kidNameInput.value.trim().length > 0;
        const timeSelected = timeSelectionInput.value.trim().length > 0;
        
        if (kidNameFilled && timeSelected) {
            parentGuardianSection.classList.remove('hidden');
            parentGuardianSection.classList.add('show');
        } else {
            parentGuardianSection.classList.add('hidden');
            parentGuardianSection.classList.remove('show');
        }
    }
    
    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous error messages
        clearErrorMessages();
        
        let isValid = true;
        
        // Validate required fields
        const requiredFields = [
            'time-selection',
            'kid-name',
            'kid-age',
            'parent-name',
            'parent-email',
            'parent-phone'
        ];
        
        // Validate device access radio buttons
        const deviceAccessRadios = document.querySelectorAll('input[name="device-access"]');
        const deviceAccessSelected = Array.from(deviceAccessRadios).some(radio => radio.checked);
        
        if (!deviceAccessSelected) {
            // Find the first radio button to show error near
            const firstRadio = deviceAccessRadios[0];
            if (firstRadio) {
                showError(firstRadio, 'Please select a device option');
                isValid = false;
            }
        }
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                if (fieldId === 'time-selection') {
                    showError(field, 'Please select a time slot');
                } else {
                    showError(field, 'This field is required');
                }
                isValid = false;
            }
        });
        
        // Validate email format
        const emailField = document.getElementById('parent-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField.value.trim() && !emailRegex.test(emailField.value.trim())) {
            showError(emailField, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone number (basic validation)
        const phoneField = document.getElementById('parent-phone');
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        if (phoneField.value.trim() && !phoneRegex.test(phoneField.value.trim())) {
            showError(phoneField, 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate age range
        const ageField = document.getElementById('kid-age');
        const age = parseInt(ageField.value);
        if (ageField.value && (age < 8 || age > 16)) {
            showError(ageField, 'Age must be between 8 and 16 years old');
            isValid = false;
        }
        
        // If all validations pass
        if (isValid) {
            submitFormWithEmailJS();
        }
    });
    
    // Real-time validation for email
    const emailField = document.getElementById('parent-email');
    emailField.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value.trim() && !emailRegex.test(this.value.trim())) {
            showError(this, 'Please enter a valid email address');
        } else {
            clearError(this);
        }
    });
    
    // Real-time validation for phone
    const phoneField = document.getElementById('parent-phone');
    phoneField.addEventListener('blur', function() {
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        if (this.value.trim() && !phoneRegex.test(this.value.trim())) {
            showError(this, 'Please enter a valid phone number');
        } else {
            clearError(this);
        }
    });
    
    // Real-time validation for age
    const ageField = document.getElementById('kid-age');
    ageField.addEventListener('blur', function() {
        const age = parseInt(this.value);
        if (this.value && (age < 8 || age > 16)) {
            showError(this, 'Age must be between 8 and 16 years old');
        } else {
            clearError(this);
        }
    });
    
    // Clear error on input focus
    const allInputs = form.querySelectorAll('input, select, textarea');
    allInputs.forEach(input => {
        input.addEventListener('focus', function() {
            clearError(this);
        });
    });
    
    // Clear error on radio button selection
    const deviceAccessRadios = document.querySelectorAll('input[name="device-access"]');
    deviceAccessRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Clear error from all radio buttons in this group
            deviceAccessRadios.forEach(r => clearError(r));
        });
    });
    
    // EmailJS submission function
    function submitFormWithEmailJS() {
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Get the selected device access value
        const deviceAccessRadios = document.querySelectorAll('input[name="device-access"]');
        const selectedDeviceAccess = Array.from(deviceAccessRadios).find(radio => radio.checked);
        
        // Prepare template parameters for EmailJS
        const templateParams = {
            kid_name: document.getElementById('kid-name').value,
            kid_age: document.getElementById('kid-age').value,
            time_selection: getTimeSelectionText(),
            parent_name: document.getElementById('parent-name').value,
            parent_email: document.getElementById('parent-email').value,
            parent_phone: document.getElementById('parent-phone').value,
            special_needs: document.getElementById('special-needs').value || 'None specified',
            device_access: selectedDeviceAccess ? selectedDeviceAccess.value : 'Not specified',
            submission_date: new Date().toLocaleString()
        };
        
        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showSuccessMessage();
                
                // Reset form after successful submission
                setTimeout(() => {
                    form.reset();
                    timeButtons.forEach(btn => btn.classList.remove('selected'));
                    parentGuardianSection.classList.add('hidden');
                    parentGuardianSection.classList.remove('show');
                    hideSuccessMessage();
                    
                    // Reset submit button
                    submitBtn.textContent = 'Submit Registration';
                    submitBtn.disabled = false;
                }, 3000);
            })
            .catch(function(error) {
                console.error('FAILED...', error);
                showErrorMessage('Failed to send registration. Please try again or contact us directly.');
                
                // Reset submit button
                submitBtn.textContent = 'Submit Registration';
                submitBtn.disabled = false;
            });
    }
    
    // Helper function to get readable time selection text
    function getTimeSelectionText() {
        const timeValue = timeSelectionInput.value;
        if (timeValue === 'morning') {
            return 'Morning Session (9 to 11 a.m.)';
        } else if (timeValue === 'afternoon') {
            return 'Afternoon Session (1 to 3 p.m.)';
        }
        return timeValue;
    }

    // Helper functions
    function showError(field, message) {
        field.classList.add('error');
        
        // Create or update error message
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            field.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    
    function clearError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.classList.remove('show');
        }
    }
    
    function clearErrorMessages() {
        const errorElements = form.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.classList.remove('show');
        });
        
        const errorFields = form.querySelectorAll('.error');
        errorFields.forEach(field => {
            field.classList.remove('error');
        });
    }
    
    function showSuccessMessage() {
        let successElement = form.querySelector('.success-message');
        if (!successElement) {
            successElement = document.createElement('div');
            successElement.className = 'success-message';
            form.insertBefore(successElement, form.firstChild);
        }
        
        successElement.textContent = 'Registration submitted successfully! We will contact you soon with more details.';
        successElement.classList.add('show');
    }
    
    function hideSuccessMessage() {
        const successElement = form.querySelector('.success-message');
        if (successElement) {
            successElement.classList.remove('show');
        }
    }
    
    function showErrorMessage(message) {
        let errorElement = form.querySelector('.error-message-global');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message-global';
            errorElement.style.cssText = `
                background-color: #fee;
                border: 1px solid #fcc;
                color: #c33;
                padding: 12px;
                border-radius: 4px;
                margin-bottom: 15px;
                font-size: 14px;
            `;
            form.insertBefore(errorElement, form.firstChild);
        }
        
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        // Hide error message after 5 seconds
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 5000);
    }
    
    // Smooth scrolling for form focus
    function scrollToElement(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Add some interactive effects for time buttons
    timeButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('selected')) {
                this.style.transform = 'translateY(-3px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('selected')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Note: Button loading effect is now handled in submitFormWithEmailJS function
});