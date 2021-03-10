import { Button, Card } from "react-bootstrap";

interface IProps {
  item: any;
}

const WeatherCard = ({ item }: IProps) => {
  console.log('---item-----',item)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.metaweather.com/static/img/weather/sn.svg"
      />
      <Card.Body>
        <Card.Title>ABC</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
