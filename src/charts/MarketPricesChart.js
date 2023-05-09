import Highcharts from "highcharts";
import { useQuery } from "react-query";
import HighchartsReact from "highcharts-react-official";
import { queryKeys } from "../react-query/constants";
import { fetchMarketPrices } from "../api";

const MarketPricesChart = () => {
  const { data: prices, isLoading } = useQuery([queryKeys.marketPrices], () =>
    fetchMarketPrices()
  );

  if (isLoading) {
    return null;
  }

  const options = {
    title: {
      text: "Cryptocurrency Prices",
    },
    xAxis: {
      categories: Object.keys(prices),
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default MarketPricesChart;
