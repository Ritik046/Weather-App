// console.log('My name is ritik');

// const API_KEY="524901&lang=fr&appid=493614f9f7a20ebbac52fa6401b38e53";
// async function showwheather(){
//     // let latitude=15.3333;
//     // let longitude=74.0833;
//     try{
//         let city="goa";
//         //API CALL
//         const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?id=524901&lang=fr&appid=493614f9f7a20ebbac52fa6401b38e53&units=metric`);
    
//        //convert the required data into json format
//         const data=await response.json();
//         console.log("wheather data:->"+data);
    
//         let newPara=document.createElement('p');
//         newPara.textContent=`${data?.main?.temp.toFixed(2)} celsius`   //optinal chaining operator
//        document.body.appendChild(newPara);

//     //renderWeathreInfo(data);

//     }
//     catch(err){
//         console.log("Error Found",err);

//     }

// }


// `const userTab=document.querySelector("[data-userWeather]");`
// `const searchTab=document.querySelector("[data-serachWeather]");`
// `const userContainer=document.querySelector(".weather-container");`
// `const grantAccessContainer=document.querySelector(".grant-location-container");`
// `const searchForm=document.querySelector("[data-searchForm]");`
// `const loadingScreen=document.querySelector(".loading-container");`
// `const userInfoContainer=document.querySelector(".user-info-container");`


// //Initialy variables need??

// let oldTab=userTab;

// const API_KEY = "524901&lang=fr&appid=493614f9f7a20ebbac52fa6401b38e5";
// oldTab.classList.add("current-tab");
// getfromSessionStorage();


// //one more thing

// function SwitchTab(newTab){
// if(newTab!=oldTab){
//     oldTab.classList.remove("curret-tab");
//     oldTab=newTab;
//     oldTab.classList.add("current-tab");

//     if(!searchForm.classList.contains("active")){
//         userInfoContainer.classList.remove("active");
//         grantAccessContainer.classList.remove("active");
//         searchForm.classList.add("active");

//     }
//     else{
//         searchForm.classList.remove("active");
//         userInfoContainer.classList.remove("active");
//         getfromSessionStorage();


//     }
// }
// }

// userTab.addEventListener("click",()=>{
//     SwitchTab(userTab);

// });

// searchTab.addEventListener("click",()=>{
//     SwitchTab(searchTab);

// });

// function getfromSessionStorage(){
//     const lcoalCoordinates=sessionStorage.getItem("user-coordinate");
//     if(!lcoalCoordinates){
//         grantAccessContainer.classList.add("active");
//     }
//     else{
//         const coordinate=JSON.parse(lcoalCoordinates);
//         fetchUserWeatherInfo(coordinate);
//     }
// }

// function fetchUserWeatherInfo(coordinate){
// const {lat,lon}=coordinate;
// //make garntcontainer invisible
// userInfoContainer.classList.remove("active");
// //make loder visible
// loadingScreen.classList.add("active");

// //API CALL

// try{
//     const response=await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={493614f9f7a20ebbac52fa6401b38e53}`
//     );
//     const data= await response.json();
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);

// }

// catch(err){
//     loadingScreen.classList.remove("active");
    
// }

// }

// function  renderWeatherInfo(weatherInfo){
//     const cityName=document.querySelector("[data-cityName]");
//     const courntryIcon=document.querySelector("[data-countryIcon]");
//     const desc=document.querySelector("[data-weatherDesc]");
//     const weatherIcon=document.querySelector("[data-weatherIcon]");
//     const temp=document.querySelector("[data-temp]");
//     const windspeed=document.querySelector("[data-windspeed]");
//     const humidity=document.querySelector("[data-humidity]");
//     const cloudiness=document.querySelector("[data-cloudiness]");

//     //fetch values from weather info objects and put in UI elements

//       cityName.innerText = weatherInfo?.name;
// countryIcon.src = `https://flagcdn.com/144x108/5{weatherInfo?.sys?.country.toLowerCase()}.png`;
// desc.innerText = weatherInfo?.weather?. [0]?.description; 
// weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
// temp.innerText = weatherInfo?.main?.temp;
// windspeed. innertext = weatherInfo?.wind?.speed;
// humidity.innertext = weatherInfo?.main?.humidity; 
// cloudiness.innerText = weatherInfo?.clouds?.all;


// }

