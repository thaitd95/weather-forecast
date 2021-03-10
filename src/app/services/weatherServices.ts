import connector from "../utils/connector";

export const getWeatherAPI = async (
  woeid: number,
  date?: string
): Promise<any> => {
  return await connector.get(`location/${woeid}`);
};
