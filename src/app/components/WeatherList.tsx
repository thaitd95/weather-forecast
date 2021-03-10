import React from "react";
import WeatherCard from "./WeatherCard";

const dumbData = [{}, {}, {}, {}, {}];

const WeatherList = ({ data = dumbData }: { data: any[] }) =>
  data.map((item) => <WeatherCard item={item} />);

export default WeatherList;
