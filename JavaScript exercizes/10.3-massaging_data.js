const data = [{
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

// 1. 

function returnsNames(obj){
    var arr = [];
    for (i of obj){
        arr.push(i);
    }
    return arr.map(el => el.name);
}

// console.log(returnsNames(data));

// 2. 

function before90(obj){
    var arr = [];
    for (i of obj){
        arr.push(i);
    }
    var arr1 = [];
    arr.map(function (el){
        Object.values(el)[1].split('-')[2] >= 1990 && arr1.push(el);
    })
    return arr1;
}

// console.log(before90(data))

// 3.

function whatFood(obj){
    var obj1 = {};
    var arr1 = [];
    for (person of obj){
        obj.map(el => arr1.push(el.favoriteFoods.meats))
        obj.map(el => arr1.push(el.favoriteFoods.fish))
    }

    arr1 = arr1.join().split(',');
    for (i of arr1 ){
        obj1[i] ? obj1[i] = obj1[i] + 1 : obj1[i] = 1;
    }
    console.log(obj1)
}

whatFood(data)