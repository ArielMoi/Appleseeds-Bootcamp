function order(words){
    // ...
    let newwords = Array.of(words.split(' ').length);
    let num = 0;
    for (i of words.split(' ')){
        for (letter of i){
            if (parseInt(letter)){
                newwords[parseInt(letter)] = i;
            } 
        }
    } 
    newwords.shift()
    return newwords.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));