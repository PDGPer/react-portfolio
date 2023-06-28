import React from "react";
import { Links } from "../components/Links";
import { Link } from "react-router-dom";

const BlogIndex = () => {
    return (
        <>
            <div className="content dark-background-alt">
                <div className="text text-content">
                    <Link to="/home">
                        {'// Year 0 - Crossing the "Learn to Code" forest'}
                    </Link>
                    <br></br>
                    <Link to="/home">
                        {"// Year 1 - Meeting the code druids"}
                    </Link>
                    <br></br>
                    <Link to="/home">
                        {"// Year 2 - Suck my dick tech sector"}
                    </Link>
                </div>
            </div>
            <Links />
        </>
    );
};

export default BlogIndex;
