document.addEventListener('DOMContentLoaded', () => {
  var button = document.querySelector('.button');
  var inputValue = document.querySelector('.inputValue');
  var name = document.querySelector('.name');
  var temp = document.querySelector('.temp');
  var desc = document.querySelector('.desc');
  var humidity = document.querySelector('.humidity');
  var wind = document.querySelector('.wind');

  if (button) {
    button.addEventListener('click',function(){
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9998217d64fe5cbb7796546e8e0054f0&units=metric')
      .then(response => response.json())
      .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var humidityValue = data['main']['humidity'];
        var windValue = data['wind']['speed'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
      })


    .catch(err => alert('Wrong city name!'))
    }); 
  }
})
  
