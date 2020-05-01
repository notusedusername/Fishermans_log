import React from "react";

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <div style={{margin: "2em", color:"white"}}>
                    <h1>Congratulations, you broke the internet</h1>
                    <h2>The page you requested not exists, or not implemented yet.</h2>
                </div>
                <div  style={{textAlign:"center"}}>
                    <img src={"404.png"} alt={"404"}/>
                </div>
            </div>
        )
    }
}

export default NotFound;