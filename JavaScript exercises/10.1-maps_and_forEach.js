const newReleases = [{
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{
            id: 432534,
            time: 65876586
        }],
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{
            id: 432534,
            time: 65876586
        }],
    },
];

var object1 = [];

newReleases.forEach(el => {
    object1.push({title: el.title, id: el.id,})
})

console.log(object1);

// let mapArray = newReleases.map(el => el.id + ' : ' + el.title);
let mapArray = newReleases.map(function(el){
    let obj = {id: el.id, title: el.title}
    return obj;
});

console.log(mapArray);