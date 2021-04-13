const chuckAPI = "https://api.chucknorris.io/jokes/random";

const https = require('https');

const req = https.request(chuckAPI, res => {
    let data = ''
    res.on('data', chunk => {
        data += chunk.toString();
    })

    res.on('end', () => {
        console.log(JSON.parse(data).value);
    })
})

req.on('error', err => {
    console.log(err);
})
req.end()