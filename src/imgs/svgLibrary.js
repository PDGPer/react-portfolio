// Components holding the svg code for different logos and an illustration.

const HTML5Logo = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="25.6 141 362.8 512"
      className="logo"
    >
      <title>HTML5 Logo</title>
      <g>
        <path
          d="M59.4,141h23v22.8h21.2V141h23v69h-23v-23h-21v23H59.4 M157,164h-20.3v-23h63.7v23H180v46h-23 M210.5,141h24.1l14.8,24.3
	l14.8-24.3h24.1v69h-23v-34.2l-16.1,24.8l-16.1-24.8V210h-22.6 M299.7,141h23v46.2h32.6V210h-55.6"
        />
        <path
          fill="#e44d26"
          d="M58.6,612l-33-370.4h362.8l-33,370.2L206.7,653"
        />
        <path fill="#f16529" d="M207,621.5V272h148.3L327,588" />
        <path
          fill="#ebebeb"
          d="M93,317.3h114v45.4h-64.2l4.2,46.5h60v45.3H105.4 M107.4,477.3H153l3.2,36.3l50.8,13.6v47.4l-93.2-26"
        />
        <path
          fill="#fff"
          d="M320.6,317.3H206.8v45.4h109.6 M312.3,409.2H206.8v45.4h56l-5.3,59l-50.7,13.6v47.2l93-25.8"
        />
      </g>
    </svg>
  );
};

const CSS3Logo = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-49.4 141 362.7 512"
      className="logo"
    >
      <title>CSS3 Logo</title>
      <g>
        <polygon
          points="313.4,241.6 280.3,611.8 131.8,653 -16.4,611.9 -49.4,241.6"
          fill="#264de4"
        />
        <polygon
          points="252,588.2 280.3,271.9 132,271.9 132,621.5"
          fill="#2965f1"
        />
        <polygon
          points="26.3,409.2 30.4,454.6 132,454.6 132,409.2"
          fill="#ebebeb"
        />
        <polygon
          points="132,317.3 131.8,317.3 18.1,317.3 22.3,362.7 132,362.7"
          fill="#ebebeb"
        />
        <polygon
          points="132,574.4 132,527.2 131.8,527.2 81.2,513.6 78,477.3 53.4,477.3 32.4,477.3 38.8,548.6 131.8,574.5"
          fill="#ebebeb"
        />
        <path d="M36,141h55v23H59v23h32v23H36V141z" />
        <path d="M102,141h55v20h-32v4h32v46h-55v-21h32v-4h-32V141z" />
        <path d="M168,141h55v20h-32v4h32v46h-55v-21h32v-4h-32V141z" />
        <polygon
          points="187.8,454.6 182.5,513.5 131.8,527.2 131.8,574.4 224.9,548.6 225.6,541 236.3,421.4 237.4,409.2 
		      245.6,317.3 131.8,317.3 131.8,362.7 195.8,362.7 191.7,409.2 131.8,409.2 131.8,454.6"
          fill="#ffffff"
        />
      </g>
    </svg>
  );
};

const JavaScriptLogo = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 630 630" className="logo">
      <title>JavaScript Logo</title>
      <rect width="630" height="630" fill="#f7df1e" />
      <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
    </svg>
  );
};

