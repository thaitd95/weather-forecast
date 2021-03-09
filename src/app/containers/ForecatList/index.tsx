import { useEffect } from "react";
import WeatherCard from "../../components/WeatherCard";
import { connect } from "react-redux";
import { getLocation } from "../../actions";
interface IProps {
  dispatch: any;
}

const ForecastList = ({ dispatch }: IProps) => {
  useEffect(() => {
    const lattLong = "36.96,-122.02";
    const req = {
      lattLong,
    };
    dispatch(getLocation(req));
  }, []);

  const handleGetLocation = () => {
    const lattLong = "36.96,-122.02";
    const req = {
      lattLong,
    };
    dispatch(getLocation(req));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginBottom: "10px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Weather Forecast
      </div>
      <button onClick={handleGetLocation}>Click</button>
      <div style={{ display: "flex" }}>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
};

export default connect()(ForecastList);
