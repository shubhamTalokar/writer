import React, {useEffect, useState} from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f6570ce050bab8227640dac184731462`
            const response = await fetch(url);
            const resJson = await response.json();
           console.log(response);
           setCity(resJson.main);
        };

        fetchApi();
    },[search] ) 

    return( 
        <>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    value={search}
                    className="inputfeild" 
                   onChange= { (event) => { setSearch(event.target.value) } } />
                </div> 

        {!city ? (
                
            <p classNane="errorMsg"> NO Data Fount </p>
        ) :  (
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"> </i>{search}
            </h2>
            <h1 className="temp">
            {city.temp}°Cel
            </h1>
            <h3 className="tempmin_max"> min : {city.temp_min}°Cel | max : {city.temp_min}°Cel </h3>
         
        </div>
            
        <div className = "wave -one"></div>
        <div className = "wave -two"></div>
        <div className = "wave -three"></div>
        </div>
        )}
            </div>
        </>        
    )
}

export default Tempapp;