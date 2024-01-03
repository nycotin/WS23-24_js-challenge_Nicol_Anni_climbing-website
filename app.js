// Get submit button element
const button = document.querySelector('.submit-btn');

// Add button to event listener to trigger script on click
button.addEventListener('click', displayInfo);


// Define function to be triggred on click
function displayInfo () {
    // Remove previousoly added error 'p'
    let p = document.querySelector('p.error');
    if (p != undefined || p != null) {
        p.remove();
    }
    
    // Get user input
    const labels = document.querySelectorAll('label');
    const inputs = document.querySelectorAll('input, select');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            button.setAttribute('type', 'button');
            let form = document.querySelector('form.enrollment-form');
            let p = document.createElement('p');
            p.setAttribute('class', 'error');
            p.innerHTML = `${labels[i].innerHTML.replace(': ', '')} missing!`;
            form.appendChild(p);
            p.style.color = 'rgb(112, 7, 7)';
            p.style.fontWeight = '900';
            return;
        }
    }

    alert(`Submitted information
    ${labels[0].innerHTML} ${inputs[0].value}
    ${labels[1].innerHTML} ${inputs[1].value}
    ${labels[2].innerHTML} ${inputs[2].value}
    ${labels[3].innerHTML} ${inputs[3].value}
    ${labels[4].innerHTML} ${inputs[4].value}`);
}