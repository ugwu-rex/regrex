function validateCard(cardNumber) {
    const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;

    const mastercard = /^(5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12})$/;

    const verve = /^(506|507|650)[0-9]{13,16}$/;

    if (visa.test(cardNumber)) {
        return "Visa card";
    } 
    else if (mastercard.test(cardNumber)) {
        return "Mastercard";
    } 
    else if (verve.test(cardNumber)) {
        return "Verve card";
    } 
    else {
        return "Invalid card number";
    }
}


console.log(validateCard(5519123412341234));
console.log()
console.log(validateCard(223102734532234))