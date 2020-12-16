

const arraysOfCanvases = [];

const drawDynamicCircles = (d, factor, totalCases) => {
  if (!factor) return null;
  d.beginPath();
  d.arc(50, 50, 40, 0, (factor[1] / totalCases) * 2 * Math.PI, false);
  d.fillStyle = "white";
  d.lineTo(50, 50);
  d.fill();
};

export const addElement = (totalCases, nummerObject) => {
  const arrayNumbers = Object.entries(nummerObject);
  const mainContainer = document.createElement("section");
  let arrayOfColors = [];
  for (let a = 0; a < arrayNumbers.length; a++) {
    arrayOfColors.push(`rgb(${a * 10}, ${a * 10}, ${a * 10})`);
  }

  for (let i = 0; i < arrayNumbers.length; i++) {
    const newDiv = document.createElement("div");
    const canvas = document.createElement("canvas");
    canvas.id = `canvas-${i}`;
    canvas.style.borderRadius = "50%";
    const percentages = document.createTextNode(
      arrayNumbers[i][0] + ":" + arrayNumbers[i][1]
    );
    newDiv.appendChild(percentages);

    canvas.addEventListener("mouseover", () => {
      addText(canvas, "some", "white");
    });

    canvas.addEventListener("mouseout", () => {
      addText(canvas, "texto", "red");
    });
    canvas.width = 100;
    canvas.height = 100;
    canvas.style.backgroundColor = arrayOfColors[i];

    newDiv.appendChild(canvas);
    newDiv.id = `div-${i}`;
    newDiv.classList.add("divCircles");
    mainContainer.appendChild(newDiv);
    arraysOfCanvases.push(canvas);
  }

  document.body.appendChild(mainContainer);

  arraysOfCanvases.map((canvas, index) => {
    let d = canvas.getContext("2d");
    return drawDynamicCircles(d, arrayNumbers[index], totalCases);
  });
};

const addText = (canvas, texto, color) => {
  const c = canvas.getContext("2d");
  c.beginPath();
  c.fillStyle = color;
  c.fillText(texto, 50, 60);
  if (color === "red") {
    c.rect(50, 50, 45, 10);
    c.fillStyle = "red";
    c.fill();
  }
};

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
