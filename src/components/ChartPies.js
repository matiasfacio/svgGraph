import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";

export const callDraw = (canvas, factor, totalCases) => {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, (factor / totalCases) * 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.lineTo(50, 50);
    ctx.fill();
  };

export const drawDynamicCircles2 = (factor, totalCases) => {

  const canvasesDom = document.querySelectorAll("#container16 canvas");
  canvasesDom.forEach(canvas => {
      canvas.width = 100;
      canvas.height = 100;
  })
  const arrayData = Object.entries(factor);

  canvasesDom.forEach((canvas, idx) => {
    callDraw(canvas, arrayData[idx][1], totalCases);
  });

};


const ChartPies = (props) => {
  const { simplifyingData, isLoading } = useContext(DataContext);
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    setArrayData(Object.entries(simplifyingData));
  }, [simplifyingData]);

  useEffect(()=> {
    drawDynamicCircles2(simplifyingData, props.totalCases)
  }, [props.totalCases, simplifyingData])


  let arrayOfColors = [];
  for (let a = 0; a < arrayData.length; a++) {
    arrayOfColors.push(`rgb(${a * 10}, ${a * 10}, ${a * 10})`);
  }

  return (
    <div>
      <h2>Canvas made Chart Pies</h2>
      {isLoading ? (
        ""
      ) : (
        <div id="container16">
          { 
            arrayData.length > 0
            ? arrayData.map((bundes, index) => {
            return (
              <div key = {index} className = "oneCanvaContainer">
                <canvas
                  style={{
                    backgroundColor: `${arrayOfColors[index]}`,
                    borderRadius: "50%",
                    margin: 20,
                  }}
                  id={`canvas-${bundes[0]}`}
                ></canvas>
                Bundesland: {bundes[0]} <br/> cases: {bundes[1]}
              </div>
            );
          }): ''}
        </div>
      )}
    </div>
  );
};

export default ChartPies;
