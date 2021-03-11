import { Input } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getLocation } from "../../actions";
import WeatherList from "../../components/WeatherList";
import moment from "moment";
import NotFound from "../../components/NotFound";
import { isEmpty } from "lodash";

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
  const { title, time, location } = props;

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
      {location && !isEmpty(location) ? (
        <>
          <div
            style={{
              maxWidth: "1600px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div>
              Location:
              <span style={{ fontSize: "16px", fontWeight: 600 }}>{title}</span>
            </div>
            <div>
              Time:
              <span style={{ fontSize: "16px", fontWeight: 600 }}>
                {time ? moment(time).format("HH:mm a") : ""}
              </span>
            </div>
          </div>

          <WeatherList data={props?.consolidated_weather} />
        </>
      ) : (
        <NotFound/>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { getWeather, getLocation } = state;
  return { props: { ...getWeather, location: getLocation.data } };
};

export default connect(mapStateToProps)(ForecastList);
