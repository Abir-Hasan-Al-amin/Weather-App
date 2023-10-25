import React from 'react'
import cloud  from '../assets/clouds.png'
import sun  from '../assets/sun.png'
import rain  from '../assets/rainy.png'
import mist  from '../assets/mist.png'
import snow  from '../assets/snow.png'
import thunder  from '../assets/thunder.png'
import moon from '../assets/moon.png'
import {  useSelector } from 'react-redux';
export default function Display() {
  const data=useSelector((state)=>state.curData);
  const name = data.currentWeather ? data.currentWeather.name : 'Dhaka';
  const humidity = data.currentWeather ? data.currentWeather.main.humidity : 0;
  const temp = data.currentWeather ? Math. round(data.currentWeather.main.temp) : 0;
  let pic=sun;
  if (data.currentWeather && data.currentWeather.weather && data.currentWeather.weather.length > 0) {
    const wId = data.currentWeather.weather[0].icon;
    if(wId==='01d'){
      pic=sun;
    }else if(wId==='01n'){
      pic=moon;
    }
    else if(wId==='02n' || wId==='02d' ||wId==='03n' || wId==='03d'||wId==='04n' || wId==='04d'){
      pic=cloud;
    }else if(wId==='09n' || wId==='09d'|| wId==='10n' || wId==='10d'){
      pic=rain;
    }else if(wId==='11n' || wId==='11d'){
      pic=thunder;
    }
    else if(wId==='13n' || wId==='13d'){
      pic=snow;
    }else{
      pic=mist;
    }
  }
  return (
    <div className='grid grid-cols-2 my-8'>
        <div className='flex justify-center items-center flex-col'>
                <div className=' ml-6 md:ml-0'>
                <h1 className='text-[#F0F0F2] text-2xl md:text-4xl lg:text-5xl font-bold'>{name}</h1>
                <p className='text-[#717883] text-sm md:text-xl mt-2 md:mt-6'>Humidity : {humidity} %</p>
                <p className='text-[#F0F0F2] mt-2  md:mt-5 text-2xl md:text-4xl lg:text-5xl font-bold text-left'>{temp}&ordm;</p>
                </div>
        </div>
        <div className='flex justify-center items-center'>
            <img src={pic} className='w-28 md:w-32 lg:w-40'/>
        </div>
    </div>
  )
}