// function getLocation(){
//     if(navigator.geolocation){
// navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
// //show an alert for no geolocation support availbale
//     }
// }
// function showPostion(position){
//     const userCoordinate={
//         lat:position.coords.latitude,
//         lon:position.coords.longitude,
//     }
//     sessionStorage.setItem("user-cooordinates",JSON.stringify(userCoordinate));
//     fetchUserWeatherInfo(userCoordinate);
    
// }

// const grantAccessButton=document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener("click",getLocation);

// const searchInput=document.querySelector("[data-searchInput]");

// searchForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let cityName=searchInput.ariaValueMax;
//     if(cityName=="")
//     return;
//     else
//     fetchUserWeatherInfo(cityName);
// })

// async function fetchUserWeatherInfo(city){
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");

//     try{
//         const response=await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={493614f9f7a20ebbac52fa6401b38e53}`
//         );
//         const data= await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch(err){
//         //hw
//     }
// }
//************************************************************************************************* */

// const userTab = document.querySelector("[data-userWeather]");
// const searchTab = document.querySelector("[data-serachWeather]");
// const userContainer = document.querySelector(".weather-container");
// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");

// // Initially variables need??

// let oldTab = userTab;

// const API_KEY = "493614f9f7a20ebbac52fa6401b38e5";
// oldTab.classList.add("current-tab");
// getFromSessionStorage();

// // One more thing

// function switchTab(newTab) {
//   if (newTab !== oldTab) {
//     oldTab.classList.remove("current-tab");
//     oldTab = newTab;
//     oldTab.classList.add("current-tab");

//     if (!searchForm.classList.contains("active")) {
//       userInfoContainer.classList.remove("active");
//       grantAccessContainer.classList.remove("active");
//       searchForm.classList.add("active");
//     } else {
//       searchForm.classList.remove("active");
//       userInfoContainer.classList.remove("active");
//       getFromSessionStorage();
//     }
//   }
// }

// userTab.addEventListener("click", () => {
//   switchTab(userTab);
// });

// searchTab.addEventListener("click", () => {
//   switchTab(searchTab);
// });

// function getFromSessionStorage() {
//   const localCoordinates = sessionStorage.getItem("user-coordinate");
//   if (!localCoordinates) {
//     grantAccessContainer.classList.add("active");
//   } else {
//     const coordinates = JSON.parse(localCoordinates);
//     fetchUserWeatherInfo(coordinates);
//   }
// }

// async function fetchUserWeatherInfo(coordinates) {
//   const { lat, lon } = coordinates;
//   // Make grant container invisible
//   userInfoContainer.classList.remove("active");
//   // Make loader visible
//   loadingScreen.classList.add("active");

//   // API CALL

//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//     );
//     const data = await response.json();
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
//   } catch (err) {
//     loadingScreen.classList.remove("active");
//   }
// }

// function renderWeatherInfo(weatherInfo) {
//   const cityName = document.querySelector("[data-cityName]");
//   const countryIcon = document.querySelector("[data-countryIcon]");
//   const desc = document.querySelector("[data-weatherDesc]");
//   const weatherIcon = document.querySelector("[data-weatherIcon]");
//   const temp = document.querySelector("[data-temp]");
//   const windspeed = document.querySelector("[data-windspeed]");
//   const humidity = document.querySelector("[data-humidity]");
//   const cloudiness = document.querySelector("[data-cloudiness]");

//   // Fetch values from weather info objects and put in UI elements

//   cityName.innerText = weatherInfo?.name;
//   countryIcon.src = `https://flagcdn.com/144x108/5${weatherInfo?.sys?.country.toLowerCase()}.png`;
//   desc.innerText = weatherInfo?.weather?.[0]?.description;
//   weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//   temp.innerText = weatherInfo?.main?.temp;
//   windspeed.innerText = weatherInfo?.wind?.speed;
//   humidity.innerText = weatherInfo?.main?.humidity;
//   cloudiness.innerText = weatherInfo?.clouds?.all;
// }

// function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       // Show an alert for no geolocation support available
//     }
//   }
  
//   function showPosition(position) {
//     const userCoordinate = {
//       lat: position.coords.latitude,
//       lon: position.coords.longitude,
//     };
//     sessionStorage.setItem("user-coordinate", JSON.stringify(userCoordinate));
//     fetchUserWeatherInfo(userCoordinate);
//   }
  
//   const grantAccessButton = document.querySelector("[data-grantAccess]");
//   grantAccessButton.addEventListener("click", getLocation);
  
//   const searchInput = document.querySelector("[data-searchInput]");
  
