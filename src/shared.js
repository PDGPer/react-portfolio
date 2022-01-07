import Typewriter from 'typewriter-effect'
import { delayBeforeSwap, delayBetweenTyping } from './config'

export const Code = ({codeString, stateToggleFunction}) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(
          codeString  
        )
        .pauseFor(delayBeforeSwap)
        .start()
        .callFunction(() => {
          stateToggleFunction()
        })
      }}
      options={{
        delay: delayBetweenTyping,
      }}
    />
  )
}