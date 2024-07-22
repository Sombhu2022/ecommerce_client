import React from "react";
import "./error.scss";

function Error() {
    return (
        <section className="error_page">
            <div className="text">
                <span className="lr">4</span>
                <span className="error">!</span>
                <span className="rr">4</span>
            </div>
            <p>Page not found</p>
        </section>
    );
}

export default Error;
