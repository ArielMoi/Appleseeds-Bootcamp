class SortNumber{
    constructor(arr = []){
        this.numList = arr;
    }

    addNum(num){
        if (Number.isInteger(num)){
            this.numList.push(num);
            return true;
        } else {
            return false;
        }

    }

    removeNum(num){
        if(this.numList.includes(num)){
            let index = this.numList.indexOf(num);
            this.numList.splice(index, 1);
            return true;
        }else return false;
    }

    getAll(){
        return this.numList;
    }

    print(){
        console.log(this.numList);
    }

    share(sortNumInstance){
        let answer = []
        for (let num of sortNumInstance.getAll()){
            if (this.numList.includes(num)){
                answer.push(num);
            }
        }
        return answer;
    }

    union(sortNumInstance){
        let myArr = [...this.numList, ...sortNumInstance.getAll()];
        let mySet = new Set(myArr);
        return Array.from(mySet);
    }
}


let a = new SortNumber();
console.log(a.addNum(5))
console.log(a)
console.log(a.removeNum(5))
console.log(a.getAll())
a.print()



let b = new SortNumber([4, 5, 6, 7])
let c = new SortNumber([1,2, 4])

console.log(b.share(c));
console.log(b.union(c));

