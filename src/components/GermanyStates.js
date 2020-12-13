import React, { useContext, useEffect, useState, useMemo } from "react";
import { DataContext } from "../contexts/DataContext";
import ChartPie from "./ChartPie";
import ChartPieCanvas from './ChartPieCanvas'

const orderingData = (data) => {
  let orderData = [];
  if (data) {
    for (let bundes in data) {
      orderData.push([bundes, data[bundes]]);
    }

    orderData.sort(function (a, b) {
      return a[1] - b[1];
    });
  }

  return orderData;
};

const GermanyStates = () => {
  const { simplifyingData, isLoading } = useContext(DataContext);
  const [totalCases, setTotalCases] = useState(0);
  const [valueOfHeight, setValueOfHeight] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    let totalCasesSum = 0;
    Object.values(simplifyingData).map((t) => {
      return (totalCasesSum += t);
    });
    setTotalCases(totalCasesSum === 0 ? 1 : totalCasesSum);
  }, [simplifyingData, totalCases]);

  const orderData = useMemo(() => orderingData(simplifyingData), [
    simplifyingData,
  ]);

  useEffect(() => {
    setValueOfHeight(
      orderData.map((t) => {
        return ((t[1] * 100) / totalCases).toFixed(2);
      })
    );
  }, [orderData, simplifyingData, totalCases]);

  const date = new Date();
  const todayis =
    date.getDate() + " / " + (date.getMonth() + 1) + " / " + date.getFullYear();

  return (
    <div>
      <div className="title">
        <h2>Data display app</h2>
        <div>
          {totalCases !== 0 ? (
            <div>
              Total cases: {totalCases} Today: {todayis}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {isLoading ? <div id="loading">Loading...</div> : ""}

      {valueOfHeight.length !== 0 ? (
        <div className="main-container">
          <div className="divChartRect">
          <ChartPieCanvas totalCases = {totalCases} nummer = {simplifyingData.Berlin}/>
            <h2>Bar Chart</h2>
            <div>
              <svg height="600" width="500" id="rectangle">
                {orderData.length === 0 && valueOfHeight.length === 0
                  ? ""
                  : orderData.map((t, idx) => {
                      return (
                        <g transform="translate(0, 250)" key={idx}>
                          <rect
                            className="oneRect"
                            id={idx}
                            height={`${(valueOfHeight[idx] * 7).toFixed(2)}`}
                            width="20"
                            transform={`translate(${30 * idx + 9}, 0)`}
                            onMouseOver={() => setShowData(!showData)}
                            onMouseLeave={() => setShowData(!showData)}
                          />
                          ,
                          {showData ? (
                            <text
                              className="text"
                              transform={`rotate(90) translate(170, ${
                                -30 * idx - 15
                              })`}
                            >
                              Cases: {t[1]}
                            </text>
                          ) : (
                            ""
                          )}
                          ,
                          <rect
                            height="2"
                            width="20"
                            transform={`translate(${30 * idx + 9}, -10)`}
                          />
                          <text
                            className="text"
                            transform={`rotate(90) translate(-240, ${
                              -30 * idx - 15
                            })`}
                          >
                            {t[0]}
                          </text>
                        </g>
                      );
                    })}
              </svg>
            </div>
          </div>
          {Object.keys(simplifyingData).length > 0 ? <ChartPie /> : ""}

        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GermanyStates;
