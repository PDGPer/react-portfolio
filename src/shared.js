import Typewriter from 'typewriter-effect'
import { delayBeforeSwap, delayBetweenTyping } from './config'

// Typewriter effect imported from NPM and placed inside
// another component so props can be passed to it with
// strings for the effect and state togglers to signal the
// effect has finished.
export const Code = ({codeString, stateToggleFunction}) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(
          codeString  
        )
        // Value imported from a general config file.
        .pauseFor(delayBeforeSwap)
        .start()
        .callFunction(() => {
          stateToggleFunction()
        })
      }}
      options={{
        // Value imported from a general config file.
        delay: delayBetweenTyping,
      }}
    />
  )
}