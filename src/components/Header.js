import React from "react";

const Header = () => {
  return (
    <div id = "header" style = {{marginTop: 20}}>
      <svg id = "mainTitle" height="50" width="clamp(300px, 80vw, 600px)">
          <text x="0" y="40" style={{ backgroundColor: "transparent", color: "black", fontWeight: "bolder", fontSize: "clamp(18px, 4vw, 30px)" }}>
            RKI Corona Virus in Germany
          </text>
      </svg>
    </div>
  );
};

export default Header;
