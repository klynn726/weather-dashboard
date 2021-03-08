// search for a city
function searchInput() {
  var cityName = document.getElementById('cityInput').value;
  // console.log(cityName);

//write that city on the left side
//use bootstrap list group card  --  <li class="list-group-item">  https://getbootstrap.com/docs/4.0/components/card/
  var historyEl = document.createElement("li");
  historyEl.className = "list-group-item";

  uniqueId = Math.floor(Math.random() * 145)
  // console.log(uniqueId);

  historyEl.setAttribute("id", uniqueId);

  historyEl.innerHTML = localStorage.getItem(cityName);
  document.getElementById("historyList").appendChild(historyEl);


  document.getElementById('wxHeading').textContent = " ";
  var now = moment().format('MM/DD/YYYY');
  document.getElementById('wxHeading').textContent = cityName + " " + "(" + now + ")";

  //put that city into local storage
  localStorage.setItem(uniqueId, cityName)

  //enter the city into the API
  //see activities 1 & 2 for guidance

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=da87077027a11743c752625320934faa")
  .then(function(response){
    // console.log('first response', response)
    return response.json();
  })

  .then(function(data){

    var lat = data.coord.lat;
    var lon = data.coord.lon;

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=da87077027a11743c752625320934faa")

    .then(function(response){
      return response.json();
    })

    .then(function(data) {
      document.getElementById('wxNow').textContent = " ";
      document.getElementById('card1').textContent = " ";
      document.getElementById('card2').textContent = " ";
      document.getElementById('card3').textContent = " ";
      document.getElementById('card4').textContent = " ";
      document.getElementById('card5').textContent = " ";

      //write the weather data to the right side - current
      var wxBody = document.getElementById("wxNow")
  
      var todayIcon = document.createElement("img");
      todayIcon.setAttribute("src", "http://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png");

      // temp
      var tempEl = document.createElement("p");
      tempEl.innerHTML = "Temperature: " + data.current.temp + " degrees";
  
      // humidity
      var humidityEl = document.createElement("p");
      humidityEl.innerHTML = "Humidity: " + data.current.humidity + "%";
      // wind speed
      var windEl = document.createElement("p");
      windEl.innerHTML = "Wind speed: " + data.daily[0].wind_speed + " MPH";
      // UV index
      var uvEl = document.createElement("p");
      uvEl.innerHTML = "UV Index: " 
      
      var uvButton = document.createElement("button");
      uvButton.innerHTML = data.daily[0].uvi;

      wxBody.appendChild(tempEl);
      wxBody.appendChild(humidityEl);
      wxBody.appendChild(windEl);
      uvEl.appendChild(uvButton);
      wxBody.appendChild(uvEl);
      wxBody.appendChild(todayIcon);
  
      
      //write the weather data to the lower right side - future

        //day 1 card

      var wxOne = document.getElementById("card1");
      
      var dayOne = document.createElement("div");
      dayOne.className = "card-body";

      var addOne = document.createElement("h5");
      addOne.innerHTML = moment().add(1, 'd').format('MM/DD/YYYY');
      addOne.className = "card-title";

      //https://openweathermap.org/weather-conditions   how to write the icons to the page

      var iconOne = document.createElement("img");
      iconOne.setAttribute("src", "http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png");
     
      var tempOne = document.createElement("p");
      tempOne.innerHTML = "Temp: " + data.daily[1].temp.day + " deg";
      tempOne.className = "card-text"

      var humOne = document.createElement("p");
      humOne.innerHTML = "Humidity: " + data.daily[1].humidity + "%";
      humOne.className = "card-text";

      dayOne.appendChild(addOne);
      dayOne.appendChild(tempOne);
      dayOne.appendChild(humOne);
      dayOne.appendChild(iconOne);
      wxOne.appendChild(dayOne);
      

        //day 2 card

      var wxTwo = document.getElementById("card2");
      
      var dayTwo = document.createElement("div");
      dayTwo.className = "card-body";

      var addTwo = document.createElement("h5");
      addTwo.innerHTML = moment().add(2, 'd').format('MM/DD/YYYY');

      addTwo.className = "card-title";

      var iconTwo = document.createElement("img");
      iconTwo.setAttribute("src", "http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png");

      var tempTwo = document.createElement("p");
      tempTwo.innerHTML = "Temp: " + data.daily[2].temp.day + " deg";
      tempTwo.className = "card-text"

      var humTwo = document.createElement("p");
      humTwo.innerHTML = "Humidity: " + data.daily[2].humidity + "%";
      humTwo.className = "card-text";

      dayTwo.appendChild(addTwo);
      dayTwo.appendChild(tempTwo);
      dayTwo.appendChild(humTwo);
      dayTwo.appendChild(iconTwo);
      wxTwo.appendChild(dayTwo);

        //day 3 card
     
      var wxThree = document.getElementById("card3");
      
      var dayThree = document.createElement("div");
      dayThree.className = "card-body";

      var addThree = document.createElement("h5");
      addThree.innerHTML = moment().add(3, 'd').format('MM/DD/YYYY');

      addThree.className = "card-title";

      var iconThree = document.createElement("img");
      iconThree.setAttribute("src", "http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png");

      var tempThree = document.createElement("p");
      tempThree.innerHTML = "Temp: " + data.daily[3].temp.day + " deg";
      tempThree.className = "card-text"

      var humThree = document.createElement("p");
      humThree.innerHTML = "Humidity: " + data.daily[3].humidity + "%";
      humThree.className = "card-text";

      dayThree.appendChild(addThree);
      dayThree.appendChild(tempThree);
      dayThree.appendChild(humThree);
      dayThree.appendChild(iconThree);
      wxThree.appendChild(dayThree);

        //day 4 card

      var wxFour = document.getElementById("card4");
      
      var dayFour = document.createElement("div");
      dayFour.className = "card-body";

      var addFour = document.createElement("h5");
      addFour.innerHTML = moment().add(4, 'd').format('MM/DD/YYYY');

      addFour.className = "card-title";

      var iconFour = document.createElement("img");
      iconFour.setAttribute("src", "http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png");

      var tempFour = document.createElement("p");
      tempFour.innerHTML = "Temp: " + data.daily[4].temp.day + " deg";
      tempFour.className = "card-text"

      var humFour = document.createElement("p");
      humFour.innerHTML = "Humidity: " + data.daily[4].humidity + "%";
      humFour.className = "card-text";

      dayFour.appendChild(addFour);
      dayFour.appendChild(tempFour);
      dayFour.appendChild(humFour);
      dayFour.appendChild(iconFour);
      wxFour.appendChild(dayFour);

        //day 5 card

      //date
 
      var wxFive = document.getElementById("card5");
      
      var dayFive = document.createElement("div");
      dayFive.className = "card-body";

      var addFive = document.createElement("h5");
      addFive.innerHTML = moment().add(5, 'd').format('MM/DD/YYYY');

      addFive.className = "card-title";

      var iconFive = document.createElement("img");
      iconFive.setAttribute("src", "http://openweathermap.org/img/w/" + data.daily[5].weather[0].icon + ".png");

      var tempFive = document.createElement("p");
      tempFive.innerHTML = "Temp: " + data.daily[5].temp.day + " deg";
      tempFive.className = "card-text"

      var humFive = document.createElement("p");
      humFive.innerHTML = "Humidity: " + data.daily[5].humidity + "%";
      humFive.className = "card-text";

      dayFive.appendChild(addFive);
      dayFive.appendChild(tempFive);
      dayFive.appendChild(humFive);
      dayFive.appendChild(iconFive);
      wxFive.appendChild(dayFive);

      //uv Index rating scale colors per wx channel: https://weather.com/science/weather-explainers/news/uv-index-sunburn-skin-dangers

      if (uvButton.value <= 2){
        uvButton.className = "btn-success";
      }
      else if (2 < uvButton.value <= 5){
        uvButton.className = "btn-primary";
      }
      else if (6<= uvButton.value < 8){
        uvButton.className = "btn-warning";
      }
      else if (8<= uvButton.value < 11){
        uvButton.className = "btn-danger";
      }
      else {
        uvButton.className = "btn-dark";
      }
  
  
    });

  })

}

// var historyList = document.querySelector('.histList');

// historyList.onClick = function (event) {
//   event.preventDefault();

//   var newSearch = document.getElementById(uniqueId).value = localStorage.getItem(uniqueId);
//   console.log(newSearch)
//   searchInput(newSearch)
// }

document.getElementById('btnSubmit').addEventListener('click', searchInput);