// Use state hook to manage style of heading and slogan. Heading should be maroon and slogan should be italic.

import { useState } from "react";

const Header = (props)=>{
    const [headingstyle] = useState({color:'maroon'});
    const [sloganstyle] = useState({fontStyle:'italic'});

    return(
        <div>
            <h1 style={headingstyle}>{props.heading}</h1>
            <h3 style={sloganstyle}>{props.slogan}</h3>
        </div>
    );
}

const Exercise3 = () => {
    return(
        <Header heading="Explore KIET!" slogan="A place for learning, discovery, innovation, expression and discourse" />
    );
}

export default Exercise3;