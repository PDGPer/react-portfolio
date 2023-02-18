import React, { useState } from "react";
import { createRoot } from "react-dom/client";
// The Code component holds the typewriter effect and inputs
// for the string to display and state to toggle.
import { Code } from "./shared";
// Each component from the block folder holds the code
// for the typewriter string and the content to replace it
// for one single block.
import { ProfilePic, profilePicString } from "./blocks/profile-pic";
// I've only added comments to the profile-text block.
// All others function similarly.
import { ProfileText, profileTextString } from "./blocks/profile-text";
import { TechLogos, techLogosString } from "./blocks/tech-logos";
import { TechText, techString } from "./blocks/tech-text";
import { ProjectPic, projectPicString } from "./blocks/project-pic";
import { ProjectText, projectTextString } from "./blocks/project-text";
import { ExperiencePic, experiencePicString } from "./blocks/experience-pic";
import { ExperienceText, experienceTextString } from "./blocks/experience-text";
import { Links, linksString } from "./blocks/links";
import "./style.css";

// React boilerplate
const container = document.getElementById("root");
const root = createRoot(container);

const App = () => {
  // PROFILE BLOCKS STATE
  // State is used to keep track of when the typewriter effect ends
  // so it can be replaced with the respective content block.
  const [isProfilePicDone, setProfilePicStatus] = useState(false);
  function toggleProfilePicStatus() {
    setProfilePicStatus(true);
  }

  const [isProfileTextDone, setProfileTextStatus] = useState(false);
  function toggleProfileTextStatus() {
    setProfileTextStatus(true);
  }

  // TECH STACK BLOCKS STATE
  const [isTechLogosDone, setTechLogosStatus] = useState(false);
  function toggleTechLogosStatus() {
    setTechLogosStatus(true);
  }

  const [isTechTextDone, setTechTextStatus] = useState(false);
  function toggleTechTextStatus() {
    setTechTextStatus(true);
  }

  // PROJECT BLOCKS STATE
  const [isProjectPicDone, setProjectPicStatus] = useState(false);
  function toggleProjectPicStatus() {
    setProjectPicStatus(true);
  }

  const [isProjectTextDone, setProjectTextStatus] = useState(false);
  function toggleProjectTextStatus() {
    setProjectTextStatus(true);
  }

  // EXPERIENCE BLOCKS STATE
  const [isExperiencePicDone, setExperiencePicStatus] = useState(false);
  function toggleExperiencePicStatus() {
    setExperiencePicStatus(true);
  }

  const [isExperienceTextDone, setExperienceTextStatus] = useState(false);
  function toggleExperienceTextStatus() {
    setExperienceTextStatus(true);
  }

  // FOOTER LINKS STATE
  const [isLinksDone, setLinksStatus] = useState(false);
  function toggleLinksStatus() {
    setLinksStatus(true);
  }

  return (
    <>
      <div className="main-column-container">
        {/* PROFILE SECTION */}
        {/*The row container holds two content blocks.
        Every other row, the block order is reversed for desktop displays. */}
        <div className="row-container">
          {/* If the typewriter effect is done in state, replaces it with content. */}
          <div className={isProfilePicDone ? "block" : "block dark-background"}>
            {isProfilePicDone ? (
              <ProfilePic />
            ) : (
              // Code component for the typewritter effect is DRY,
              // so it only needs a different string each time.
              <Code
                codeString={profilePicString}
                // Along with a different call to toggle state.
                stateToggleFunction={toggleProfilePicStatus}
              />
            )}
          </div>

          <div
            className={
              isProfileTextDone
                ? "block text-block dark-background-alt"
                : "block dark-background"
            }
          >
            {isProfileTextDone ? (
              <ProfileText />
            ) : (
              <Code
                codeString={profileTextString}
                stateToggleFunction={toggleProfileTextStatus}
              />
            )}
          </div>
        </div>

        {/* KNOW TECHS SECTION */}
        <div className="row-container row-container-reverse">
          <div
            className={
              isTechLogosDone
                ? "block dark-background"
                : "block dark-background"
            }
          >
            {isTechLogosDone ? (
              <TechLogos />
            ) : (
              <Code
                codeString={techLogosString}
                stateToggleFunction={toggleTechLogosStatus}
              />
            )}
          </div>

          <div
            className={
              isTechTextDone
                ? "block text-block dark-background-alt"
                : "block dark-background"
            }
          >
            {isTechTextDone ? (
              <TechText />
            ) : (
              <Code
                codeString={techString}
                stateToggleFunction={toggleTechTextStatus}
              />
            )}
          </div>
        </div>

        {/* PERSONAL PROJECT SECTION */}
        <div className="row-container">
          <div
            className={
              isProjectPicDone
                ? "block dark-background"
                : "block dark-background"
            }
          >
            {isProjectPicDone ? (
              <ProjectPic />
            ) : (
              <Code
                codeString={projectPicString}
                stateToggleFunction={toggleProjectPicStatus}
              />
            )}
          </div>

          <div
            className={
              isProjectTextDone
                ? "block text-block dark-background-alt"
                : "block dark-background"
            }
          >
            {isProjectTextDone ? (
              <ProjectText />
            ) : (
              <Code
                codeString={projectTextString}
                stateToggleFunction={toggleProjectTextStatus}
              />
            )}
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="row-container row-container-reverse">
          <div
            className={
              isExperiencePicDone
                ? "block dark-background"
                : "block dark-background"
            }
          >
            {isExperiencePicDone ? (
              <ExperiencePic />
            ) : (
              <Code
                codeString={experiencePicString}
                stateToggleFunction={toggleExperiencePicStatus}
              />
            )}
          </div>

          <div
            className={
              isExperienceTextDone
                ? "block text-block dark-background-alt"
                : "block dark-background"
            }
          >
            {isExperienceTextDone ? (
              <ExperienceText />
            ) : (
              <Code
                codeString={experienceTextString}
                stateToggleFunction={toggleExperienceTextStatus}
              />
            )}
          </div>
        </div>

        {/* LINKS SECTION */}
        <div className="row-container">
          {isLinksDone ? (
            <Links />
          ) : (
            <Code
              codeString={linksString}
              stateToggleFunction={toggleLinksStatus}
            />
          )}
        </div>
      </div>
    </>
  );
};

root.render(<App />);
