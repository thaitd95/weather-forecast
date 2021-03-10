import { GetLocationResponse } from "../models/GetLocation";
import connector from "../utils/connector";

export const getLocationAPI = async (
  name: string
): Promise<GetLocationResponse> => {
  return await connector.get("location/search", {
    params: { query: name },
  });
};
