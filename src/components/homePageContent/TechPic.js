import { useState, useEffect } from "react";
import logos from "../../imgs/svgLibrary";
import { delayBetweenLogos } from "../../config";

const colors = ["#cf92c3", "#8ac897", "#ffe96a", "#d5eeff", "#f89e6d"];

const pickRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const TechPic = () => {
  const [currentLogo, setCurrentLogo] = useState(pickRandom(logos));
  const [currentColor, setCurrentColor] = useState(pickRandom(colors));
  const changeLogoAndColor = () => {
    setCurrentLogo(pickRandom(logos));
    setCurrentColor(pickRandom(colors));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeLogoAndColor();
    }, delayBetweenLogos);
    return () => clearTimeout(timeout);
  }, [currentLogo]);

  return (
    <div className="logo-container" style={{ backgroundColor: currentColor }}>
      {currentLogo}
    </div>
  );
};

export const techPicString =
  "<div class='code-container'>" +
  "<pre>" +
  "<code class='code'>" +
  "const TechPic = () =〉 {" +
  "<br>" +
  "&nbsp;&nbsp;" +
  "return (" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈div className='logocontainer'〉" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "logos.map(logoComponentGen(logo))" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈/div〉" +
  "<br>" +
  "&nbsp;&nbsp;" +
  ")" +
  "<br>" +
  "}" +
  "</code>" +
  "</pre>" +
  "</div>";
