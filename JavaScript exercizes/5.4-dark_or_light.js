function darkorlight(color){
    switch (color.toLowerCase())  {
        case 'yellow':
        case 'pink':
        case 'orange':
            return 'light color';
        case 'blue':
        case 'brown':
        case 'purple':
            return 'dark color';
        default:
            return 'unknown';
    }
}

console.log(darkorlight('pink'));

console.log(darkorlight('purple'));

console.log(darkorlight('freen'));
