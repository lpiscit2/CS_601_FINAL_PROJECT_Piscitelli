function validateForm() {
    //Get all relevant objects and set to variables
    let lastName = document.getElementById("lastName");
    let firstName = document.getElementById("firstName");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    console.log(firstName.value);

    //regex for name input fields
    let regexNames = /^[A-Za-z]*$/;

    //regex for email input field
    let regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/

    //Check that firstName is 2 characters or greater
    if (firstName.value.length < 2) {
        alert("'First name' must contain 2 or more characters.");
        firstName.focus();
        return false;
        //Checking that firstName is only characters
    } else if (!regexNames.test(firstName.value)) {
        alert("'First name' must be only characters.");
        firstName.focus();
        return false;

        //Check that lastName is 2 characters or greater
    } else if (lastName.value.length < 2) {
        alert("'Last name' must contain 2 or more characters.");
        lastName.focus();
        return false;
        //Check that lastName is only characters
    } else if (!regexNames.test(lastName.value)) {
        alert("'Last name' must be only characters.");
        lastName.focus();
        return false;
        //Check that the email is an email
    } else if (!regexEmail.test(email.value)){
        alert("'Email' is not valid, try again.");
        email.focus();
        return false;
        //Check that the message is not empty
    } else if (message.value.length == 0) {
        alert("Please enter a message");
        return false;
        //if all validations pass, return true
    } else {
        alert("Thank you for submitting the form!");
        return true; 
    }
}