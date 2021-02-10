function passValidate(password){
    if (password.length >= 7){
        return 'strong';
    } else {
        return 'weak';
    }
}

function passValidate2(password) {
    return password.length > 7 ? 'strong': 'weak';
}

function advencedValidater(password) {
    if (password.length > 7) {
        for (i of password.split('')){
            
            if (i.toLowerCase() != i.toUpperCase() && i == i.toUpperCase() && password.length >= 7) {
                return 'very strong';
            }
        }
        return 'strong';
    } else if (password.length <= 7){
        return 'weak';
    }
}




console.log(advencedValidater('aa56888878'));
console.log(passValidate2('123456'));

