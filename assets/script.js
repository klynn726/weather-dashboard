// search for a city
function searchInput() {
  var cityName = document.getElementById('cityInput').value;
  // console.log(cityName);

  //enter the city into the API
  //see activities 1 & 2

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=da87077027a11743c752625320934faa")
  .then(function(response){
    // console.log('first response', response)
     //return weather data for that city 
    return response.json();
  })
  .then(function(data) {
    // console.log('second response', data);

    //write the weather data to the right side - current
    var now = moment().format('MM/DD/YYYY');
    document.getElementById('#wxHeading').textContent = cityName + "(" + now + ")";




    

  });

  // .catch(function(error){
  //   console.log(error);
  // });









}










//write the weather data to the lower right side - future



//put that city into local storage



//write that city on the left side
//use bootstrap list group card  --  <li class="list-group-item">

//pull up the previous search from local storage 
//when the city is clicked

document.getElementById('btnSubmit').addEventListener('click', searchInput);