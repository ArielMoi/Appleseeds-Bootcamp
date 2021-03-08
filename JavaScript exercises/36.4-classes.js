class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    addToX(num) {
        this.x += num;
    }

    addToY(num) {
        this.y += num;
    }

    setX(num) {
        this.x = num;
    }

    setY(num) {
        this.y = num;
    }

    addPoint(instance) {
        this.x += instance.getX();
        this.y += instance.getY();
    }

    isSame(instance) {
        if (this.x == instance.getX() && this.y == instance.getY()) {
            return true;
        } else return false;
    }

    print() {
        console.log(this.x, this.y)
    }

}

let a = new Point(5, 9);
// a.addToX(5)
// a.addToY(5)
let b = new Point(4, 10);
// a.addPoint(b)

console.log(a.isSame(b))

class PointWorld {
    constructor(arrOfPoints) {
        this.points = arrOfPoints;
    }

    sortPoints() {
        return this.points.sort((a, b) => b.getY - a.getY)
    }

    setOfPoints() {
        let myArr = {};
        for (let point of this.points) {
            myArr[`${point.x},${point.y}`] ?
            myArr[`${point.x},${point.y}`] = null :
            myArr[`${point.x},${point.y}`] = 1
        }
        myArr = Array.from(Object.keys(myArr));
        return myArr;
    }

    allXs(){
        let answer = []
        for (let p of this.points){
            answer.push(p.x)
        }
        return answer;
    }

    point(p){
        for (let point1 of this.points){
            if (p.x == point1.x && p.y == point1.y){
                return p;
            }
        }return false;
    }

}

let c = new Point(4, 10);
let d = new Point(4, 10);
console.log('-------------!!!--------')
let aa = new PointWorld([a, b, c]);

console.log(aa.point(d))