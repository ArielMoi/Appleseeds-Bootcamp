/// fetch function
const myProxy = 'https://api.codetabs.com/v1/proxy?quest=';

const coronaInfo = {};
const africa = {};
const america = {};
const asia = {};
const europe = {};
const oceania = {};


async function fetchCountriesByregion() {
    let data = await fetch(`${myProxy}https://restcountries.herokuapp.com/api/v1`);
    data = await data.json();
    data.forEach(el => {
        if (el.region == ''){el.region = 'World'}
        coronaInfo[el.region] ? coronaInfo[el.region] += `-${el.name.common}` : coronaInfo[el.region] = `-${el.name.common}`;
    })

    for (let [region, country] of Object.entries(coronaInfo)) {
        // if (region == ''){region = 'world'}
        coronaInfo[region] = country.split('-');
    }
}

fetchCountriesByregion().then(() => {
    console.log(coronaInfo)
})


async function fetchCovidInfoByCountry(){
    let dataCovid = await fetch(`https://corona-api.com/countries`);
    dataCovid = await dataCovid.json();

    console.log(dataCovid);

}

fetchCovidInfoByCountry()

// console.log(coronaInfo)

// console.log(Object.entries(Object.values(coronaInfo)))




// coronaInfo.each(el => {
//     console.log('--')
//     console.log(el)
// })

// let data = fetchURLs(myProxy + 'https://restcountries.herokuapp.com/api/v1')


// let data = fetchURLs(`${myProxy}https://restcountries.herokuapp.com/api/v1`)
// console.log(data)

///fetching data

///arranging it in the right way obj -> obj country name -> obj al corona details
















/// creating the chart - 

// make as function with thw parameters to fill
// to make background color dinemic create an array with a lot and refrence just the right sum
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});