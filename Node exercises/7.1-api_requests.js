const axios = require('axios');
const request = require('request')
const got = require("got");

const collectRandomJoke = async() => {
    const {data} = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(data.value);
}


const requireCollect = () => {
    request({ url: "https://api.chucknorris.io/jokes/random", json: true}, (error, {body}) => {
        if (error){
            console.log(error);
        } else {
            console.log(body.value);
        }
    });
}

const gotCollect = () => {
    got.get("https://api.chucknorris.io/jokes/random", {responseType: 'json'}).then(res => {
        console.log(res.body.value);
    })
}

collectRandomJoke()
requireCollect();
gotCollect();