const ReactLogo = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="290.7 177.7 490.6 436.9"
      className="logo"
    >
      <title>React Logo</title>
      <g>
        <path
          d="M781.3,396.2c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3
          c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9
          c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9v-22.3l0,0c-27.5,0-63.5,19.6-99.9,53.6c-36.4-33.8-72.4-53.2-99.9-53.2
          v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11c-2.3-10-4-19.7-5.2-29
          c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6v-22.3l0,0c-8.4,0-16,1.8-22.6,5.6c-28.1,16.2-34.4,66.7-19.9,130.1
          c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4c6.5,3.8,14.1,5.6,22.5,5.6
          c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6c28.1-16.2,34.4-66.7,19.9-130.1
          C740.8,459.4,781.3,428.6,781.3,396.2z M651.1,329.5c-3.7,12.9-8.3,26.2-13.5,39.5c-4.1-8-8.4-16-13.1-24
          c-4.6-8-9.5-15.8-14.4-23.4C624.3,323.7,638,326.3,651.1,329.5z M605.3,436c-7.8,13.5-15.8,26.3-24.1,38.2c-14.9,1.3-30,2-45.2,2
          c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8c6.2-13.4,13.2-26.8,20.7-39.9
          c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9c8.3,11.9,16.4,24.6,24.2,38
          c7.6,13.1,14.5,26.4,20.8,39.8C619.7,409.5,612.8,422.9,605.3,436z M637.6,423c5.4,13.4,10,26.8,13.8,39.8
          c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C629.2,439.1,633.5,431,637.6,423z M536.2,529.7c-9.3-9.6-18.6-20.3-27.8-32
          c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C554.7,509.4,545.4,520.1,536.2,529.7z M461.8,470.8c-14.2-2.1-27.9-4.7-41-7.9
          c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24S456.9,463.2,461.8,470.8z M535.7,262.7c9.3,9.6,18.6,20.3,27.8,32
          c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C517.2,283,526.5,272.3,535.7,262.7z M461.7,321.6c-4.9,7.7-9.8,15.6-14.4,23.7
          c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C433.6,326.4,447.4,323.7,461.7,321.6z M371.2,446.8
          c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9
          c-9.2,20.8-16.6,41.1-22.2,60.6C389.3,453.9,379.9,450.5,371.2,446.8z M425,589.7c-13.6-7.8-19.5-37.5-14.9-75.7
          c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9
          C431.8,592.3,428,591.4,425,589.7z M662.2,513.5c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6
          c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C659.3,494.5,661.1,504.2,662.2,513.5z M700.7,446.8c-8.6,3.7-18,7-27.7,10.1
          c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6
          C759,411.9,736.1,431.8,700.7,446.8z"
          fill="#61DAFB"
        />
        <polygon
          points="M435.8,178.1L435.8,178.1L435.8,178.1z"
          fill="#61DAFB"
        />
        <circle cx="535.9" cy="396.2" r="45.7" fill="#61DAFB" />
        <polygon
          points="M635.5,177.8L635.5,177.8L635.5,177.8z"
          fill="#61DAFB"
        />
      </g>
    </svg>
  );
};

const BootstrapLogo = () => {
  return (
    <svg width="100%" height="100%" viewBox="-49 193 512 408" className="logo">
      <title>Bootstrap Logo</title>
      <path
        d="M7.5,246.3c-1-27.7,20.6-53.3,49.9-53.3h299.4c29.2,0,50.8,25.6,49.9,53.3c-0.9,26.6,0.3,61.2,9,89.3
        c8.7,28.2,23.4,46.1,47.5,48.4v26c-24.1,2.3-38.8,20.1-47.5,48.4c-8.7,28.1-9.9,62.7-9,89.3c1,27.7-20.6,53.3-49.9,53.3H57.3
        c-29.2,0-50.8-25.6-49.9-53.3c0.9-26.6-0.3-61.2-9-89.3c-8.7-28.2-23.4-46.1-47.5-48.4v-26c24.1-2.3,38.8-20.1,47.5-48.4
        C7.2,307.5,8.4,273,7.5,246.3z"
        fill="#9700F9"
      />
      <path
        d="M218.1,505.5c47.3,0,75.8-23.2,75.8-61.4c0-28.9-20.3-49.8-50.5-53.1v-1.2c22.2-3.6,39.6-24.2,39.6-47.2
        c0-32.8-25.9-54.1-65.3-54.1h-88.7v217H218.1z M163.4,316h45.9c25,0,39.1,11.1,39.1,31.3c0,21.5-16.5,33.5-46.4,33.5h-38.7
        C163.4,380.8,163.4,316,163.4,316z M163.4,477.9v-71.4H209c32.7,0,49.6,12,49.6,35.5c0,23.5-16.5,35.9-47.6,35.9H163.4z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

const TypeScriptLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      className="logo"
    >
      <title>TypeScript Logo</title>
      <path d="M0 200V0h400v400H0" fill="#007acc" />
      <path
        d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
        fill="#fff"
      />
    </svg>
  );
};

const ReduxLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 -6 256 256"
      className="logo"
    >
      <title>Redux Logo</title>
      <path
        fill="#764ABC"
        d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
      />
    </svg>
  );
};

const ReduxSagaLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 66 40"
      className="logo"
    >
      <title>Redux-Saga Logo</title>
      <path
        fill="#89D96D"
        d="M35.259 14.782a2.591 2.591 0 0 1 3.891-2.243c2.348-.862 4.963-1.313 7.682-1.313 7.281 0 13.526 3.252 15.637 7.932-.018 1.108-1.592 1.624-2.22.944-1.731-3.759-7.199-6.465-13.417-6.465-2.26 0-4.429.345-6.393 1.004a2.592 2.592 0 1 1-5.18.141zm29.113 9.644a2.592 2.592 0 1 0-4.626 1.605c-.828 1.273-2.115 2.426-3.764 3.352-2.547 1.428-5.796 2.215-9.151 2.215-2.905 0-5.694-.575-8.068-1.665-1.604-.737-2.938-1.667-3.935-2.738-.661-.385-2.189.843-1.635 1.779 2.994 3.114 8.072 5.036 13.638 5.036 3.761 0 7.43-.896 10.331-2.524 2.126-1.193 3.776-2.738 4.814-4.476a2.594 2.594 0 0 0 2.396-2.584z"
      />
      <path
        fill="#999"
        d="M14.435 29.29c-2.364-3.065-3.703-7.39-3.703-12.06 0-4.25 1.121-8.261 3.156-11.295C16.021 2.752 18.907 1 22.013 1c2.831 0 5.53 1.492 7.601 4.2 1.955 2.558 3.227 6.047 3.58 9.826a24.983 24.983 0 0 0-2.591-1.243C29.6 7.776 26.064 3.411 22.013 3.411c-2.277 0-4.452 1.373-6.124 3.867-1.771 2.641-2.747 6.176-2.747 9.953 0 4.152 1.227 8.094 3.31 10.724a2.592 2.592 0 1 1-2.017 1.335zm18.443-12.781c-4.232-2.444-8.954-3.414-12.862-2.732a2.592 2.592 0 1 0 .733 2.317c3.289-.486 7.282.4 10.923 2.503 4.447 2.567 7.592 6.552 8.207 10.247.767.32 1.604.594 2.51.807-.236-4.8-3.919-9.915-9.511-13.142zm.639 19.98c-2.334.297-4.982-.074-7.586-1.048-.748.578-1.54 1.12-2.372 1.621 2.766 1.27 5.664 1.937 8.352 1.937.651 0 1.291-.039 1.912-.118 3.219-.409 5.77-1.861 7.237-4.105a22.276 22.276 0 0 1-2.45-.745c-1.129 1.317-2.898 2.179-5.093 2.458zm-2.581-9.472a2.592 2.592 0 1 0-2.151-1.105c-.493 1.186-1.216 2.373-2.138 3.504-1.426 1.748-3.301 3.32-5.422 4.545-2.961 1.711-6.15 2.629-9.083 2.628-.306 0-.61-.01-.91-.03-2.996-.201-5.272-1.398-6.411-3.369-2.018-3.496-.006-8.754 4.686-12.621a24.79 24.79 0 0 1-.21-2.594l-.133-.185c-3.056 2.197-5.406 5.033-6.619 7.983-1.285 3.126-1.218 6.188.188 8.622 1.553 2.689 4.514 4.313 8.337 4.57.351.023.706.035 1.064.035 3.355 0 6.97-1.03 10.296-2.951 3.965-2.288 7.009-5.556 8.506-9.032z"
      />
    </svg>
  );
};

const AzureDevOpsLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      className="logo"
    >
      <title>Azure DevOps Logo</title>
      <path
        fill="#0089d6"
        d="M15 3.622v8.512L11.5 15l-5.425-1.975v1.958L3.004 10.97l8.951.7V4.005L15 3.622zm-2.984.428L6.994 1v2.001L2.382 4.356 1 6.13v4.029l1.978.873V5.869l9.038-1.818z"
      />
    </svg>
  );
};

const GitLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      className="logo"
    >
      <title>Git Logo</title>
      <path
        fill="#F05133"
        d="M92.71 44.408 52.591 4.291a5.918 5.918 0 0 0-8.369 0l-8.33 8.332L46.459 23.19a7.022 7.022 0 0 1 7.229 1.685 7.03 7.03 0 0 1 1.67 7.275l10.186 10.185a7.028 7.028 0 0 1 7.275 1.671 7.043 7.043 0 0 1-9.961 9.958 7.043 7.043 0 0 1-1.531-7.658l-9.5-9.499v24.997a7.042 7.042 0 1 1-8.096 11.291 7.042 7.042 0 0 1 2.307-11.496v-25.23a7.041 7.041 0 0 1-3.823-9.235L31.798 16.715 4.288 44.222a5.92 5.92 0 0 0 0 8.371l40.121 40.118a5.918 5.918 0 0 0 8.369 0L92.71 52.779a5.92 5.92 0 0 0 0-8.371z"
      />
    </svg>
  );
};

const NpmLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 18 7"
      className="logo"
    >
      <title>NPM Logo</title>
      <path
        fill="#CB3837"
        d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"
      />
      <polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 " />
      <path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z" />
      <polygon
        fill="#FFFFFF"
        points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "
      />
    </svg>
  );
};

const YarnLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      className="logo"
      viewBox="0 0 256 256"
    >
      <title>Yarn Logo</title>
      <path
        fill="#368FB9"
        d="M128 0C57.328 0 0 57.328 0 128s57.328 128 128 128 128-57.328 128-128S198.672 0 128 0"
      />
      <path
        fill="#FFF"
        d="M203.317 174.06c-7.907 1.878-11.91 3.608-21.695 9.983-15.271 9.884-31.976 14.48-31.976 14.48s-1.383 2.076-5.387 3.015c-6.918 1.68-32.963 3.114-35.335 3.163-6.376.05-10.28-1.63-11.367-4.25-3.311-7.907 4.744-11.367 4.744-11.367s-1.779-1.087-2.817-2.076c-.939-.939-1.927-2.816-2.224-2.125-1.235 3.015-1.878 10.379-5.189 13.69-4.547 4.596-13.146 3.064-18.236.395-5.585-2.965.395-9.933.395-9.933s-3.015 1.779-5.436-1.878c-2.175-3.36-4.2-9.094-3.657-16.16.593-8.056 9.587-15.865 9.587-15.865s-1.581-11.91 3.608-24.117c4.695-11.12 17.347-20.065 17.347-20.065s-10.626-11.762-6.672-22.338c2.57-6.92 3.608-6.87 4.448-7.166 2.965-1.137 5.831-2.373 7.957-4.695 10.625-11.466 24.166-9.292 24.166-9.292s6.425-19.52 12.356-15.715c1.828 1.186 8.401 15.814 8.401 15.814s7.018-4.102 7.809-2.57c4.25 8.254 4.744 24.019 2.866 33.607-3.163 15.814-11.07 24.315-14.233 29.652-.741 1.236 8.5 5.14 14.332 21.3 5.387 14.777.593 27.182 1.433 28.566.148.247.198.346.198.346s6.177.494 18.582-7.166c6.622-4.102 14.48-8.698 23.425-8.797 8.65-.149 9.094 9.983 2.57 11.564Zm11.763-7.265c-.89-7.017-6.82-11.86-14.431-11.762-11.367.148-20.905 6.03-27.231 9.934-2.471 1.532-4.596 2.669-6.425 3.509.395-5.733.05-13.245-2.916-21.498-3.608-9.885-8.45-15.963-11.91-19.472 4.003-5.832 9.489-14.332 12.058-27.478 2.224-11.219 1.533-28.664-3.558-38.45-1.038-1.976-2.767-3.41-4.942-4.003-.89-.247-2.57-.741-5.881.198-4.991-10.329-6.721-11.416-8.056-12.306-2.767-1.779-6.029-2.174-9.093-1.038-4.102 1.483-7.61 5.437-10.922 12.454a51.47 51.47 0 0 0-1.334 3.015c-6.277.445-16.161 2.718-24.513 11.762-1.038 1.137-3.064 1.977-5.19 2.768h.05c-4.349 1.532-6.326 5.09-8.747 11.515-3.361 8.994.098 17.84 3.508 23.574-4.645 4.151-10.823 10.773-14.084 18.532-4.053 9.588-4.498 18.978-4.35 24.068-3.459 3.658-8.796 10.527-9.39 18.237-.79 10.773 3.114 18.088 4.844 20.756.494.791 1.038 1.434 1.63 2.076-.197 1.334-.246 2.768.05 4.25.643 3.46 2.817 6.277 6.128 8.056 6.524 3.46 15.617 4.942 22.635 1.433 2.52 2.669 7.117 5.239 15.469 5.239h.494c2.125 0 29.109-1.433 36.967-3.36 3.509-.841 5.93-2.324 7.512-3.658 5.04-1.582 18.977-6.326 32.123-14.826 9.291-6.03 12.504-7.315 19.423-8.995 6.72-1.63 10.922-7.759 10.082-14.53Z"
      />
    </svg>
  );
};

const MaterialUILogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 256 204"
      className="logo"
    >
      <title>Material UI Logo</title>
      <path
        fill="#00B0FF"
        d="M0 110.848V0l96 55.424v36.949L32 55.424v73.899z"
      />
      <path
        fill="#0081CB"
        d="M96 55.424 192 0v110.848l-64 36.949-32-18.474 64-36.95V55.424L96 92.373z"
      />
      <path fill="#00B0FF" d="M96 129.323v36.949l64 36.949v-36.949z" />
      <path
        fill="#0081CB"
        d="m160 203.221 96-55.424V73.9l-32 18.474v36.95l-64 36.949v36.95Zm64-147.797v-36.95L256 0v36.95l-32 18.474Z"
      />
    </svg>
  );
};

const WordPressLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.52 122.523"
      width="100%"
      height="100%"
      className="logo"
    >
      <title>WordPress Logo</title>
      <g fill="#464342">
        <path d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L13.258 39.872a52.354 52.354 0 0 0-4.55 21.388zM96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501L48.2 93.547l11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" />
        <path d="m62.184 65.857-15.768 45.819a52.552 52.552 0 0 0 14.846 2.141c6.12 0 11.989-1.058 17.452-2.979a4.615 4.615 0 0 1-.374-.724zM107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z" />
        <path d="M61.262 0C27.483 0 0 27.481 0 61.26c0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263C122.526 27.481 95.04 0 61.262 0zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z" />
      </g>
    </svg>
  );
};

