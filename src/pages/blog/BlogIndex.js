import React from "react";
import { Links } from "../../components/Links";
import { Link } from "react-router-dom";

const BlogIndex = () => {
    return (
        <>
            <Links />
            <div className="content dark-background-alt">
                <div className="text text-content">
                    <Link to="/blog/year0">
                        {'// Year 0 - Crossing the "Learn to Code" forest'}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogIndex;
