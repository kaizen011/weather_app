// Me hek tabela te nalt qe jon tkalunen
const dataChild = document.getElementById('dyshi');
const condition= document.getElementById('condition');
const body = document.getElementsByClassName('body');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const gjakovaData = document.getElementById('weather-text');
const gjakovaBtn = document.getElementById('get-gjakova');
const gkIMG = document.getElementById('gjakova');
const pejaParent = document.getElementById('pejacity')
const test = document.getElementById('hello');




searchButton.addEventListener('click',()=>{
    const searchTerm = searchInput.value.trim();
    if(searchTerm !== ''){
        searchCity(searchTerm);
    }
})


async function searchCity(query){
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b68fbe11005642c2973171623231909&s&q=${query}&aqi=yes`, { mode: 'cors' });
        const weatherData = await response.json();
        dataChild.textContent = weatherData.current.temp_c;
        dataChild.textContent = "Degrees Celsius:  " + dataChild.textContent + "°C";
        
    } catch (error) {
        console.error('An error occurred:', error);
    }
    return dataChild;
}



gjakovaBtn.addEventListener('click', () => {
    gjakova(); // Call the initial fetch for Gjakova when the button is clicked
    peja();
    fetchWeatherPeriodically(); // Start the periodic fetching loop
});

async function gjakova() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b68fbe11005642c2973171623231909&s&q=Gjakova&aqi=yes`, { mode: 'cors' });
        const weatherDataGK = await response.json();
        gjakovaData.textContent = weatherDataGK.current.temp_c + "°C";
        condition.textContent = weatherDataGK.current.condition.text;
        if(condition.textContent.trim() == "Clear"){
         const rain = document.createElement("img");
            rain.src = "http://cdn.weatherapi.com/weather/64x64/day/113.png";
            dataChild.appendChild(rain);
            condition.textContent = "  Me diell";
     }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}



async function peja() {
   try {
       const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b68fbe11005642c2973171623231909&s&q=Peja&aqi=yes`, { mode: 'cors' });
       const weatherDataPJ = await response.json();
       const pejaData = document.createElement("h1");
       pejaData.textContent = weatherDataPJ.current.temp_c + "°C";
       const pejaCondition = document.createElement("h1");
       pejaCondition.textContent = weatherDataPJ.current.condition.text;
       const holder = document.createElement("h2");


       pejaParent.appendChild(pejaCondition);
       pejaParent.appendChild(holder);
       holder.id = "holder";
       pejaParent.appendChild(pejaData);
       if(pejaCondition.textContent.trim() == "Clear"){
        const pejarain = document.createElement("img");
           pejarain.src = "http://cdn.weatherapi.com/weather/64x64/day/113.png";
           holder.appendChild(pejarain);
           pejaCondition.textContent = "Me Diell";

    }
   } catch (error) {
       console.error('An error occurred:', error);
   }
}


// async function prishtine() {
//    try {
//        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b68fbe11005642c2973171623231909&s&q=Pristina&aqi=yes`, { mode: 'cors' });
//        const weatherDataPJ = await response.json();
//        const pejaData = document.createElement("h1");
//        pejaData.textContent = weatherDataPJ.current.temp_c + "°C";
//        const pejaCondition = document.createElement("h1");
//        pejaCondition.textContent = weatherDataPJ.current.condition.text;
//        if(pejaCondition.textContent.trim() == "Clear"){
//         const pejarain = document.createElement("img");
//            pejarain.src = "http://cdn.weatherapi.com/weather/64x64/day/113.png";
//            const holder = document.createElement("h1");
//            holder.appendChild(pejarain);
//            pejaCondition.textContent = "Me Diell";
//     }
//    } catch (error) {
//        console.error('An error occurred:', error);
//    }
// }






// GJakove prishtine rahovec prizren deqan peje
// function fetchWeatherPeriodically() {
//     let count = 0;
//     const totalFetches = 96;
//     const interval = 15 * 60 * 1000; // 15 minutes in milliseconds

//     async function fetchAndSchedule() {
//         await gjakova();
        
//         count++;

//         if (count < totalFetches) {
//             setTimeout(fetchAndSchedule, interval);
//         }
//     }

//     fetchAndSchedule();
// }
   //API Gjakova https://api.weatherapi.com/v1/current.json?key=8caf1fc5914a41f5a9a161626231709&s&q=Gjakova&aqi=yes
// }
// Changing image background in relation to weather temperature

// Favority giphy gif: https://giphy.com/gifs/dog-gFW9rRpOkMRBY2KF6s

// if (dataChild < 20){
//     const img = document.getElementById();
//     body.appendChild()
// 
