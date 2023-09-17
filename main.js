const dataChild = document.getElementById('dyshi');

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
    } catch (error) {
        console.error('An error occurred:', error);
    }
}


