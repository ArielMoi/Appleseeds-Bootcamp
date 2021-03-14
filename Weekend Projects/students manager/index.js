// variables for continue use.
const studentsContainer = document.querySelector('.students-container');

const myApi = 'https://apple-seeds.herokuapp.com/api/users/';

let studentsData = {};
const headerTR =
    `<th data-type="firstName">firstName</th>
<th data-type="lastName">lastName</th>
<th data-type="capsule">capsule</th>
<th data-type="gender">gender</th>
<th data-type="age">age</th>
<th data-type="city">city</th>
<th data-type="hobby">hobby</th>`;

let editedStudent; // is updated. for edit mode.


//! FUNCTIONS 

async function collectingStudentsData() { // func to collect data from API
    let response = await fetch(myApi);
    response = await response.json();

    await Promise.all(
        response.map(async (el, i) => {
            let responsePerUser = await fetch(`${myApi}${i}`);

            responsePerUser = await responsePerUser.json();

            response[el.id].age = responsePerUser.age;
            response[el.id].city = responsePerUser.city;
            response[el.id].gender = responsePerUser.gender;
            response[el.id].hobby = responsePerUser.hobby;
            response[el.id].editButton = 'Edit';
            response[el.id].deleteButton = 'Delete';

            studentsData[el.id] = response[el.id];
        }))

    localStorage.setItem('studentsData', JSON.stringify(studentsData));
    document.querySelector('.spinner-container').style.display = 'none'; // hide loader when data finshed loading
}

function displayingData(students = studentsData) { // create th and td and adding them to table in html
    studentsContainer.innerHTML = '';

    let tr = document.createElement('tr');
    tr.innerHTML = headerTR;
    studentsContainer.appendChild(tr);

    for (let student in students) {
        let tr = document.createElement('tr');

        tr.innerHTML =
            `<td data-row="${student}" data-type="firstName">${students[student].firstName}</td>
        <td data-row="${student}" data-type="lastName">${students[student].lastName}</td>
        <td data-row="${student}" data-type="capsule">${students[student].capsule}</td>
        <td data-row="${student}" data-type="gender">${students[student].gender}</td>
        <td data-row="${student}" data-type="age">${students[student].age}</td>
        <td data-row="${student}" data-type="city">${students[student].city}</td>
        <td data-row="${student}" data-type="hobby">${students[student].hobby}</td>
        <button data-row="${student}" class='edit-button'>${students[student].editButton}</button>
        <button data-row="${student}" class='delete-button'>${students[student].deleteButton}</button>
        `

        studentsContainer.appendChild(tr);
    }
}

function deleteRow(rowNum) {
    delete studentsData[rowNum];
    displayingData();
    updateLocalStorage();
}

let isEdited = false;

function editRow(rowNum) {
    isEdited = true;

    let studentData = studentsData[rowNum];

    studentsData[rowNum] = {
        id: studentData.id,
        firstName: `<input type="text" data-type="firstName" value="${studentData.firstName}">`,
        lastName: `<input type="text" data-type="lastName" value="${studentData.lastName}">`,
        capsule: `<input type="text" data-type="capsule" value="${studentData.capsule}">`,
        age: `<input type="text" data-type="age" value="${studentData.age}">`,
        city: `<input type="text" data-type="city" value="${studentData.city}">`,
        gender: `<input type="text" data-type="gender" value="${studentData.gender}">`,
        hobby: `<input type="text" data-type="hobby" value="${studentData.hobby}">`,
        editButton: 'Confirm',
        deleteButton: 'Cancel'
    } //  replace text to input.

    displayingData(); /// * updating
    return studentData; //* to save original student data.

}

