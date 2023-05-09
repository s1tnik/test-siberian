import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MarketDepthChart = React.memo(({ data }) => {
  const [{ asks, bids }, { price }] = data;

  const options = {
    chart: {
      type: "area",
      zoomType: "xy",
    },
    title: {
      text: "BTC-USD Market Depth (Binance)",
    },
    xAxis: {
      minPadding: 0,
      maxPadding: 0,
      plotLines: [
        {
          color: "#888",
          value: price,
          width: 1,
          label: {
            text: "Actual price",
            rotation: 90,
          },
        },
      ],
      title: {
        text: "Price",
      },
    },
    yAxis: [
      {
        lineWidth: 1,
        gridLineWidth: 1,
        title: null,
        tickWidth: 1,
        tickLength: 5,
        tickPosition: "inside",
        labels: {
          align: "left",
          x: 8,
        },
      },
      {
        opposite: true,
        linkedTo: 0,
        lineWidth: 1,
        gridLineWidth: 0,
        title: null,
        tickWidth: 1,
        tickLength: 5,
        tickPosition: "inside",
        labels: {
          align: "right",
          x: -8,
        },
      },
    ],
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillOpacity: 0.2,
        lineWidth: 1,
        step: "center",
      },
    },
    tooltip: {
      headerFormat:
        '<span style="font-size=10px;">Price: {point.key}</span><br/>',
      valueDecimals: 2,
    },
    series: [
      {
        name: "Bids",
        data: bids,
        color: "#03a7a8",
      },
      {
        name: "Asks",
        data: asks,
        color: "#fc5857",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
});

export default MarketDepthChart;
