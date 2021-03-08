class PointWorld{
    constructor(arr = []){
        this.points = arr;
    }

    sortPoints(){
        return this.points.sort((a,b) => b - a)
    }

    setOfPoints(){
        let a = new Set(this.points);
        return Array.from(a);
    }

    point(num){
        if (this.points.includes(num)){
            return num;
        }else return false;
    }
}

let a = new PointWorld([1,2,3,1]);
console.log(a.sortPoints())
console.log(a.setOfPoints())
console.log(a.point(3))
console.log(a.point(4))
