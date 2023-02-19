import React, { useState } from "react";
// The CodeWriter component holds the typewriter effect and inputs
// for the string to display and state to toggle.
import { CodeWriter } from "./CodeWriter";
// Each component from the block folder holds the CodeWriter
// for the typewriter string and the content to replace it
// for one single block.
import { ProfilePic, profilePicString } from "./homePageContent/ProfilePic";
// I've only added comments to the profile-text block.
// All others function similarly.
import { ProfileText, profileTextString } from "./homePageContent/ProfileText";
import { TechPic, techPicString } from "./homePageContent/TechPic";
import { TechText, techString } from "./homePageContent/TechText";
import { ProjectPic, projectPicString } from "./homePageContent/ProjectPic";
import { ProjectText, projectTextString } from "./homePageContent/ProjectText";
import {
  ExperiencePic,
  experiencePicString,
} from "./homePageContent/ExperiencePic";
import {
  ExperienceText,
  experienceTextString,
} from "./homePageContent/ExperienceText";
import { Links, linksString } from "./Links";

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
  const [isTechPicDone, setTechPicStatus] = useState(false);
  function toggleTechPicStatus() {
    setTechPicStatus(true);
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
              // CodeWriter component for the typewritter effect is DRY,
              // so it only needs a different string each time.
              <CodeWriter
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
              <CodeWriter
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
              isTechPicDone ? "block dark-background" : "block dark-background"
            }
          >
            {isTechPicDone ? (
              <TechPic />
            ) : (
              <CodeWriter
                codeString={techPicString}
                stateToggleFunction={toggleTechPicStatus}
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
              <CodeWriter
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
              <CodeWriter
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
              <CodeWriter
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
              <CodeWriter
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
              <CodeWriter
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
            <CodeWriter
              codeString={linksString}
              stateToggleFunction={toggleLinksStatus}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
