function switchlang(language) {
    switch (language) {
        case 'mandarin':
            return 'MOST number of native speakers';
        case 'spanish':
            return  '2nd place in number of native speakers';
        case 'english':
            return '3rd place';
        case 'hindi':
            return 'Number 4';
        case 'arabic':
            return '5th most spoken language';
        default:
            return 'Not in top 5';
    }
}

console.log(switchlang('hindi'));
console.log(switchlang('arabic'));