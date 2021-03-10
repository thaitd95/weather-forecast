import { Card } from "react-bootstrap";

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

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          weather_state_abbr
            ? `https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`
            : "./no_internet.png"
        }
        style={{ height: "250px", width: "100%" }}
      />
      <Card.Body style={{ padding: "4px" }}>
        <Card.Title style={{ color: "#337ab7", fontWeight: 600 }}>
          {applicable_date}
        </Card.Title>
        <Card.Text style={{ textAlign: "left", padding: "0 20px" }}>
          <div>Max temperature: {max_temp}</div>
          <div>Min temperature: {min_temp}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
