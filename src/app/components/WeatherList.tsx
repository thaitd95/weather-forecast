import WeatherCard from "./WeatherCard";
interface IProps {
  data: any[];
}

const dumbData = [{}, {}, {}, {}, {}];

const WeatherList = (props: IProps) => {
  const { data = dumbData } = props;
  return (
    <div style={{ display: "flex" }}>
      {data.map((item, index) => (
        <WeatherCard key={index} item={item} />
      ))}
    </div>
  );
};

export default WeatherList;
