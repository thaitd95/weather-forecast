import WeatherCard from "./WeatherCard";
interface IProps {
  data: any[];
}

const dumbData = [{}, {}, {}, {}, {}];

const WeatherList = (props: IProps) => {
  const { data = dumbData } = props;
  return (
    <div style={{ display: "flex" }}>
      {data
        .map((item, index) => <WeatherCard key={index} item={item} />)
        .filter((item, index) => index <= 4)}
    </div>
  );
};

export default WeatherList;