//   searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // let cityName = searchInput.ariaValueMax;
//     let cityName = searchInput.value;

//     if (cityName === "") {
//       return;
//     } else {
//       fetchUserWeatherInfo(cityName);
//     }
//   });
  
//   async function fetchUserWeatherInfo(city) {
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");
  
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//       );
//       const data = await response.json();
//       loadingScreen.classList.remove("active");
//       userInfoContainer.classList.add("active");
//       renderWeatherInfo(data);
//     } catch (err) {
//         console.error(err);
//     }
//   }
  

// const userTab = document.querySelector("[data-userWeather]");
// const searchTab = document.querySelector("[data-searchWeather]");
// const userContainer = document.querySelector(".weather-container");
// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");

// // Initially variables need??

// let oldTab = userTab;

// const API_KEY = "493614f9f7a20ebbac52fa6401b38e5"; // Replace with your valid API key
// oldTab.classList.add("current-tab");
// getFromSessionStorage();

// // One more thing

// function switchTab(newTab) {
//   if (newTab !== oldTab) {
//     oldTab.classList.remove("current-tab");
//     oldTab = newTab;
//     oldTab.classList.add("current-tab");

//     if (!searchForm.classList.contains("active")) {
//       userInfoContainer.classList.remove("active");
//       grantAccessContainer.classList.remove("active");
//       searchForm.classList.add("active");
//     } else {
//       searchForm.classList.remove("active");
//       userInfoContainer.classList.remove("active");
//       getFromSessionStorage();
//     }
//   }
// }

// userTab.addEventListener("click", () => {
//   switchTab(userTab);
// });

// searchTab.addEventListener("click", () => {
//   switchTab(searchTab);
// });

// function getFromSessionStorage() {
//   const localCoordinates = sessionStorage.getItem("user-coordinate");
//   if (!localCoordinates) {
//     grantAccessContainer.classList.add("active");
//   } else {
//     const coordinates = JSON.parse(localCoordinates);
//     fetchUserWeatherInfo(coordinates);
//   }
// }

// async function fetchUserWeatherInfo(coordinates) {
//   const { lat, lon } = coordinates;
//   // Make grant container invisible
//   userInfoContainer.classList.remove("active");
//   // Make loader visible
//   loadingScreen.classList.add("active");

//   // API CALL

//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//     );
//     const data = await response.json();
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
//   } catch (err) {
//     loadingScreen.classList.remove("active");
//     console.error(err);
//   }
// }

// function renderWeatherInfo(weatherInfo) {
//   const cityName = document.querySelector("[data-cityName]");
//   const countryIcon = document.querySelector("[data-countryIcon]");
//   const desc = document.querySelector("[data-weatherDesc]");
//   const weatherIcon = document.querySelector("[data-weatherIcon]");
//   const temp = document.querySelector("[data-temp]");
//   const windspeed = document.querySelector("[data-windspeed]");
//   const humidity = document.querySelector("[data-humidity]");
//   const cloudiness = document.querySelector("[data-cloudiness]");

//   // Fetch values from weather info objects and put in UI elements

//   cityName.innerText = weatherInfo?.name;
//   countryIcon.src = `https://flagcdn.com/144x108/5${weatherInfo?.sys?.country.toLowerCase()}.png`;
//   desc.innerText = weatherInfo?.weather?.[0]?.description;
//   weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//   temp.innerText = weatherInfo?.main?.temp;
//   windspeed.innerText = weatherInfo?.wind?.speed;
//   humidity.innerText = weatherInfo?.main?.humidity;
//   cloudiness.innerText = weatherInfo?.clouds?.all;
// }

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     // Show an alert for no geolocation support available
//   }
// }

// function showPosition(position) {
//   const userCoordinate = {
//     lat: position.coords.latitude,
//     lon: position.coords.longitude,
//   };
//   sessionStorage.setItem("user-coordinate", JSON.stringify(userCoordinate));
//   fetchUserWeatherInfo(userCoordinate);
// }

// const grantAccessButton = document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener("click", getLocation);

// const searchInput = document.querySelector("[data-searchInput]");

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let cityName = searchInput.value;

//   if (cityName === "") {
//     return;
//   } else {
//     fetchUserWeatherInfo(cityName);
//   }
// });

  

// async function fetchUserWeatherInfo(city) {
//   loadingScreen.classList.add("active");
//   userInfoContainer.classList.remove("active");
//   grantAccessContainer.classList.remove("active");

