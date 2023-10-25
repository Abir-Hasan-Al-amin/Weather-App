import React from 'react'
import drop from '../assets/air/pressure.png'
import wind from '../assets/air/wind.png'
import temp from '../assets/air/temperature.png'
import cloud from '../assets/air/cloud.png'
import { useSelector } from 'react-redux'
export default function AirCondition() {
    const data=useSelector((state)=>state.curData);
    const feel = data.currentWeather ? Math. round(data.currentWeather.main.feels_like) : 0;
    const winds = data.currentWeather ? data.currentWeather.wind.speed : 0;
    const pressure = data.currentWeather ? data.currentWeather.main.pressure : 0;
    const clouds = data.currentWeather ? data.currentWeather.clouds.all : 0;
    return (
    <div className=' my-5 flex justify-center items-center'>
        <div className='w-[80%] bg-[#202B3B] rounded-lg flex p-4 sm:p-8 flex-col'>
            <div className=' mb-10'>
                <h1 className=' text-[#AAAEB7] font-medium uppercase'>Air Condition</h1>
            </div>
            <div className='grid grid-cols-2'>
            <div className='flex gap-2  sm:gap-4 mb-4 sm:mb-12 md:mx-16'>
                    <div>
                        <img src={temp} className=' w-6'/>
                    </div>
                    <div>
                        <p className=' text-[#AAAEB7] font-medium pb-3'>Real Feel</p>
                        <h1 className='text-[#AAAEB7] font-medium text-xl sm:text-4xl'>{feel}&ordm;</h1>
                    </div>
            </div>
            <div className='flex gap-2 sm:gap-4 mb-4 sm:mb-12  md:mx-16'>
                    <div>
                        <img src={wind} className=' w-7'/>
                    </div>
                    <div>
                        <p className=' text-[#AAAEB7] font-medium pb-3'>Wind</p>
                        <h1 className='text-[#AAAEB7] font-medium text-xl sm:text-4xl'>{winds} m/s</h1>
                    </div>
            </div>
            <div className='flex gap-2 sm:gap-4  sm:mb-8 md:mb-12 md:mx-12 mx-0'>
                    <div>
                        <img src={drop} className=' w-7'/>
                    </div>
                    <div>
                        <p className=' text-[#AAAEB7] font-medium pb-3'>Pressure</p>
                        <h1 className='text-[#AAAEB7] font-medium text-xl sm:text-4xl'>{pressure}hPa</h1>
                    </div>
            </div>
            <div className='flex gap-2 sm:gap-4 md:mx-16 sm:mb-8'>
                    <div>
                        <img src={cloud} className=' w-7'/>
                    </div>
                    <div>
                        <p className=' text-[#AAAEB7] font-medium pb-3'>Cloud</p>
                        <h1 className='text-[#AAAEB7] font-medium text-xl sm:text-4xl'>{clouds}%</h1>
                    </div>
            </div>
        </div>

        </div>
    </div>
  )
}
