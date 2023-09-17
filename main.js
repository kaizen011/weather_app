const dataChild = document.getElementById('dyshi');
const body = document.getElementsByClassName('body');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click',()=>{
    const searchTerm = searchInput.value.trim();
    if(searchTerm !== ''){
        searchCity(searchTerm);
    }
})


async function searchCity(query){
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=8caf1fc5914a41f5a9a161626231709&s&q=${query}&aqi=yes`, { mode: 'cors' });
        const weatherData = await response.json();
        dataChild.textContent = weatherData.current.temp_c;
        dataChild.textContent = dataChild.textContent + "C " + weatherData.current.temp_f + "F";
    } catch (error) {
        console.error('An error occurred:', error);
    }
    return dataChild;
}


// Changing image background in relation to weather temperature
if (dataChild < 20){
    const img = document.getElementById();
    body.appendChild()
}
