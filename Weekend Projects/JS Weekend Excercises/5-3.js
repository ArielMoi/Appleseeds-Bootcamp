// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
    str = str.includes('-') ? str.split('-') : str.split('_');
    str = str.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    })
    return str.join(' ');
}

console.log(toCamelCase('the_stealth_warrior'));