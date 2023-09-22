"use client";
import { useEffect, useState } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const LineChart = ({ symbol, interval }) => {
  const [series, setSeries] = useState({
    volume: [],
  });

  const intervalTime = {
    "1min": { ms: 60000 },
    "5min": { ms: 300000 },
    "15min": { ms: 900000 },
  };

  const options: Highcharts.Options = {
    title: {
      text: "",
    },
    yAxis: {
      title: {
        text: "Cotización",
      },
    },

    xAxis: {
      type: "datetime",
      labels: {
        format: "{value:%H:%M}",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },
    series: [
      {
        type: "line",
        name: "volume",

        data: [...series.volume],
      },
    ],
  };

  const getTimeSeries = async () => {
    const response = await fetch(
      `http://localhost:3000/api/time-series?symbol=${symbol}&interval=${interval}`
    );

    const result = await response.json();

    const volume = result.values.map((x) => {
      const date = new Date(x.datetime);

      const utcDate = Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes()
      );

      return [utcDate, parseFloat(x.volume)];
    });

    setSeries({ volume });
  };

  useEffect(() => {
    getTimeSeries();
    console.log("change interval");
    const timer = setInterval(() => {
      console.log("get data");
      getTimeSeries();
    }, intervalTime[interval].ms);

    return () => clearInterval(timer);
  }, [symbol, interval]);

  return (
    <>
      <p>Gráfico</p>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
