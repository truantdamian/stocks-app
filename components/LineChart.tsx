"use client";
import { useEffect, useState } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const LineChart = ({ graphicParam }) => {
  const { type, symbol, init, interval, startDate, endDate } = graphicParam;

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
        format: type === "history" ? "{value:%Y-%m-%d %H:%M}" : "{value:%H:%M}",
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
    const url = `http://localhost:3000/api/time-series?symbol=${symbol}&interval=${interval}&start_date=${startDate}&end_date=${endDate}`;

    const response = await fetch(url);

    const result = await response.json();

    const volume = result?.values?.map((x) => {
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

    setSeries({ volume: volume ?? [] });
  };

  useEffect(() => {
    if (init === false) {
      return;
    }

    getTimeSeries();
  }, [type, init]);

  useEffect(() => {
    let timer = null;

    if (init === false || type !== "real_time" || interval === "") {
      clearInterval(timer);
      return;
    }

    timer = setInterval(() => {
      getTimeSeries();
    }, intervalTime[interval].ms);

    return () => clearInterval(timer);
  }, [init, interval, type]);

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
