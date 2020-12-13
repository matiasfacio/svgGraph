export const drawCircle = (totalCases, nummerObject) => {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = 180;
  const c = canvas.getContext("2d");
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
      c.fillText(arrayNumbers[n][0], 70 * n + 50, 20);
      c.fillText(percentageIndividual.toFixed(2) + "%", 70 * n + 50, 30);
      c.moveTo(70 * n + 50, 30);
      c.lineTo(70 * n + 100, 70);
      c.fillStyle = "black";
      c.stroke();
    } else {
      c.fillText(arrayNumbers[n][0], 70 * n + 70, 120);
      c.fillText(percentageIndividual.toFixed(2) + "%", 70 * n + 70, 130);
      c.moveTo(70 * n + 70, 110);
      c.lineTo(70 * n + 100, 70);
      c.stroke();
    }
    up = !up;
    c.beginPath()
    c.arc(70 * n + 100, 70, 30, 0, 2 * Math.PI, true);
    c.fillStyle = "red";
    c.fill();
    c.beginPath();
    c.lineTo(70 * n + 100, 70); // c.lineTo(180, 100)
    c.stroke();
    c.arc(70 * n + 100, 70, 30, 0, radianesIndividual, true);
    c.fillStyle = "black";
    c.strokeStyle = "black";
    c.fill();
  }
};

// export const drawCircle = (totalCases, nummer) => {

//     const canvas = document.getElementById('canvas')
//     canvas.width = 200;
//     canvas.height= 200;
//     const c = canvas.getContext('2d')
//     const percentage = 100 * nummer / totalCases; // 5,92%
//     const radianes = percentage * 6.28 / 100;  // 0.3717 radianes

//     c.beginPath()
//     c.arc(100, 100, 80, 0, 2 * Math.PI, true)
//     c.fillStyle = "black";
//     c.fill()
//     c.beginPath();
//     c.lineTo(100, 100); // c.lineTo(180, 100)
//     c.stroke()
//     c.arc(100, 100, 80, 0, radianes, true)
//     c.fillStyle = "red";
//     c.strokeStyle = "red";
//     c.fill()
// }

// export const drawCircleAll = (totalCases, dataArray) => {

//     // initizalize canvas
//     const colors = ['yellow', 'gray', 'brown', 'lightblue', 'orange', 'pink']
//     const canvas2 = document.getElementById('canvas2')
//     canvas2.width = window.innerWidth;
//     canvas2.height= window.innerHeight;
//     const c2 = canvas2.getContext('2d')

//     let radianesTotal = 0;
//     let percentage = 0;
//     let radianes = 0;

//     for (let i = 0; i< dataArray.length; i ++) {
//         percentage = 100 * dataArray[i] / totalCases;
//         radianes = percentage * 6.28 / 100;
//         c2.beginPath()
//         c2.moveTo(100,100)
//         c2.arc(100, 100, 80, radianesTotal, radianesTotal + radianes, false)
//         c2.fillStyle = colors[i];
//         c2.fill()
//         c2.beginPath();
//         c2.lineTo(100, 100); // c.lineTo(180, 100)
//         c2.stroke()
//         radianesTotal += radianes;
//     }
// }

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

  const data = Object.entries(dataObject);
  console.log(data);
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