export const Portrait = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div className="foreground-animation" />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 3000 3000"
        className="background-animation"
      >
        <title>Portrait</title>
        <polygon
          fill="#75AAD4"
          points="2505.9,2118.1 2590.6,2125 2637.7,2414.7 2664.5,2527.7 2727.4,2715.3 2894.6,3000.5 
        2602.5,3637.8 1638,3238.3 1449.8,3147 1472.2,2814.4 2355.4,2435.8"
        />
        <polyline
          fill="#509BCC"
          points="1449.8,3147 1478.4,2695.3 2252.6,2560.5 2072.6,2827.3 1842.6,3145.1 1762,3287.2 
        1449.8,3147"
        />
        <polygon
          fill="#B7CFE7"
          points="2648.9,1973.9 2649.3,2390.3 2664.5,2527.7 2601.4,2344.9 2551.9,2068.8 
        2574.2,1894.9"
        />
        <polygon
          fill="#95BBDD"
          points="2604.8,1513.7 2709.4,1324.7 2739.9,1345.3 2788.5,1365.1 2833.3,1422.2 
        2875.6,1509.1 2892.8,1566.3 2844.7,1807.5 2804.6,1933.7 2773.3,1990.6 2706.8,2026.6 2653.2,1995.1 2612,1913.5 2565.9,1672.8"
        />
        <polygon
          fill="#B7CFE7"
          points="2625.3,1535 2643.5,1597.6 2666.5,1624.7 2659.1,1686.5 2618.3,1846.4 2612,1913.5 
        2569.8,1977.3 2598.2,1585.6"
        />
        <polygon
          fill="#B7CFE7"
          points="2800.1,1384.4 2824.5,1404 2850.7,1439 2879.9,1494.6 2892.8,1566.3 2861.5,1483.9 
        2839.3,1439.2"
        />
        <polygon
          fill="#B7CFE7"
          points="2864.8,1631 2862.8,1675.6 2852.5,1716.7 2839.1,1761.5 2812.2,1787.8 2766.5,1840.4 
        2751.1,1886 2757.1,1831.7 2761.7,1804.4 2803.3,1750.1 2833.8,1726.9 2852.5,1681.1"
        />
        <polyline
          fill="#648CAC"
          points="2665,1596.6 2656.5,1617.4 2699.4,1711 2674,1757.4 2670.9,1796.6 2723.8,1766.3"
        />
        <polyline
          fill="#509BCC"
          points="2723.8,1766.3 2808.5,1677.7 2797.7,1581 2742.6,1565.1 2665,1596.6"
        />
        <polygon
          fill="#509BCC"
          points="2711.2,1523.1 2757.4,1441.5 2815.2,1502.3 2763.5,1529.8"
        />
        <polygon
          fill="#648CAC"
          points="2757.4,1441.5 2793,1405.8 2837.1,1472.4 2875.4,1577.1 2864.8,1631 2840.2,1556.2"
        />
        <polygon
          fill="#648CAC"
          points="2691.8,1550.8 2665,1596.6 2738.6,1626.6 2759.3,1695 2723.8,1766.3 2784.8,1728 
        2800.6,1689.1 2778.9,1607.3 2742.6,1565.1"
        />
        <polygon
          fill="#648CAC"
          points="2618.3,1846.4 2596.2,1936.2 2625.8,1979 2662.6,2011.9 2706.8,2026.6 2627.5,1923.1"
        />
        <polygon
          fill="#95BBDD"
          points="1253.4,2584.3 1083.5,2281.8 1210.7,2116.7 1606.5,2075.5 1885.3,2087 2068.9,2244.5 
        1925,2490.3 1679.8,2591.3"
        />
        <polygon
          fill="#75AAD4"
          points="1205.4,2257 1143.8,2217.3 1119.6,2252.8 1207.4,2283.8"
        />
        <polyline
          fill="#75AAD4"
          points="1717.9,2211.6 1855,2165.4 1840.7,2224.4 1931.1,2149.5 1884.2,2117.4 1713.8,2193.7"
        />
        <polygon
          fill="#648CAC"
          points="1177.7,2237.6 1258,2215.3 1345.8,2210.6 1479.4,2180.8 1733.2,2166 1893,2099.9 
        1893.3,2130.8 1757.3,2190.4 1666.4,2242.4 1508.1,2309.1 1284.2,2345.8 1218.9,2319.2 1191.8,2282.3 1195.4,2249.7"
        />
        <polygon
          fill="#75AAD4"
          points="1240.1,2271.2 1376.9,2265.4 1559.2,2247.3 1510.8,2274.6 1401.4,2312.6 
        1274.9,2312.9"
        />
        <polygon
          fill="#75AAD4"
          points="1476.1,1975.3 1584.8,1708.6 1992.6,1995.7 1997.3,2127.2"
        />
        <polygon
          fill="#95BBDD"
          points="1032.7,2135.8 1092,1926.8 1264,1981.7 1235.1,2084.4 1056.1,2195"
        />
        <polyline
          fill="#648CAC"
          points="1107.9,1946.2 1149.2,1982.5 1212.3,1997.4 1222,2042.4 1442.7,2030.8 1434.7,1949.8 
        1123.6,1870.5"
        />
        <polygon
          fill="#509BCC"
          points="1092,1926.8 1085.6,1947.9 1200.2,1968.7 1257.2,1998.4 1317.1,1983.9 1497.3,1971 
        1578.1,1889.4 1456,1759.8 1099,1819.5"
        />
        <polygon
          fill="#95BBDD"
          points="1187.6,1909.6 1317.1,1983.9 1374.6,1938.2 1307.2,1960.5 1328.3,1919.4 1458.5,1886 
        1503,1893.4 1537.3,1931.1 1597.5,1862.8 1562.9,1704 1684,1645.4 1580,1587.9 1430.3,1647.8 1201.7,1800.8"
        />
        <polygon
          fill="#75AAD4"
          points="944,2078.1 951.2,2113.4 1036.2,2228 1119.4,1886.1 989.4,1945.4"
        />
        <polygon
          fill="#509BCC"
          points="906.6,1427.9 1162.5,1372.3 1261.9,1451.7 1202.2,1656.4 931.2,1759.7 886.6,1588.2"
        />
        <polyline
          fill="#617588"
          points="896.5,1611.7 924.1,1538.7 1025.1,1476.2 1187.2,1518.5 1138.7,1552.7 1052.6,1588.9 
        986.8,1607.4 896.5,1611.7"
        />
        <polygon
          fill="#B7CFE7"
          points="929.1,1743.7 974.7,1695.4 1015.5,1701.2 1207.1,1591.4 1167,1758.6 1110.7,1912.8 
        997.4,2037.2 949.1,2097.4 897.1,1981.2"
        />
        <polygon
          fill="#B7CFE7"
          points="883.5,1431.4 1025.1,1476.2 924.1,1538.7 896.5,1611.7 861.8,1521.9"
        />
        <polygon
          fill="#648CAC"
          points="1985.3,2087.8 1956.6,1994 1602.4,1750.3 1622,1866.3 1537.3,1931.1 1582.9,1835.2 
        1528.1,1694.1 1632.4,1650.2 2086.4,1967 2030.7,2140.8"
        />
        <polygon
          fill="#95BBDD"
          points="1175.6,1403.6 1214.6,1467 1177.2,1680.7 1097.5,1892.3 1107.9,1946.2 1159.2,1878.5 
        1296.9,1440.1 1222.8,1351.6"
        />
        <polygon
          fill="#75AAD4"
          points="1197.4,1371.5 1249.9,1459.8 1197.1,1706.1 1129.2,1920.3 1196.7,1934.9 
        1341.8,1838.5 1544.6,1839.1 1461.5,1656.2 1633.9,1635.7 1415.1,1356.5 1252.8,1309.8"
        />
        <polygon
          fill="#509BCC"
          points="1250.8,1330.6 1349.5,1390.3 1456.2,1494.2 1537.1,1624.4 1720.8,1761.8 
        2023.1,1984.4 2004.9,2156.3 2230.9,2248.3 2350.3,1875.9 2323.2,1242.8 1953.8,1046.9 1440.3,1204.8"
        />
        <polygon
          fill="#95BBDD"
          points="2149.6,1213.1 2248.5,1309.6 2155.7,1420.7 2026.7,1551.8 1752.5,1615 1698,1664 
        2002.1,1850.6 2298.1,1908.6 2443.2,1637.3 2363.2,1319.6 2217.3,1137"
        />
        <polygon
          fill="#617588"
          points="1622.8,1398 1652.8,1356.2 1706.7,1298.2 1855.7,1287.7 2018.8,1332.6 1918.4,1356.4 
        1791.1,1393.1 1688.5,1411.8"
        />
        <polygon
          fill="#75AAD4"
          points="984.9,1315.1 957.5,1191.6 1155.9,1123.5 1570.1,875.5 2123.5,932.5 2162.4,1123.3 
        1920.7,1106.9 1768.4,1178.7 1688.9,1288.8 1632.3,1311.1 1552.2,1412.4 1424,1366.6 1275.9,1353.8 1191.9,1416.7 1069.8,1403.7"
        />
        <polygon
          fill="#95BBDD"
          points="991.3,1188.1 1171.7,1212 1337.9,1063.7 1608.1,925.5 2083.2,967.9 2202.2,765.9 
        2274.4,583.6 2167.4,406.2 1658.5,308.9 1249.2,364.6 1039.6,555.6 1049.8,710.9"
        />
        <polygon
          fill="#D9E4F1"
          points="956.5,722.5 911.9,842.6 874.7,1024 981.7,1074.1 1057.5,776.7 997.8,653"
        />
        <polygon
          fill="#B7CFE7"
          points="976.1,674.4 986.9,791.1 955.4,894.9 874.7,1024 875.3,1218.6 874.1,1401.7 
        960.3,1285.6 1069,1124.8 1143.6,1010.5 1149.3,827 1020.9,522"
        />
        <polygon
          fill="#B7CFE7"
          points="2344.3,676.9 2230.3,559.2 2081.1,941.2 2083.1,1095.3 2194.8,1218.6 2295.8,1283.5 
        2361.4,1483 2334.3,1655.5 2257.5,1928.7 2478.7,1947.6 2625.5,1417.8 2573.7,1094.4"
        />
        <polygon
          fill="#D9E4F1"
          points="1646.6,1392.6 1733,1313.3 1746.3,1370.6"
        />
        <polygon
          fill="#D9E4F1"
          points="1871.9,1311.6 1927.2,1319 1871.3,1339.4"
        />
        <polygon
          fill="#D9E4F1"
          points="1137.8,1517.8 1138.7,1552.7 1184.8,1534.8"
        />
        <polygon
          fill="#D9E4F1"
          points="1015.2,1521.8 1028.5,1579.1 957.9,1593.5"
        />
        <polygon
          fill="#505760"
          points="1733,1313.3 1871.9,1311.6 1871.3,1339.4 1746.3,1370.6"
        />
        <polygon
          fill="#505760"
          points="1015.2,1521.8 1072.1,1504 1137.8,1517.8 1138.7,1552.7 1028.5,1579.1"
        />
        <polygon
          fill="#617588"
          points="941.3,2089.9 1136,2534.3 1279.1,2808.6 1450.2,2876.1 1756.5,2893 1956.4,2821.1 
        2456.8,2515.4 2533.3,2354.3 2598.3,1892.7 2622.7,1567.9 2566.8,1530 2446.6,1798.5 2141.8,1952.9 1927.5,2420.6 1680.8,2538.2 
        1254.4,2545.8 1115.2,2299.1 1055.2,2226.9"
        />
        <polygon
          fill="#617588"
          points="1084.5,2109.4 1250.8,2008.8 1328.3,2025.2 1459.5,1957.7 1875.6,1991.3 
        2076.7,2144.5 2011,2258.1 1874.4,2126.8 1517.3,2149.8 1384.8,2141.1 1208.8,2186 1164.4,2226.2 1144,2276.2 1091.8,2308.9 
        1023,2207.5"
        />
        <polygon
          fill="#617588"
          points="1192.8,2315.5 1282.3,2371.4 1494.4,2365 1705,2304 1516.8,2458.4 1298.5,2453.6 
        1196.6,2353.8"
        />
        <polygon
          fill="#505760"
          points="1665.1,382.9 2136.1,488.4 2296.8,677 2249.8,940.8 2469.1,1192.1 2548,1518 
        2622.7,1567.9 2663.3,1431.1 2779,1337.9 2629.1,857.8 2424.8,521.8 2256.3,325.8 1949.4,172.6 1619.8,154.9 1456.4,94.8 
        1372.7,162.2 1280.4,139.7 1233.3,75.1 1211.8,122.5 1131.8,27.3 1118.1,198.8 926.6,345.4 808.7,364.3 762.9,503.3 831.8,652.3 
        950.7,752.6 1122.9,554.7 1199.4,605.3 1187.5,555.1 1220.5,529.7 1304.4,570.3 1343.7,696.5 1368.4,580.2 1314.5,474 1480.4,408.8"
        />
        <polygon
          fill="#617588"
          points="1446.8,1289.5 1326.2,1203.7 1350.6,1112.1 1395.5,1123.9 1426.5,1084.7 
        1699.6,1018.9 1907.3,1002.1 2092.9,1071.2 2224.8,1235.1 2089.8,1216.8 1865,1164.1 1684.3,1194.1 1509.5,1241.6"
        />
        <polygon
          fill="#617588"
          points="1133.2,1412.3 1084,1331.7 1025.2,1243 1009,1266.6 962.7,1247.7 952.5,1278.1 
        901.9,1296.4 861.2,1385.6 851.1,1511.1 869.7,1555.4 906,1466.5 993.6,1415.8"
        />
      </svg>
    </div>
  );
};

const logos = [
  HTML5Logo,
  CSS3Logo,
  JavaScriptLogo,
  ReactLogo,
  BootstrapLogo,
  TypeScriptLogo,
  ReduxLogo,
  ReduxSagaLogo,
  AzureDevOpsLogo,
  GitLogo,
  NpmLogo,
  YarnLogo,
  MaterialUILogo,
  WordPressLogo,
];

export default logos;