function applyEditOnRow(rowNum, studentData, confirm = true) {
    if (confirm) {
        let inputs = document.querySelectorAll('input')
        let firstInput = true; // ignores search input (the first input)
        for (let input of inputs) {
            if (!firstInput) {
                if (input.value != input.getAttribute('value')) {
                    let type = input.getAttribute('data-type');
                    studentData[type] = input.value;
                }
            } else firstInput = false;
        }
    }
    isEdited = false;
    studentsData[rowNum] = studentData;
    displayingData();
    updateLocalStorage();
}

function searching(value) {
    displayingData(); // false
    let allRows = document.querySelectorAll('tr');
    studentsContainer.innerHTML = ''; // headerTH

    let isHeader = true; // * so to skip the header of the table
    for (let i in allRows) {
        if (isHeader) {
            studentsContainer.appendChild(allRows[i]);
            isHeader = false;
        } else {
            if (allRows[i].textContent.toLowerCase().includes(value.toLowerCase())) {
                studentsContainer.appendChild(allRows[i])
            }
        }
    }
} // TODO: fix ERROR (doesn't break - throws error in console because all allRows becomes shorter)


function sortBy(typeToSort) {
    let studentsArray = [];

    for (let student of Object.values(studentsData)) {
        studentsArray.push([student[typeToSort], student.id]);
    }

    studentsArray.sort(); // * create array to sort him by the type to sort

    let sortedObj = {};
    let count = 0;
    for (student of studentsArray) {
        sortedObj[count++] = studentsData[student[1]] // creating new students obj by order of the sort
    }

    displayingData(sortedObj);
}

// * weather window
async function fetchWeather(city, htmlElement) {
    let weatherData = await fetch(
        `https://api.codetabs.com/v1/proxy?quest=api.openweathermap.org/data/2.5/weather?q=${city.split(' ').join('-')}&units=metric&appid=555866706cc6ebcb5c906b94a54a6c36`)
    weatherData = await weatherData.json();

    createsWindowInHtml(htmlElement, weatherData.main.temp, city)
}

function createsWindowInHtml(htmlElement, temp, city) {
    let div = document.createElement('div');

    div.classList.add('weather-window')
    div.innerHTML = `${city} temp: ${temp}&#x2103;`

    htmlElement.appendChild(div);
}


//! EVENT LISTENERS

studentsContainer.addEventListener('click', (e) => {
    let row = e.target.getAttribute('data-row');
    if (e.target.innerText == 'Confirm') {
        applyEditOnRow(row, editedStudent);
    }
    if (e.target.innerText == 'Edit') {
        if (!isEdited) {
            editedStudent = editRow(row);
        }
    }
    if (e.target.innerText == 'Delete') {
        deleteRow(row);
    }
    if (e.target.innerText == 'Cancel') {
        applyEditOnRow(row, editedStudent, false);
    }
})

function updateLocalStorage() { // keep the local storage updated
    localStorage.removeItem('studentsData');
    localStorage.setItem('studentsData', JSON.stringify(studentsData));
}

// search input
document.querySelector('input').addEventListener('input', (event) => {
    searching(event.target.value) // search on each input on search input
});

//sortBy input (select)
document.querySelector('select').addEventListener('input', (event) => {
    sortBy(event.target.value);
});

studentsContainer.addEventListener('mouseover', (event) => { // weather info getter
    if (event.target.getAttribute('data-type') == 'city') {
        event.target.innerText != 'city' && fetchWeather(event.target.innerText, event.target) // fetch weather data from api and show it in DOM     
    }
})
studentsContainer.addEventListener('mouseout', (event) => { // weather info remover
    if (event.target.getAttribute('data-type') == 'city') {
        document.querySelector('.weather-window') && document.querySelector('.weather-window').remove(); // remove weather info on mouse out
    }
})


// * program:
if (localStorage.getItem('studentsData')) { /// if data eas already loaded
    studentsData = JSON.parse(localStorage.getItem('studentsData'));
    document.querySelector('.spinner-container').style.display = 'none'; // hide loader when data finished loading
    displayingData();
} else { // if data wasn't loaded yet
    collectingStudentsData().then(() => {
        displayingData();
    });
}