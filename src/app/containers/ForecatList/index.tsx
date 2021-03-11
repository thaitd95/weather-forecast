import { Input } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getLocation } from "../../actions";
import WeatherList from "../../components/WeatherList";

const { Search } = Input;
interface IProps {
  props: any;
  dispatch: any;
}

const ForecastList = ({ dispatch, props }: IProps) => {
  useEffect(() => {
    const req = {
      name: "London",
    };
    dispatch(getLocation(req));
  }, []);

  const handleGetLocation = (value: string) => {
    const req = {
      name: value,
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

      <Search
        placeholder="Location"
        onSearch={handleGetLocation}
        style={{ width: 300, marginBottom: "10px" }}
      />

      <WeatherList data={props?.consolidated_weather} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { getWeather } = state;
  return { props: getWeather };
};

export default connect(mapStateToProps)(ForecastList);
