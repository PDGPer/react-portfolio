/* eslint-disable react/jsx-no-comment-textnodes */
import cvPdf from "../../files/CV - Pedro Pereira.pdf";

// These are always just regular JSX content or a piece of media.
export const ProfileText = () => {
  return (
    <div>
      <p className="text">
        <span className="code-purple">const details</span> = {"{"}
        <br></br>
        &nbsp;&nbsp;name: 'Pedro Pereira',
        <br></br>
        &nbsp;&nbsp;role: 'Frontend Developer',
        <br></br>
        &nbsp;&nbsp;location: 'York, UK',
        <br></br>
        &nbsp;&nbsp;languages: [ EN, PT, ES ]<br></br>
        {"}"}
        <br></br>
        <a href="https://github.com/PDGPer" target="_blank" rel="noreferrer">
          // [blog]
        </a>
        <br></br>
        <a href="https://github.com/PDGPer" target="_blank" rel="noreferrer">
          // [github ↗]
        </a>
        <br></br>
        <a
          href="https://www.linkedin.com/in/pdgper/"
          target="_blank"
          rel="noreferrer"
        >
          // [linkedin ↗]
        </a>
        <br></br>
        <a href="mailto:pdgper@gmail.com">// [email ✉]</a>
        <br></br>
        <a href={cvPdf} download>
          // [CV ↓]
        </a>
      </p>
    </div>
  );
};

// A string for the typewriter effect. Pseudo-JSX, actually
// just HTML formatted to look like code.
export const profileTextString =
  "<div class='code-container'>" +
  "<pre>" +
  "<code class='code'>" +
  "const ProfileText = () =〉 {" +
  "<br>" +
  "&nbsp;&nbsp;" +
  "return (" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈div〉" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈p className='text'〉" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "{profileObject}" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈/p〉" +
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
