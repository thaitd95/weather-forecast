interface ForecastItem {
  weatherStateName: string;
  weatherStateAbbr: string;
}

interface GetWeatherRequest {
  woeid: number;
  date: string;
}

interface GetWeatherResponse {}

export type { ForecastItem, GetWeatherRequest, GetWeatherResponse };
