/* eslint-disable react/jsx-no-comment-textnodes */
import cvPdf from '../files/CV - Pedro Pereira.pdf'

export const Links = () => {
  return (
    <div>
      <p className='text max-width'>
        <a href='https://github.com/PDGPer' target='_blank' rel='noreferrer'>// [github&nbsp;↗] </a>
        <a href='https://www.linkedin.com/in/pdgper/' target='_blank' rel='noreferrer'> [linkedin&nbsp;↗] </a>
        <a href='mailto:pdgper@gmail.com'> [email&nbsp;✉] </a>
        <a href={cvPdf} download> [CV&nbsp;↓]</a>
      </p>
    </div>
  )
}

export const linksString = (
  "<div class='code-container'>" +
  "<pre>" +
  "<code class='code'>" +
  "const Links = () =〉 {" +
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
  "{linkList}" +
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
  "</div>"
)