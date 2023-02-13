
function selectCountry(){
    let countryValue = document.querySelector('#address').value;
    if (countryValue == "Bangladesh"){
        document.querySelector('#DisticAddress').style.display = "block";
    }

}
function selectDistic(){
    let disticValue = document.querySelector('#DisticAddress').value;
    if (disticValue == "ChandPur"){
        document.querySelector('#upazilaAddress').style.display = "block";
    }

}

function validation() {

    
    let nameValue = document.querySelector('.formGroup #fulname').value;
    let numberValue = document.querySelector('.formGroup #phonNumber').value;
    let emailValue = document.querySelector('.formGroup #email').value;
    let passValue = document.querySelector('.formGroup #newPassword').value;
    let conPassValue = document.querySelector('.formGroup #confirmPassword').value;
    let dobValue = document.querySelector('.formGroup #dob').value;
    let addressValue = document.querySelector('#address').value;

    if (nameValue == ""){
        document.querySelector('.warningName').innerHTML = " *** Please fill the user name.";
        return false;
    }else if ( (nameValue.length < 2) || (nameValue.length > 20)) {
        document.querySelector('.warningName').innerHTML = " *** You must be write between 2 and 20 letter.";
        return false;
    }else if (!isNaN(nameValue)){
        document.querySelector('.warningName').innerHTML = " *** Only characters are allowed.";
        return false;
    }else {document.querySelector('.warningName').innerHTML = "";}

    if (numberValue.length != 11){
        document.querySelector('.warningNumber').innerHTML = " *** Your phon number is't currect.";
        return false;
    }else if (isNaN(numberValue)){
        document.querySelector('.warningNumner').innerHTML = " *** Only number are allowed.";
        return false;
    }else{document.querySelector('.warningNumber').innerHTML = "";}

    if (emailValue == ""){
        document.querySelector('.warningEmail').innerHTML = " *** Please fill the email adress.";
        return false;
    }else{document.querySelector('.warningEmail').innerHTML = "";}

    if (passValue == ""){
        document.querySelector('.warningPass').innerHTML = " *** Please fill the Password.";
        return false;
    }else if ((passValue.length < 5) || (passValue.length > 10)) {
        document.querySelector('.warningPass').innerHTML = " *** You must be write between 5 and 10 letter.";
        return false;
    }else{document.querySelector('.warningPass').innerHTML = "";}

    if (conPassValue == ""){
        document.querySelector('.warningConPass').innerHTML = " *** Please fill the Password.";
        return false;
    }else if (conPassValue != passValue){
        document.querySelector('.warningConPass').innerHTML = "*** This pass not curract.";
        return false;
    }else{document.querySelector('.warningConPass').innerHTML = "";}

    if (dobValue == ""){
        document.querySelector('.warningDob').innerHTML = "*** Please Input your Date of Birth.";
        return false;
    }else{document.querySelector('.warningConPass').innerHTML = "";}

    



    if (addressValue == ""){
        document.querySelector('.warningAddress').innerHTML = "*** Select Your address please.";
        return false;
    }else{document.querySelector('.warningAddress').innerHTML = "";}

}
