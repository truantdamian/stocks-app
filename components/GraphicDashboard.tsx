"use client";

import { useState } from "react";
import { LineChart } from "./LineChart";
import { Button } from "./ui/Button";
import { DateField } from "./ui/DateField";
import { DropDownField } from "./ui/DropDownField";
import { RadioGroup } from "./ui/RadioGroup";
import { convertToDate } from "library/DateUtil";
import { timeSeriesEnum } from "app/constants/timeSeriesEnum";

export const GraphicDashboard = ({ symbol }) => {
  const [graphicError, setGraphicError] = useState({
    intervalError: "",
    startDateError: "",
    endDateError: "",
  });

  const [graphicParam, setGraphicParam] = useState({
    type: timeSeriesEnum.REALTIME,
    symbol,
    init: false,
    interval: "",
    startDate: "",
    endDate: "",
  });

  const handleRadioGroup = (value) => {
    setGraphicParam({
      ...graphicParam,
      type: value,
      startDate: "",
      endDate: "",
      init: false,
    });
  };

  const config = {
    nameGroup: "time_group",
    defaultChecked: timeSeriesEnum.REALTIME,
    callbackClick: (value) => handleRadioGroup(value),
    options: [
      {
        id: timeSeriesEnum.REALTIME,
        value: timeSeriesEnum.REALTIME,
        label: "Tiempo Real",
      },
      {
        id: timeSeriesEnum.HISTORY,
        value: timeSeriesEnum.HISTORY,
        label: "Historico",
      },
    ],
  };

  const handleChangeInterval = (value) => {
    setGraphicParam({ ...graphicParam, init: false, interval: value });
  };

  const handleChangeStartDate = ({ target }) => {
    setGraphicParam({ ...graphicParam, init: false, startDate: target.value });
  };
  const handleChangeEndDate = ({ target }) => {
    setGraphicParam({ ...graphicParam, init: false, endDate: target.value });
  };

  const handleClick = () => {
    if (!validate()) {
      return;
    }

    setGraphicParam({
      ...graphicParam,
      init: true,
    });
  };

  const validate = () => {
    let intervalError = "",
      startDateError = "",
      endDateError = "",
      isOk = true;

    const { type, interval, startDate, endDate } = graphicParam;

    if (interval === "") {
      intervalError = "Ingrese un intervalo";
      isOk = false;
    }

    if (type === timeSeriesEnum.HISTORY) {
      if (startDate === "") {
        startDateError = "Ingrese una fecha de inicio";
        isOk = false;
      }

      if (endDate === "") {
        endDateError = "Ingrese una fecha de fin";
        isOk = false;
      }

      if (startDate !== "" && endDate !== "") {
        const startDateTime = convertToDate(startDate, "-");
        const endDateTime = convertToDate(endDate, "-");

        if (startDateTime.getTime() > endDateTime.getTime()) {
          endDateError = "Ingrese un rango válido de fechas";
          isOk = false;
        }
      }
    }

    setGraphicError({
      ...graphicError,
      intervalError,
      startDateError,
      endDateError,
    });

    return isOk;
  };

  return (
    <>
      <div className="w-full md:w-1/2 m-auto flex flex-col gap-8">
        <RadioGroup config={config} />

        {graphicParam.type === timeSeriesEnum.HISTORY && (
          <div className="flex flex-col md:flex-row gap-5">
            <DateField
              value={graphicParam.startDate}
              onChange={handleChangeStartDate}
              error={graphicError.startDateError}
            />
            <DateField
              value={graphicParam.endDate}
              onChange={handleChangeEndDate}
              error={graphicError.endDateError}
            />
          </div>
        )}

        <div className="flex flex-row gap-5">
          <DropDownField
            options={[
              { value: "1min", text: "1 minuto" },
              { value: "5min", text: "5 minutos" },
              { value: "15min", text: "15 minutos" },
            ]}
            onChange={(value) => handleChangeInterval(value)}
            error={graphicError.intervalError}
          />
          <Button onClick={handleClick}>Iniciar</Button>
        </div>
      </div>
      <div>
        <LineChart graphicParam={graphicParam} />
      </div>
    </>
  );
};
