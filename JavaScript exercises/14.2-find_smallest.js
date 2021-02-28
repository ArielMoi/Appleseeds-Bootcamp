function findSmallest(a, b, c) {
    if (a > b > c) {
        return c;
    } else if (a > c > b) {
        return a;
    } else {
        return b;
    }
}
findSmallest(52, 66, 2);

// 1. line 10
// 2. termial error
// 3. couldnt call the func cause wasnt found
// 4. fixed spelling