/ Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var firstname = document.contactForm.firstname.value;
    var lastname = document.contactForm.lastname.value;
    var Email = document.contactForm.Email.value;
    var phonenumber = document.contactForm.phonenumber.value;
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    
	// Defining error variables with a default value
    var firstnameErr = lastnameErr = emailErr  = genderErr = true;
    
    // Validate firstname
    if(firstname) == "") {
        printError("firstnameErr", "Please enter your firstname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname)) === false) {
            printError("firstnameErr", "Please enter a valid firstname");
        } else {
            printError("firstnameErr", "");
            firstnameErr = false;
        }
    }
    
    // Validate lastname address
    if(lastname == "") {
        printError("lastnameErr", "Please enter your lastname");
    } else {
        // Regular expression for basic lastname validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(lastname) === false) {
            printError("lastnameErr", "Please enter a valid lastname");
        } else{
            printError("lastnameErr", "");
            lastnameErr = false;
        }
    }
    
    // Validate email number
    if(email == "") {
        printError("emailErr", "Please enter your email number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("emailErr", "Please enter a valid email");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
        // Validate phonenember address
    if(phonenumber == "") {
        printError("phonenumberErr", "Please enter your phonenumber");
    } else {
        // Regular expression for basic lastname validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(phonenumber) === false) {
            printError("phonenumberErr", "Please enter a valid lastname");
        } else{
            printError("phonenumberErr", "");
            phonenumberErr = false;
        }
    }
    
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((firstnameErr || lastnameErr || emailErr || phonenumberErr || genderErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "first Name: " + firstname + "\n" +
                          "last name: " + lastname + "\n" +
                          "email: " + email + "\n" +
                          "phonenumber: " + phonenumber + "\n" +
                          "Gender: " + gender + "\n";
        
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};