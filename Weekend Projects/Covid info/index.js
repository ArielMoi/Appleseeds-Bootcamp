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
        if (el[1]) {
            return true;
        } else false;
    })
}

// --- functions to update the chart per region or data ---
let currentDataType = 0;
let currentRegion;

function updateDataByRegion(region) {
    getInfoByregion(region);
    removeData(myChart);

    for (let info of Object.values(currentRegionInfo)) { // ---- updating the chart
        info[1][currentDataType] && /// info[0] -> country name. info[1] -> covid data. info[1][i] -> covid specific data (from 0 to 3)
            addData(myChart, info[0], info[1][currentDataType])
    }
}

function updateDataType(dataType) {
    removeData(myChart);
    currentDataType = dataType; // for future refrence and updatinng header
    for (let info of Object.values(currentRegionInfo)) {
        info[1][dataType] && // if there is info on the country then
            addData(myChart, info[0], info[1][dataType])
    }
}

function updateHeadline(country, data) {
    switch (data) {
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

function updateRegionCountryNames(region) {
    let currentRegionCountries = []
    regionInfo[region].forEach(el => {
        el && currentRegionCountries.push(el)
    })

    document.querySelector('.countries-of-region').innerHTML = ''; // removing prior countries
    for (let country of currentRegionCountries) {
        document.querySelector('.countries-of-region').insertAdjacentHTML('beforeend', `<p class='${country}'>${country}</p><br><br>`);
    }
}

// make sure chart is visible. prevents leaving her hidden after showing country info
function showChart() {
    document.querySelector('.chart-container').style.visibility = 'visible';
    document.querySelector('.country-info').style.visibility = 'hidden';
}

// function to update data type shown in chart (listner to buttons)
function updateDataTypeChart() {
    showChart(); // make sure the chart is shown (and not specifit country details)
    updateDataType(currentDataType);
    updateHeadline(currentRegion, currentDataType);
}

/// update chart and countries listing by current region selected
function updateRegionChart(){
    switch (currentRegion){ /// update colors per region.. creates more beautiful layout
        case 'Oceania':
            [myChart.data.datasets[0].backgroundColor, myChart.data.datasets[0].borderColor] = ['rgba(133, 63, 28, 0.555)', 'rgb(228, 110, 51)'];
            document.querySelector('.container').style.color = 'rgb(228, 110, 51)';
            break;
        case 'Americas':
            [myChart.data.datasets[0].backgroundColor, myChart.data.datasets[0].borderColor] = ['rgba(100, 105, 49, 0.445)', 'rgb(100, 105, 49)'];
            document.querySelector('.container').style.color = 'rgb(100, 105, 49)';
            break;
        case 'Africa':
            [myChart.data.datasets[0].backgroundColor, myChart.data.datasets[0].borderColor] = ['rgba(59, 121, 59, 0.541)', 'rgb(59, 121, 59)'];
            document.querySelector('.container').style.color = 'rgb(59, 121, 59)';
            break;
        case 'Europe':
            [myChart.data.datasets[0].backgroundColor, myChart.data.datasets[0].borderColor] = ['rgba(73, 50, 38, 0.438)', 'rgb(139, 70, 58)'];
            document.querySelector('.container').style.color = 'rgb(139, 70, 58)';
            break;
        case 'Asia':
            [myChart.data.datasets[0].backgroundColor, myChart.data.datasets[0].borderColor] = ['rgba(68, 127, 151, 0.541)', 'rgb(68, 128, 151)'];
            document.querySelector('.container').style.color = 'rgb(68, 128, 151)';
            break;
    }
    showChart();
    updateDataByRegion(currentRegion);
    updateRegionCountryNames(currentRegion)
    updateHeadline(currentRegion, currentDataType);
}

/// --- creating event listeners on buttons. ---
document.querySelector('.buttons').addEventListener('click', (event) => {
    switch (event.target.innerText){
        case 'Asia':
            currentRegion = 'Asia';
            updateRegionChart()
            break;
        case 'Europe':
            currentRegion = 'Europe';
            updateRegionChart()
            break;
        case 'Africa':
            currentRegion = 'Africa';
            updateRegionChart()
            break;
        case 'Americas':
            currentRegion = 'Americas';
            updateRegionChart()
            break;
        case 'Oceania':
            currentRegion = 'Oceania';
            updateRegionChart()
            break;
        case 'Confirmed':
            currentDataType = 0;
            updateDataTypeChart()
            break;
        case 'Deaths':
            currentDataType = 3;
            updateDataTypeChart()
            break;
        case 'Recovered':
            currentDataType = 1;
            updateDataTypeChart()
            break;
        case 'Critical':
            currentDataType = 2;
            updateDataTypeChart()
            break;
    }
})

// show case the specific country corona details - not in the chart but through divs with text 
document.querySelector('.countries').addEventListener('click', (el) => { // show info for each country
    document.querySelector('.chart-container').style.visibility = 'hidden'; // makes chart hidden and country info visible
    document.querySelector('.country-info').style.visibility = 'visible';

    let countryInfo = document.querySelector('.country-info')
    if (el.target.innerText.length < 40) { // prevents updating inner text to all countries in region (when target is the all div)
        countryInfo.querySelector('h1').innerText = `${el.target.innerText} Covid-19 Info:`;
    }

    let [confirmed, deaths, recovered, critical] = countryInfo.querySelectorAll('p'); // selecting all p to use for info
    confirmed.innerText = coronaInfo[el.target.innerText][0];
    deaths.innerText = coronaInfo[el.target.innerText][3];
    recovered.innerText = coronaInfo[el.target.innerText][1];
    critical.innerText = coronaInfo[el.target.innerText][2];
})