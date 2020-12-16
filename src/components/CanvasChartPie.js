export const drawCircle = (totalCases, nummerObject) => {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth-50;
  canvas.height = 180;
  const c = canvas.getContext("2d");

  let radioVariable = (canvas.width - 320 ) / 32;  // 30

  window.addEventListener('resize', ()=> {
    canvas.width = window.innerWidth-50;
    canvas.height = window.innerHeight * 0.3;
    radioVariable = (canvas.width - 320) / 32;  // 30  
;  })


  const arrayNumbers = Object.entries(nummerObject);
  let percentageIndividual = 0;
  let radianesIndividual = 0;
  let up = true;

  for (let n = 0; n < arrayNumbers.length; n++) {
    percentageIndividual = (100 * arrayNumbers[n][1]) / totalCases;
    radianesIndividual = (percentageIndividual * 6.28) / 100;

    c.beginPath();
    c.fillStyle = "black";
    if (up) {
      c.fillText(arrayNumbers[n][0], 70 * n + 20, 20); // 70 * n + 50
      c.fillText(percentageIndividual.toFixed(2) + "%", 70 * n + 20, 30);
      c.moveTo(70 * n + 20, 30);
      c.lineTo(70 * n + 50, 70); // 70*n +100
      c.fillStyle = "black";
      c.stroke();
    } else {
      c.fillText(arrayNumbers[n][0], 70 * n + 20, 120);  // 70 * n + 70
      c.fillText(percentageIndividual.toFixed(2) + "%", 70 * n + 20, 130); // 70 * n + 70
      c.moveTo(70 * n + 20, 110); // 70 * n + 70
      c.lineTo(70 * n + 50, 70); // 70*n +10
      c.stroke();
    }
    up = !up;
    c.beginPath()
    c.arc(70 * n + 50, 70, radioVariable, 0, 2 * Math.PI, true); // 70 * n * 100
    c.fillStyle = "red";
    c.fill();
    c.beginPath();
    c.lineTo(70 * n + 50, 70); // c.lineTo(180, 100) // 70 * n + 100
    c.stroke();
    c.arc(70 * n + 50, 70, radioVariable, 0, radianesIndividual, true); // 70 * n + 100
    c.fillStyle = "black";
    c.strokeStyle = "black";
    c.fill();
  }
};

export const drawCircleAll = (totalCases, dataObject) => {
  // initizalize canvas
  const colors = [
    "yellow",
    "gray",
    "brown",
    "lightblue",
    "orange",
    "pink",
    "black",
    "crimson",
    "green",
    "tomato",
    "rgb(196, 1, 255)",
    "violet",
    "blue",
    "rgb(17, 192, 250)",
    "rgb(1, 255, 234)",
    "red",
  ];
  const canvas2 = document.getElementById("canvas2");
  canvas2.width = 800;
  canvas2.height = 600;
  const c2 = canvas2.getContext("2d");

  let radianesTotal = 0;
  let percentage = 0;
  let radianes = 0;
  console.log('im here');

  const data = Object.entries(dataObject);
  for (let i = 0; i < data.length; i++) {
    percentage = (100 * data[i][1]) / totalCases;
    radianes = (percentage * 6.28) / 100;
    c2.beginPath();
    c2.moveTo(300, 300);
    c2.arc(300, 300, 180, radianesTotal, radianesTotal + radianes, false);
    c2.fillStyle = colors[i];
    c2.fill();
    c2.fillText(data[i][0] + "  " + percentage.toFixed(2) + "%", 500, 30 * i);
    c2.lineTo(300, 300);
    c2.stroke();
    radianesTotal += radianes;
  }
};
