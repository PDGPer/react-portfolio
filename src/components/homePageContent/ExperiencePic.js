import ImageGallery from "react-image-gallery";
import slideshow1 from "../../imgs/slideshow-2.avif";
import slideshow2 from "../../imgs/slideshow-2.avif";
import slideshow3 from "../../imgs/slideshow-3.avif";
import slideshow4 from "../../imgs/slideshow-4.avif";

const images = [
  { original: slideshow1 },
  { original: slideshow2 },
  { original: slideshow3 },
  { original: slideshow4 },
];

export const ExperiencePic = () => {
  return (
    <ImageGallery items={images} showFullscreenButton={false} autoPlay={true} />
  );
};

export const experiencePicString =
  "<div class='code-container'>" +
  "<pre>" +
  "<code class='code'>" +
  "const LegacyPic = () =〉 {" +
  "<br>" +
  "&nbsp;&nbsp;" +
  "return (" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈ImageGallery" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "items={images}" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "showFullscreenButton={false}" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "autoPlay={true}" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;" +
  "/〉" +
  "<br>" +
  "&nbsp;&nbsp;" +
  ")" +
  "<br>" +
  "}" +
  "</code>" +
  "</pre>" +
  "</div>";
