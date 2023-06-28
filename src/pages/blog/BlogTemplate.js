import React from "react";
import { Links } from "../../components/Links";

const BlogTemplate = ({ img, title, children }) => {
    return (
        <div>
            {/* <div className="text">
                <Link to={"/blog"}>{`// [ ↲ go back ]`}</Link>
            </div> */}
            <Links />
            <div className="row-container">
                <div className="block">{img}</div>
                <div className="block text-block-container dark-background-alt">
                    <div className="title">{title}</div>
                </div>
            </div>
            <div className="content dark-background-alt">
                <div className="text text-content">{children}</div>
            </div>
            <Links />
        </div>
    );
};

export default BlogTemplate;
