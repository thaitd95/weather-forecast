import WeatherCard from "./WeatherCard";
interface IProps {
  loading?: boolean;
  data: any[];
}

const dumbData = [{}, {}, {}, {}, {}, {}];

const WeatherList = (props: IProps) => {
  const { data = dumbData, loading = false } = props;
  return (
    <div style={{ display: "flex" }}>
      {data.map((item, index) => (
        <WeatherCard key={index} item={item} loading={loading} />
      ))}
    </div>
  );
};

export default WeatherList;
