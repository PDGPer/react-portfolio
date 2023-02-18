import { HTML5Logo, CSS3Logo, JavaScriptLogo, ReactLogo, BootstrapLogo } from '../svg-library'

export const TechLogos = () => {
  return (
    <div className='logo-container'>
      <div className='logo-row'>
        <HTML5Logo />
        <CSS3Logo />
      </div>
      <div className='logo-row'>
        <JavaScriptLogo />
        <ReactLogo />
        <BootstrapLogo />
      </div>
    </div>
  )
}

export const techLogosString = (
  "<div class='code-container'>" +
  "<pre>" +
  "<code class='code'>" +
  "const TechLogos = () =〉 {" +
  "<br>" +
  "&nbsp;&nbsp;" +
  "return (" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈div className='logo-container'〉" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈HTML5Logo /〉" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈CSS3Logo /〉" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈JavaScriptLogo /〉" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈ReactLogo /〉" +
  "<br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "〈BootstrapLogo /〉" +
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
  "</div>"
)