import { useState, useEffect } from "react";
import logos from "../../imgs/svgLibrary";
import { delayBetweenLogos } from "../../config";

const colors = ["#cf92c3", "#8ac897", "#ffe96a", "#d5eeff", "#f89e6d"];

const pickRandom = (array) => {
  const arrayPosition = Math.floor(Math.random() * array.length);
  // The
  return { value: array[arrayPosition], arrayPosition };
};

export const TechPic = () => {
  // A single logo and color are held in state, randomly picked from
  // their respective arrays.
  const [currentLogo, setCurrentLogo] = useState(pickRandom(logos));
  const [currentColor, setCurrentColor] = useState(pickRandom(colors));

  const changeLogoAndColor = () => {
    let newLogo = pickRandom(logos);
    let newColor = pickRandom(colors);

    // New logo and color are regenerated if they are the same as the last.
    // Avoids a logo or color appearing in sequence in the animation.
    while (newLogo.arrayPosition === currentLogo.arrayPosition) {
      newLogo = pickRandom(logos);
    }
    while (newColor.arrayPosition === currentColor.arrayPosition) {
      newColor = pickRandom(colors);
    }

    setCurrentLogo(newLogo);
    setCurrentColor(newColor);
  };

  // Every x interval the useEffect set a new logo and color in state,
  // again randomly picked.
  useEffect(() => {
    const timeout = setTimeout(() => {
      changeLogoAndColor();
    }, delayBetweenLogos);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLogo]);

  return (
    <div
      className="logo-container"
      style={{ backgroundColor: currentColor.value }}
    >
      {currentLogo.value()}
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
