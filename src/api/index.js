import axios from "axios";
import API_CONFIG from "./config";

const apiClient = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === "development" ? "" : API_CONFIG.BASE_URL,
});

export const fetchMarketPrices = async (limit = 10) => {
  const response = await apiClient.get(`/markets/prices?limit=${limit}`);
  return response.data.result;
};

export const fetchOrderBook = async (limit = 1000, pair = "btcusdt") => {
  const response = await apiClient.get(
    `markets/binance/${pair}/orderbook?limit=${limit}`
  );
  return response.data.result;
};

export const fetchPrice = async (pair = "btcusdt") => {
  const response = await apiClient.get(`markets/binance/${pair}/price`);
  return response.data.result;
};
