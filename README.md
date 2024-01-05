# climbing-website-HTML-CSS-JS

This is a website about climbing created in different stages and evolved after a series of code challenges.

### HTML
This project consists of four HTML pages, made in collaboration with Jannik:
- index.html
- bouldering.html
- climbing.html
- confirmation.html

It also includes some tables, links and forms to register to the courses.

### CSS
The pages where styled with a separate CSS file, created in collaboration with Najma, which includes:
 - navbar, external font, generic style, flex boxes, pseudo classes and media queries for responsive design.

### JavaScript
A JavaScript file was added for improved client-side form validation, which includes the display of error messages implemented by:
- disabling the submit button;
- turning background color of input to red;
- displying of clear error message;

The error messages are triggered on submission if one of the following conditions applies:
- input/select value left empty;
- firstname or lastname not capitalized;
- email not containing the '@' symbol and not ending with '.com';
- phone number contains characters opther than digits;

If the validation is passed, an alert message with the submitted information is shown and the confirmation HTML is opened.

In addition, the red background and error message are removed when the "red" input is on focus for "correction".