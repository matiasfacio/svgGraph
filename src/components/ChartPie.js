import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";


const ChartPie = () => {
  const { simplifyingData } = useContext(DataContext);
  const [totalCases, setTotalCases] = useState(0);
  const [valueOfX, setValueOfX] = useState(0);
  const [casesInBund, setCasesInBund] = useState(totalCases);

  useEffect(() => {
    let totalCasesSum = 0;
    Object.values(simplifyingData).map((t) => {
      return (totalCasesSum += t);
    });
    setTotalCases(totalCasesSum === 0 ? 1 : totalCasesSum);
  }, [simplifyingData, totalCases]);

  useEffect(() => {}, [valueOfX]);

  const setValue = (cases) => {
    setValueOfX(cases);
    setCasesInBund(cases);
  };

  return (
    <div className="main">
      <h2>Chart Pie SVG</h2>

      <div className="main-container-chart">
        <div className="container-bundes-circular-chart">
          <div className="displayList">
            {Object.keys(simplifyingData).length !== 0
              ? Object.entries(simplifyingData).map((t, i) => {
                  return (
                    <div
                      key={i}
                      className="oneBundesland"
                      onMouseOver={() => setValue(t[1])}
                    >
                      {t[0]}
                    </div>
                  );
                })
              : ""}
          </div>
        </div>

        <div className="divChart">
          <h2>Cases: {`${((valueOfX * 100) / totalCases).toFixed(2)}`}%</h2>
          <h2>Number Of Cases: {casesInBund}</h2>
          <svg id="circleChart" width="200" height="200" className="chart">
            <circle
              r="50"
              cx="100"
              cy="100"
              className="pie"
              fill="fff"
              stroke="red"
              strokeWidth="10"
              strokeDasharray={`${(314 / totalCases) * valueOfX} ${
                314 - (314 / totalCases) * valueOfX
              }`}
            />
            <text className="text-pie">
              {`${((valueOfX * 100) / totalCases).toFixed(2)}`}%
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChartPie;
