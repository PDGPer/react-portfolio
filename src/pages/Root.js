import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { codeWriterStatus } from "../config";

function Root() {
    const [hasOpenedOnce, setHasOpenedOnce] = useState(codeWriterStatus);
    return (
        <div className="main-column-container">
            <Outlet context={[hasOpenedOnce, setHasOpenedOnce]} />
        </div>
    );
}

export default Root;
