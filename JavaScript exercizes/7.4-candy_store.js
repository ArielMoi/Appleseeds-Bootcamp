const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id){
    //your code
    for (i of candyStore.candies){
        if (i.id == id){
            return i // finds the right candy by id
        }
    }
}

getCandy(candyStore, "5hd7y");
// console.log(candyStore.candies)

function getPrice(candyStore, id){
    //your code
    for (i of candyStore.candies){
        if (i.id == id){
            return i.price // finds the right candy by id
        }
    }
}

console.log(getPrice(candyStore, "5hd7y"));


function addCandy(candyStore, id, name, price){
    //your code
    candyStore.candies.push({
        name,
        id,
        price,
        amount:1,
    });
}

addCandy(candyStore, '1234', 'mint', 4);

console.log(candyStore.candies)

function buy(candyStore, id){
    //your code
    for (i of candyStore.candies){
        if (i.id == id){
            candyStore.cashRegister = candyStore.cashRegister + i.price;
            i.amount = i.amount - 1;
        }
    }
}

buy(candyStore, '1234');
console.log(candyStore);