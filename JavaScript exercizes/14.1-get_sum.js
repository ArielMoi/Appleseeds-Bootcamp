function getSum(arr1, arr2) {
    var sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
}
getSum([1, 2, 3],[5, 66, 23]);

// 1. line 3
// 2. terminal error explenation
// 3. its written "Cannot read property 'length' of undefined". the array we gave the length func wasnt define.
// 4. i added ','
// then changed const sum to var after secind error ('cant change sum')