var israelLanguage = 'Hebrew';
var israelIsIsland = false;
var israelpopulation = 8;
var country = 'israel';

function countryToLiveIn(language, isisland, population, country) {
    if (language == 'English' && population < 50 && !isisland){
        console.log(`you should live in ${country}`);
    } else {
        console.log(`${country} does not meet your criteria.`);
    }
}

countryToLiveIn(israelLanguage, israelIsIsland, israelpopulation, country);
countryToLiveIn('English', false, 45, 'Finland');