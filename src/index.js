import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Code } from './shared'
import { ProfilePic, profilePicString } from './blocks/profile-pic'
import { ProfileText, profileTextString } from './blocks/profile-text'
import { TechLogos, techLogosString } from './blocks/tech-logos'
import { TechText, techString } from './blocks/tech-text'
import { ProjectPic, projectPicString } from './blocks/project-pic'
import { ProjectText, projectTextString } from './blocks/project-text'
import { ExperiencePic, experiencePicString } from './blocks/experience-pic'
import { ExperienceText, experienceTextString } from './blocks/experience-text'
import './style.css';

const App = () => {

  // PROFILE
  const [isProfilePicDone, setProfilePicStatus] = useState(false)
  function toggleProfilePicStatus() {
    setProfilePicStatus(true)
  }

  const [isProfileTextDone, setProfileTextStatus] = useState(false)
  function toggleProfileTextStatus() {
    setProfileTextStatus(true)
  }

  // TECH STACK
  const [isTechLogosDone, setTechLogosStatus] = useState(false)
  function toggleTechLogosStatus() {
    setTechLogosStatus(true)
  }

  const [isTechTextDone, setTechTextStatus] = useState(false)
  function toggleTechTextStatus() {
    setTechTextStatus(true)
  }

  // PROJECT
  const [isProjectPicDone, setProjectPicStatus] = useState(false)
  function toggleProjectPicStatus() {
    setProjectPicStatus(true)
  }

  const [isProjectTextDone, setProjectTextStatus] = useState(false)
  function toggleProjectTextStatus() {
    setProjectTextStatus(true)
  }

  // EXPERIENCE
  const [isExperiencePicDone, setExperiencePicStatus] = useState(false)
  function toggleExperiencePicStatus() {
    setExperiencePicStatus(true)
  }

  const [isExperienceTextDone, setExperienceTextStatus] = useState(false)
  function toggleExperienceTextStatus() {
    setExperienceTextStatus(true)
  }

  return (
    <>

      <div className='main-column-container'>

        {/* PROFILE SECTION */}
        <div className='row-container'>

          <div className={isProfilePicDone? 'block' : 'block dark-background'}>
            {isProfilePicDone ? 
              <ProfilePic/> : 
              <Code
                codeString={profilePicString}
                stateToggleFunction={toggleProfilePicStatus}
              />
            }
          </div>

          <div className={isProfileTextDone? 'block text-block dark-background-alt' : 'block dark-background'}>
            {isProfileTextDone ? 
                <ProfileText/> : 
                <Code
                  codeString={profileTextString}
                  stateToggleFunction={toggleProfileTextStatus}
                />
              }
          </div>

        </div>

        {/* KNOW TECHS SECTION */}
        <div className='row-container row-container-reverse'>

          <div className={isTechLogosDone? 'block dark-background' : 'block dark-background'}>
            {isTechLogosDone ? 
              <TechLogos/> : 
              <Code
                codeString={techLogosString}
                stateToggleFunction={toggleTechLogosStatus}
              />
            }
          </div>

          <div className={isTechTextDone? 'block text-block dark-background-alt' : 'block dark-background'}>
            {isTechTextDone ? 
                <TechText/> : 
                <Code
                  codeString={techString}
                  stateToggleFunction={toggleTechTextStatus}
                />
              }
          </div>

        </div>

        {/* PERSONAL PROJECT SECTION */}
        <div className='row-container'>

          <div className={isProjectPicDone? 'block dark-background' : 'block dark-background'}>
            {isProjectPicDone ? 
              <ProjectPic/> : 
              <Code
                codeString={projectPicString}
                stateToggleFunction={toggleProjectPicStatus}
              />
            }
          </div>

          <div className={isProjectTextDone? 'block text-block dark-background-alt' : 'block dark-background'}>
            {isProjectTextDone ? 
                <ProjectText/> : 
                <Code
                  codeString={projectTextString}
                  stateToggleFunction={toggleProjectTextStatus}
                />
              }
          </div>

        </div>

        {/* EXPERIENCE SECTION */}
        <div className='row-container row-container-reverse'>

          <div className={isExperiencePicDone? 'block dark-background' : 'block dark-background'}>
            {isExperiencePicDone ? 
              <ExperiencePic/> : 
              <Code
                codeString={experiencePicString}
                stateToggleFunction={toggleExperiencePicStatus}
              />
            }
          </div>

          <div className={isExperienceTextDone? 'block text-block dark-background-alt' : 'block dark-background'}>
            {isExperienceTextDone ? 
                <ExperienceText/> : 
                <Code
                  codeString={experienceTextString}
                  stateToggleFunction={toggleExperienceTextStatus}
                />
              }
          </div>

        </div>


      </div>

    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);