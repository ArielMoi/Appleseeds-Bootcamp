/// fetch function
const myProxy = 'https://api.codetabs.com/v1/proxy?quest=';

const regionInfo = {};
const coronaInfo = {};

let currentRegionInfo = [];

async function fetchCountriesByregion() {
    let data = await fetch(`${myProxy}https://restcountries.herokuapp.com/api/v1`);
    data = await data.json();
    data.forEach(el => {
        if (el.region == '') {
            el.region = 'Oceania'
        }
        regionInfo[el.region] ? regionInfo[el.region] += `-${el.name.common}` : regionInfo[el.region] = `-${el.name.common}`;
    })

    for (let [region, country] of Object.entries(regionInfo)) { // make values as arr
        regionInfo[region] = country.split('-');
    }
}

async function fetchCovidInfoByCountry() {
    let dataCovid = await fetch(`https://corona-api.com/countries`);
    dataCovid = await dataCovid.json();

    dataCovid.data.forEach(el => {
        coronaInfo[el.name] = [el.latest_data.confirmed, el.latest_data.recovered, el.latest_data.critical, el.latest_data.deaths]
    })
}


fetchCountriesByregion().then(() => {
    fetchCovidInfoByCountry().then(() => {

        console.log(regionInfo)
        console.log(coronaInfo)

        getInfoByregion('Africa');

        
        console.log(Object.values(currentRegionInfo)[5][1])

    })
})

function getInfoByregion(region, typeOfInfo = 0) {
    currentRegionInfo = []
    regionInfo[region].forEach(el => {
        el && currentRegionInfo.push([el, coronaInfo[el]])
    })
}

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

function removeData(chart) {
    chart.data.labels = '';
    chart.data.datasets.forEach((dataset) => {
        dataset.data = '';
    });
    chart.update();
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}