import { Card } from "react-bootstrap";
import moment from "moment";
import { weatherStateImg } from "../utils/getUrl";
interface IProps {
  item: any;
}

const WeatherCard = ({ item }: IProps) => {
  const {
    weather_state_name = null,
    weather_state_abbr = null,
    min_temp = 0,
    max_temp = 0,
    applicable_date = "",
  } = item;

  const round = (value: number) => Math.round(value);

  const renderDate = (date: string) => {
    const diff = moment(applicable_date).diff(moment().format('YYYY-MM-DD'), "days");
    switch (diff) {
      case 0:
        return "Today";
      case 1:
        return "Tommorrow";
      default:
        return moment(applicable_date).format("ddd DD MMM");
    }
  };
  
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          weather_state_abbr
            ? weatherStateImg(weather_state_abbr)
            : "./no_internet.png"
        }
        style={{ height: "250px", width: "100%" }}
      />
      <Card.Body style={{ padding: "4px" }}>
        <Card.Title style={{ color: "#337ab7", fontWeight: 600 }}>
          {renderDate(applicable_date)}
        </Card.Title>
        <Card.Subtitle style={{ marginBottom: "10px" }}>
          {weather_state_name}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left", padding: "0 20px" }}>
          <div>Max temperature: {round(max_temp)}</div>
          <div>Min temperature: {round(min_temp)}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
