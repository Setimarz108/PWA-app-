
import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY ='117a53594cb9a257a4814c897429b283'
 
 export  const fetchWeather = async (query) => {

    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data;

}

