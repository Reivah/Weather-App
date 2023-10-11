const citySearch = document.querySelector('.city-search')
const submitBtn = document.querySelector('.search-btn')
const cityResult = document.querySelector('.city-result')
const date = document.querySelector('.date')
const imageBox = document.querySelector('.image-box')
const mainTemp = document.querySelector('.temp')
const couldsInfo = document.querySelector('.clouds')
const feelsTemp = document.querySelector('.feels-temp')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind-speed')
const windDeg = document.querySelector('.wind-deg')
const pressure = document.querySelector('.pressure')
const img = document.createElement('img')

const weatherData = () => {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&appid=a74b4223c04fb2978fa22db3652f8b6d&units=metric&land={pl}`
	)
		.then(Response => Response.json())
		.then(data => {
			cityResult.textContent = data.name
			date.textContent = new Date().toDateString()
			mainTemp.textContent = `${Math.round(data.main.temp)}°C`
			couldsInfo.textContent =
				data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)
			console.log(data)
			feelsTemp.textContent = `${Math.round(data.main.feels_like)}°C`
			humidity.textContent = `${data.main.humidity} %`
			windSpeed.textContent = `${data.wind.speed} m/s`
			windDeg.textContent = `${data.wind.deg}°`
			pressure.textContent = `${data.main.pressure} hPa`

			const weatherId = data.weather[0].id
			if (weatherId >= 200 && weatherId <= 232) {
				img.src = './img/Thunderstorm.png'
				img.setAttribute('alt', 'Thunderstorm')
				imageBox.appendChild(img)
			} else if (weatherId >= 300 && weatherId <= 321) {
				img.src = './img/Drizzle.png'
				img.setAttribute('alt', 'Drizzle')
				imageBox.appendChild(img)
			} else if (weatherId >= 500 && weatherId <= 502) {
				img.src = './img/Rain.png'
				img.setAttribute('alt', 'Rain')
				imageBox.appendChild(img)
			} else if (weatherId >= 600 && weatherId <= 622) {
				img.src = './img/Snow.png'
				img.setAttribute('alt', 'Snow')
				imageBox.appendChild(img)
			} else if (weatherId === 701) {
				img.src = './img/Mist.png'
				img.setAttribute('alt', 'Mist')
				imageBox.appendChild(img)
			} else if (weatherId === 801) {
				img.src = './img/LittleCloudly.png'
				img.setAttribute('alt', 'Little Cloudly')
				imageBox.appendChild(img)
			} else if (weatherId === 804) {
				img.src = './img/Clouds.png'
				img.setAttribute('alt', 'Overcast Clouds')
				imageBox.appendChild(img)
			} else if (weatherId >= 503 && weatherId <= 504) {
				img.src = './img/HeavyRain.png'
				img.setAttribute('alt', 'Heavy Rain')
				imageBox.appendChild(img)
			}else if(weatherId === 800){
                img.src = "./img/sun.png"
                img.setAttribute('alt', 'clear sky')
                imageBox.appendChild(img)
            }
		})
        .catch(() => alert('Cant find city name'))
}

submitBtn.addEventListener('click', weatherData)

weatherData()
