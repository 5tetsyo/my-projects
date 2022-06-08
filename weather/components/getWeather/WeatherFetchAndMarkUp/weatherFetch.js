import axios from "axios"
function setBackground(text, isDay) {
  console.log(isDay);
  if(text.toLowerCase().includes('rain') || text.toLowerCase().includes('drizzl')) {
    return "url(https://wallpaperaccess.com/full/680931.jpg)"
  } else if (text.toLowerCase().includes('sun') || text.toLowerCase().includes('clear') ) {
    return isDay === 0 ? "url(https://img.wallpapersafari.com/desktop/1920/1080/17/29/QBGE4P.jpg)" : "url(https://img.wallpapersafari.com/desktop/1920/1080/22/71/qdE7VD.jpg)"
  } else if (text.toLowerCase().includes('cloud') || text.toLowerCase().includes('overcast')) {
    return "url(https://wallpapercave.com/wp/wp7033718.jpg)"
  } else if (text.toLowerCase().includes('snow')) {
    return "url(https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
  } else if (text.toLowerCase().includes('mist')) {
    return "url(https://img.wallpapersafari.com/desktop/1920/1080/49/44/dkYjHh.jpg)"
  }
}

export async function changeWeather(setValue, city) {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: city === null ? 'Lviv' : city},
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': 'a3ad1aa1bfmshfb2151e71ed5ff7p1b57a3jsnc0606611b4ca'
    }
  };
  const response = await axios.request(options)
  const background = setBackground(response.data.current.condition.text, response.data.current.is_day);
  setValue({...response.data, background: background})
  console.log(response.data);
}