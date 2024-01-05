// Global cons and vars
// Get submit button element
const button = document.querySelector('.submit-btn');

// Add button to event listener to trigger script on click
button.addEventListener('click', displayInfo);

// Get user input
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input, select');
let redInput;

// Create p for showing error if necessary
let form = document.querySelector('form.enrollment-form');
let p = document.createElement('p');
p.setAttribute('class', 'error');

// Define function to be triggred on click
function displayInfo () {
    // Remove previousoly added error 'p'
    let p = document.querySelector('p.error');
    
    if (p != undefined || p != null) {
        p.remove();
    }

    // Remove previously added disabling button
    if (button.getAttribute('type') == 'button') {
        button.setAttribute('type', 'submit');
    }

    for (let i = 0; i < inputs.length; i++) {
        // Remove whitespaces
        inputs[i].value = inputs[i].value.trim();

        // Check and alert if input is empty
        if (inputs[i].value == '') {
            displayError(inputs[i], labels[i].innerHTML.replace(': ', ''));
            return;
        } else if (inputs[i].id == 'first-name' || inputs[i].id == 'last-name') {
            // Check that first/last-name is capitalized
            const string = inputs[i].value;

            if (string.charCodeAt(0) < 65 || string.charCodeAt(0) > 90) {
                displayError(inputs[i], labels[i].innerHTML.replace(': ', ''));
                return;
            }
        } else if (inputs[i].id == 'email') {
            const string = inputs[i].value;
            const symbol = '@';
            const end = '.com';

            if (string.includes(symbol) == false || string.includes(end) == false) {
                displayError(inputs[i], labels[i].innerHTML.replace(': ', ''));
                return;
            }
        } else if (inputs[i].id == 'phone') {
            let phone = inputs[i].value;
            for (let x = 0; x < phone.length; x++) {
                if (phone.charCodeAt(x) < 48 || phone.charCodeAt(x) > 57) {
                    displayError(inputs[i], labels[i].innerHTML.replace(': ', ''));
                    return;
                }
            }
        }
    }

    alert(`Submitted information
    ${labels[0].innerHTML} ${inputs[0].value}
    ${labels[1].innerHTML} ${inputs[1].value}
    ${labels[2].innerHTML} ${inputs[2].value}
    ${labels[3].innerHTML} ${inputs[3].value}
    ${labels[4].innerHTML} ${inputs[4].value}`);
}


function displayError (input, label) {
    // Disable submit
    button.setAttribute('type', 'button');

    // Add and custom error message
    input.style.backgroundColor = 'rgb(112, 7, 7)';
    if (input.value == '') {
        p.innerHTML = `${label} missing!`;
    } else if (input.id == 'first-name' || input.id == 'last-name') {
        p.innerHTML = `${label} must be capitalized!`;
    } else if (input.id == 'email') {
        p.innerHTML = `Invalid ${label}!`;
    } else if (input.id == 'phone') {
        p.innerHTML = `${label} must contain only digits!`;
    }
    form.appendChild(p);
    p.style.color = 'rgb(112, 7, 7)';
    p.style.fontWeight = '900';

    // Add red input to eventlistener
    redInput = document.querySelector(`[style^="background-color"]`);
    redInput.addEventListener('focusin', function () {
        input.style.backgroundColor = '';
        p.remove();
    })

}