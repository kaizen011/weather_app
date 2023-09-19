const dataChild = document.getElementById('dyshi');
const dataChild2= document.getElementById('treshi');
const body = document.getElementsByClassName('body');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const gjakovaData = document.getElementById('weather-text');
const gjakovaBtn = document.getElementById('get-gjakova');
const cond = document.getElementById('cond');
const results = document.getElementsByClassName('results');
const kondi = document.getElementById('kondi')

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
        dataChild2.textContent = "Condition" + weatherData.condition.text;
        
    } catch (error) {
        console.error('An error occurred:', error);
    }
    return dataChild;
}



gjakovaBtn.addEventListener('click', () => {
    gjakova(); // Call the initial fetch for Gjakova when the button is clicked
    fetchWeatherPeriodically(); // Start the periodic fetching loop
});

async function gjakova() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b68fbe11005642c2973171623231909&s&q=Gjakova&aqi=yes`, { mode: 'cors' });
        const weatherDataGK = await response.json();
        gjakovaData.textContent = "Degrees Celsius: " + weatherDataGK.current.temp_c + "°C";
        dataChild2.textContent = weatherDataGK.current.condition.text;
         if(dataChild2.textContent.trim() == "Patchy rain possible"){
            const rain = document.createElement("img");
               rain.src = "http://cdn.weatherapi.com/weather/64x64/day/176.png";
               rain.id = "raini";
               kondi.appendChild(rain);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

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
