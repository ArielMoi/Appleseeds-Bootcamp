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

        // console.log(regionInfo)
        // console.log(coronaInfo)

        getInfoByregion('Africa');

        // console.log(Object.values(currentRegionInfo))

        for (let info of Object.values(currentRegionInfo)){ // ---- creating the chart
            // console.log(info)
            info[1][0] && /// info[0] -> country name. info[1] covid data info[1][i] -> covid specific data
            addData(myChart, info[0], info[1][0])
        }

    })
})

function getInfoByregion(region, typeOfInfo = 0) {
    currentRegionInfo = []
    regionInfo[region].forEach(el => {
        el && currentRegionInfo.push([el, coronaInfo[el]])
    })

    currentRegionInfo = Object.values(currentRegionInfo).filter((el) => { /// filter un defined prevents bugs
        if (el[1]){
            return true;
        } else false;
    })
}

/// creating the chart - 

var ctx = document.getElementById('myChart').getContext('2d'); // element from dom
var myChart = new Chart(ctx, { /// creating chart with chart js
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Covis-19 World Wide Information',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)', /// commented because becomes irrelevant from too many data
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
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

function removeData(chart) { /// removes all data from chart
    chart.data.labels = '';
    chart.data.datasets.forEach((dataset) => {
        dataset.data = '';
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


/// creating event listners on buttons.
// each button - 
// removeData()
// addData()  -> with current information

// buttons of region will simply update -- currentRegionInfo


// add all country names in the region in the HTML