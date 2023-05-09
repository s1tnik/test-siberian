import axios from "axios";
import API_CONFIG from "./config";

const apiClient = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === "development" ? "" : API_CONFIG.BASE_URL,
});

export const getMarketPrices = () => {
  return apiClient.get("/markets/prices");
};
