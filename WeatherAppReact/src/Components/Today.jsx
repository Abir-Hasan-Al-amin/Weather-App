import React from "react";
import cloud from "../assets/clouds.png";
import sun from "../assets/sun.png";
import rain from "../assets/rainy.png";
import mist from "../assets/mist.png";
import snow from "../assets/snow.png";
import thunder from "../assets/thunder.png";
import moon from "../assets/moon.png";
import { useSelector } from "react-redux";
export default function Today() {
  const data = useSelector((state) => state.curData);
  const hourlyForecast=data.forecastData;
  console.log(hourlyForecast);
  let pic = rain;
  const logo = (wId) => {
    if (wId === "01d") {
      pic = sun;
    } else if (wId === "01n") {
      pic = moon;
    } else if (
      wId === "02n" ||
      wId === "02d" ||
      wId === "03n" ||
      wId === "03d" ||
      wId === "04n" ||
      wId === "04d"
    ) {
      pic = cloud;
    } else if (
      wId === "09n" ||
      wId === "09d" ||
      wId === "10n" ||
      wId === "10d"
    ) {
      pic = rain;
    } else if (wId === "11n" || wId === "11d") {
      pic = thunder;
    } else if (wId === "13n" || wId === "13d") {
      pic = snow;
    } else {
      pic = mist;
    }
    return pic;
  };
  const time = (utcDatetime) => {
    const utcDate = new Date(utcDatetime);
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return utcDate.toLocaleString("en-US", timeOptions);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[80%] bg-[#202B3B] rounded-lg flex p-4 sm:p-8 flex-col">
        <div className=" mb-4">
          <h1 className=" text-[#AAAEB7] font-medium uppercase">
            Today's Forecast
          </h1>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className=" text-[#AAAEB7] text-sm md:text-base font-medium">
              {hourlyForecast
                ? time(hourlyForecast.list[0].dt_txt)
                : "0:0 AM"}
            </p>
            <img
              src={
                hourlyForecast
                  ? logo(hourlyForecast.list[0].weather[0].icon)
                  : rain
              }
              className="w-10"
            />
            <h1 className="text-[#F0F0F2] font-medium text-xl md:text-2xl">
              {hourlyForecast
                ? Math.round(hourlyForecast.list[0].main.temp)
                : 0}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className=" text-[#AAAEB7] text-sm md:text-base font-medium">
              {hourlyForecast
                ? time(hourlyForecast.list[1].dt_txt)
                : "0:0 AM"}
            </p>
            <img
              src={
                hourlyForecast
                  ? logo(hourlyForecast.list[1].weather[0].icon)
                  : rain
              }
              className="w-10"
            />
            <h1 className="text-[#F0F0F2] font-medium text-xl md:text-2xl">
              {hourlyForecast
                ? Math.round(hourlyForecast.list[1].main.temp)
                : 0}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className=" text-[#AAAEB7] text-sm md:text-base font-medium">
              {hourlyForecast
                ? time(hourlyForecast.list[2].dt_txt)
                : "0:0 AM"}
            </p>
            <img
              src={
                hourlyForecast
                  ? logo(hourlyForecast.list[2].weather[0].icon)
                  : rain
              }
              className="w-10"
            />
            <h1 className="text-[#F0F0F2] font-medium text-xl md:text-2xl">
              {hourlyForecast
                ? Math.round(hourlyForecast.list[2].main.temp)
                : 0}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className=" text-[#AAAEB7] text-sm md:text-base font-medium">
              {hourlyForecast
                ? time(hourlyForecast.list[3].dt_txt)
                : "0:0 AM"}
            </p>
            <img
              src={
                hourlyForecast
                  ? logo(hourlyForecast.list[3].weather[0].icon)
                  : rain
              }
              className="w-10"
            />
            <h1 className="text-[#F0F0F2] font-medium text-xl md:text-2xl">
              {hourlyForecast
                ? Math.round(hourlyForecast.list[3].main.temp)
                : 0}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className=" text-[#AAAEB7] text-sm md:text-base font-medium">
              {hourlyForecast
                ? time(hourlyForecast.list[4].dt_txt)
                : "0:0 AM"}
            </p>
            <img
              src={
                hourlyForecast
                  ? logo(hourlyForecast.list[4].weather[0].icon)
                  : rain
              }
              className="w-10"
            />
            <h1 className="text-[#F0F0F2] font-medium text-xl md:text-2xl">
              {hourlyForecast
                ? Math.round(hourlyForecast.list[4].main.temp)
                : 0}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className=" text-[#AAAEB7] text-sm md:text-base font-medium">
              {hourlyForecast
                ? time(hourlyForecast.list[5].dt_txt)
                : "0:0 AM"}
            </p>
            <img
              src={
                hourlyForecast
                  ? logo(hourlyForecast.list[5].weather[0].icon)
                  : rain
              }
              className="w-10"
            />
            <h1 className="text-[#F0F0F2] font-medium text-xl md:text-2xl">
              {hourlyForecast
                ? Math.round(hourlyForecast.list[5].main.temp)
                : 0}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
