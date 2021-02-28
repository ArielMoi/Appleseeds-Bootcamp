function sevenboom(range){
    for (let i = 1; i <= range; i++){
        if (i % 7 == 0 && String(i).includes('7')){
            console.log('boom-boom');
        } else if (i % 7 == 0) {
            console.log('boom!');
        }
        else {
            console.log(i);
        }
    }
}

sevenboom(20);