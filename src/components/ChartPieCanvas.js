import React, { useContext } from "react";
import { drawCircle, drawCircleAll } from "./CanvasChartPie";
import { DataContext } from "../contexts/DataContext";

const CanvasChartPie = (props) => {
  const { simplifyingData, isLoading } = useContext(DataContext);

  return (
    <div>
      {!isLoading
        ? (drawCircle(props.totalCases, simplifyingData),
          drawCircleAll(props.totalCases, simplifyingData))
        : ""}
    </div>
  );
};

export default CanvasChartPie;
