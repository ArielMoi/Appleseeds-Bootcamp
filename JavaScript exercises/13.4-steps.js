function steps(n){
    let arr = [];
    for (step of [...Array(n).keys()]){
        console.log(step + 1 + '----------');
        console.log('$'.repeat(step + 1) + ' '.repeat([...Array(n).keys()].length - step) + 'finish')
    }
}

steps(5)