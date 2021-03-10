interface GetLocationRequest {
  name: string;
}

interface GetLocationResponse {
  title?: string;
  locationType?: string;
  lattLong?: any;
  woeid?: number;
  distance?: number;
}

export type { GetLocationRequest, GetLocationResponse };
