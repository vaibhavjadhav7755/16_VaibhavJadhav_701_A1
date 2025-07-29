const fetch = require('node-fetch');

const  fetchDataFromGoogle= async()=>{
    try {
        const res = await fetch("https://www.google.com")
        const data = await res.text();
        console.log("fetch Data of Google---");
        console.log(data)
    } catch (error) {
        console.log("error fetching google data",error);
    }
}

fetchDataFromGoogle();