// const fetch = require("isomorphic-fetch");
const baseEndPoint = 'https://swapi.dev/api/people';

let myObj = {};
let arr =[];

const table = document.createElement('table');
const trheader = document.createElement('th');
const tr = document.createElement('tr');
trheader.insertAdjacentText('afterbegin', 'star wars - names | height | hair color | planet  | planet population');
table.appendChild(trheader)
document.body.appendChild(table);

async function fetchStars(){
    const res1 = await fetch(baseEndPoint);
    const data = await res1.json();

    let i = 0;
    for (let star of data.results){
        let planetData = await fetch(data.results[i].homeworld)
        let planet = await planetData.json();
        i++

    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');
    let th5 = document.createElement('th');
    tr.innerText = data.results[i].name;
    th1.innerText = data.results[i].height;
    th2.innerText = data.results[i].hair_color;
    th3.innerText = planet.name;
    th4.innerText = planet.population;
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    tr.appendChild(th5)
    table.appendChild(tr)}
}

fetchStars();