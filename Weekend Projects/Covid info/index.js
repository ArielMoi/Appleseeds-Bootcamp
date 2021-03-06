/// fetch functions

//  --------- collectiong data from APIs -------------
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


fetchCountriesByregion().then(() => { // active collection of data.
    fetchCovidInfoByCountry()
})



/// creating the chart - 

var chart = document.getElementById('myChart').getContext('2d'); // the chart
var myChart = new Chart(chart, { /// creating chart with chart js
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Covis-19 World Wide Information',
            data: [],
            backgroundColor: [],
            borderColor: [],
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

// ---- creating chart functions ----
function removeData(chart) { /// removes all data from chart
    chart.data.labels = [];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [];
    });
    chart.update();
}

function addData(chart, label, data) { // add data to chart (one in a time so need to be done in loop)
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

// collecting info by region function used with the objects already constructed from the fetch.
function getInfoByregion(region, typeOfInfo = 0) {
    currentRegionInfo = []
    regionInfo[region].forEach(el => {
        el && currentRegionInfo.push([el, coronaInfo[el]])
    })

    currentRegionInfo = Object.values(currentRegionInfo).filter((el) => { /// filter undefineds prevents bugs
        if (el[1]){
            return true;
        } else false;
    })
}

// --- functions to update the chart per region or data ---
let currentDataType = 0;
let currentRegion;

function updateDataByRegion(region){
    getInfoByregion(region);
    removeData(myChart);

    for (let info of Object.values(currentRegionInfo)){ // ---- updating the chart
        info[1][currentDataType] && /// info[0] -> country name. info[1] -> covid data. info[1][i] -> covid specific data (from 0 to 3)
        addData(myChart, info[0], info[1][currentDataType])
    }
}

function updateDataType(dataType) {
    removeData(myChart);
    currentDataType = dataType; // for future refrence and updatinng header
    for (let info of Object.values(currentRegionInfo)){ 
        info[1][dataType] && 
        addData(myChart, info[0], info[1][dataType])
    }
}

function updateHeadline(country, data){
    switch (data){
        case 0:
            data = 'Confirmed';
            break;
        case 1:
            data = 'Recovered';
            break;
        case 2:
            data = 'Critical';
            break;
        case 3:
            data = 'Deaths';
            break;
    }
    myChart.data.datasets[0].label = `${country} - ${data}`
    myChart.update();    
}

// update names listing of countries per region

function updateRegionCountryNames(region){
    let currentRegionCountries = []
    regionInfo[region].forEach(el => {
        el && currentRegionCountries.push(el)
    })

    for (let country of currentRegionCountries){
        document.querySelector('p').innerHTML = '';
        document.querySelector('p').insertAdjacentHTML('afterend', country + '<br>');
    }

}

/// --- creating event listners on buttons. ---
const [confirmedButton, deathsButton, recoveredButton, criticalButton,
asiaButton, europeButton, africaButton, americaButton, oceaniaButton] = document.querySelectorAll('button');

asiaButton.addEventListener('click', () => {
    currentRegion ='Asia';
    updateDataByRegion(currentRegion)
    updateRegionCountryNames('Asia')
    updateHeadline(currentRegion, currentDataType);
})

europeButton.addEventListener('click', () => {
    currentRegion ='Europe';
    updateDataByRegion(currentRegion)
    updateRegionCountryNames('Europe')
    updateHeadline(currentRegion, currentDataType);
})

africaButton.addEventListener('click', () => {
    currentRegion ='Africa';
    updateDataByRegion(currentRegion)
    updateRegionCountryNames('Africa')
    updateHeadline(currentRegion, currentDataType);
})

americaButton.addEventListener('click', () => {
    currentRegion ='Americas';
    updateDataByRegion(currentRegion)
    updateRegionCountryNames('Americas')
    updateHeadline(currentRegion, currentDataType);
})

oceaniaButton.addEventListener('click', () => {
    currentRegion ='Oceania';
    updateDataByRegion(currentRegion);
    updateRegionCountryNames('Oceania')
    updateHeadline(currentRegion, currentDataType);
})


confirmedButton.addEventListener('click', () => {
    currentDataType = 0;
    updateDataType(currentDataType)
    updateHeadline(currentRegion, currentDataType);
})

criticalButton.addEventListener('click', () => {
    currentDataType = 2;
    updateDataType(currentDataType);
    updateHeadline(currentRegion, currentDataType);
})

deathsButton.addEventListener('click', () => {
    currentDataType = 3;
    updateDataType(currentDataType);
    updateHeadline(currentRegion, currentDataType);
})

recoveredButton.addEventListener('click', () => {
    currentDataType = 1;
    updateDataType(currentDataType);
    updateHeadline(currentRegion, currentDataType);
})