//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//     );
//     const data = await response.json();
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
//   } catch (err) {
//     loadingScreen.classList.remove("active");
//     console.error(err);
//   }
// }
//************************************************************************************************************ */
// const userTab = document.querySelector("[data-userWeather]");
// const searchTab = document.querySelector("[data-searchWeather]");
// const userContainer = document.querySelector(".weather-container");
// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");

// let oldTab = userTab;

// // const API_KEY = "493614f9f7a20ebbac52fa6401b38e53";
//  // Replace with your valid API key
// //  const API_KEY="d1845658f92b31c64bd94f06f7188c9c";

// const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
// oldTab.classList.add("current-tab");
// getFromSessionStorage();

// function switchTab(newTab) {
//   if (newTab !== oldTab) {
//     oldTab.classList.remove("current-tab");
//     oldTab = newTab;
//     oldTab.classList.add("current-tab");

//     if (!searchForm.classList.contains("active")) {
//       userInfoContainer.classList.remove("active");
//       grantAccessContainer.classList.remove("active");
//       searchForm.classList.add("active");
//     } else {
//       searchForm.classList.remove("active");
//       userInfoContainer.classList.remove("active");
//       getFromSessionStorage();
//     }
//   }
// }

// userTab.addEventListener("click", () => {
//   switchTab(userTab);
// });

// searchTab.addEventListener("click", () => {
//   switchTab(searchTab);
// });

// function getFromSessionStorage() {
//   const localCoordinates = sessionStorage.getItem("user-coordinate");
//   if (!localCoordinates) {
//     grantAccessContainer.classList.add("active");
//   } else {
//     const coordinates = JSON.parse(localCoordinates);
//     fetchUserWeatherInfo(coordinates);
//   }
// }

// async function fetchUserWeatherInfo(coordinates) {
//   const { lat, lon } = coordinates;
//   userInfoContainer.classList.remove("active");
//   loadingScreen.classList.add("active");

//   try {
//     const response = await fetch(
//       // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//       // `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`

//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//     );
//     const data = await response.json();
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
//   } catch (err) {
//     loadingScreen.classList.remove("active");
//     console.error(err);
//   }
// }

// function renderWeatherInfo(weatherInfo) {
//   const cityName = document.querySelector("[data-cityName]");
//   const countryIcon = document.querySelector("[data-countryIcon]");
//   const desc = document.querySelector("[data-weatherDesc]");
//   const weatherIcon = document.querySelector("[data-weatherIcon]");
//   const temp = document.querySelector("[data-temp]");
//   const windspeed = document.querySelector("[data-windspeed]");
//   const humidity = document.querySelector("[data-humidity]");
//   const cloudiness = document.querySelector("[data-cloudiness]");

//   cityName.innerText = weatherInfo?.name;
//   // countryIcon.src = `https://flagcdn.com/144x108/5${weatherInfo?.sys?.country.toLowerCase()}.png`;
//   countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;

//   desc.innerText = weatherInfo?.weather?.[0]?.description;
//   weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//   temp.innerText = `${weatherInfo?.main?.temp}℃`;
//   windspeed.innerText = `${weatherInfo?.wind?.speed}m/s`;
//   humidity.innerText = `${weatherInfo?.main?.humidity}%`;
//   cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
// }

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     alert("Geolocation is not supported in this browser.");
//   }
// }

// function showPosition(position) {
//   const userCoordinate = {
//     lat: position.coords.latitude,
//     lon: position.coords.longitude,
//   };
//   sessionStorage.setItem("user-coordinate", JSON.stringify(userCoordinate));
//   fetchUserWeatherInfo(userCoordinate);
// }

// const grantAccessButton = document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener("click", getLocation);

// const searchInput = document.querySelector("[data-searchInput]");

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let cityName = searchInput.value;

//   if (cityName === "") {
//     return;
//   } else {
//     fetchCityWeatherInfo(cityName);
//   }
// });

// async function fetchCityWeatherInfo(city) {
//   loadingScreen.classList.add("active");
//   userInfoContainer.classList.remove("active");
//   grantAccessContainer.classList.remove("active");

//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//     );
//     const data = await response.json();
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
//   } catch (err) {
//     loadingScreen.classList.remove("active");
//     console.error(err);
//   }
// }






const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initially vairables need????

let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});

//check if cordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //HW

    }

}

function renderWeatherInfo(weatherInfo) {
    //fistly, we have to fethc the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    console.log(weatherInfo);

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
}