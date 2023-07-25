const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name= document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_rel_val = document.getElementById("temp_rel_val")
const datahide = document.querySelector(".middle_layer");

const getInfo = async(event)=>{
    event.preventDefault();
    let cityval = cityName.value;
    
    if(cityval==="")
    {
       city_name.innerText = "plz write the name before search";
    
       datahide.classList.add("data_hide");
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=3ba0e31dae462355ab3e92180050ef72`;
        const response = await fetch(url);
        const data= await response.json();
        const arrData = [data];

        // city_name.innerText =`${arrData[0].name}, ${arrData[0].sys.country}`;
        // datahide.classList.remove("data_hide");
       
        console.log(`${arrData[0].name} and ${arrData[0].sys.country} and ${arrData[0].main.temp}`);
       
        city_name.innerText =arrData[0].name;
        temp_rel_val.innerText= arrData[0].main.temp;
        temp_status.innerText= arrData[0].weather[0].main;
       
        datahide.classList.remove('data_hide');

         }
         catch{
                  console.log( city_name )
                  console.log(cityval)
                  city_name.innerText = "plz enter the city name properly";
                  datahide.classList.add("data_hide");
              }
        }
}

submitBtn.addEventListener('click', getInfo)