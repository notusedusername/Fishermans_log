import React from "react";

class Welcome extends React.Component {

    render() {
        return (
            <div id={"welcome"}>
                <h2>International Fishing Association</h2>
                <img src={"logoIFA.png"} alt={"IFA"} id={"homeImg"} />
            </div>
        );
    }
}

export default Welcome;