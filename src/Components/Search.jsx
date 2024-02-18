import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import {fetchCurrentWeatherAndForecast} from '../features/weatherDataSlice'
import {FaSearch} from 'react-icons/fa'
import list from '../data/cities_list.json'
export default function Search() {
    const dispatch = useDispatch();
    const [city, setCity] = useState('Dhaka');
    const handleSearch = () => {
      const lowercaseCity = city.toLowerCase();
      const cityData = list.find(item => {
        const lowercaseName = item.name.toLowerCase();
        const lowercaseCountry = item.country.toLowerCase();
        return lowercaseName === lowercaseCity || lowercaseCountry === lowercaseCity;
      });
    
      if (cityData) {
        console.log(cityData,city);
        dispatch(fetchCurrentWeatherAndForecast(cityData.name));
      } else {
        setCity('Dhaka');
        dispatch(fetchCurrentWeatherAndForecast('Dhaka'));
      }
    };
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bf0a94dd9ee936700536ecc7976b7e8e&units=metric`)
            .then((response) => response.json())
            .then((data) => {
              const cityName = data.name;
              setCity(cityName);
              dispatch(fetchCurrentWeatherAndForecast(cityName));
            })
            .catch((error) => {
              console.error('Error fetching geolocation data:', error);
            });
        });
      } else {
        console.error('Geolocation is not available in this browser.');
      }
      dispatch(fetchCurrentWeatherAndForecast(city));
    }, []);
    return (
      <div className=" flex justify-center items-center">
          <div className="relative w-[90%] md:w-[80%]">
              <input
                  placeholder="Search for cities"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className=" text-[#AAAEB7] outline-none w-full h-14 rounded-xl px-10   bg-[#202B3B] font-bold uppercase placeholder:lowercase"
                />
                <FaSearch  className=" text-white w-12 h-12 p-3 rounded-full absolute top-2 right-4  cursor-pointer"  onClick={handleSearch}/>
          </div>
      </div>
    );
  }
  