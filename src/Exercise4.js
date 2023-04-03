// Use state hook to manage style of heading and slogan. Heading should be maroon and slogan should be italic.

import { useState } from "react";

const Header = (props)=>{
    const [theme , setTheme] = useState({name:'light', style: {backgroundcolor: 'white'}});

    //click handler
    function themeHandler(){
        //if theme is dark, then switch to light
        if(theme.name === 'dark'){
            setTheme({name:'light', style: {backgroundColor: 'white'}});
        }
        else if(theme.name === 'light'){
            setTheme({name:'dark', style: {backgroundColor: 'grey'}});
        }
    }
    
    
    
    return(
        <div style={theme.style}>
            <p>Welcome to Baham, an in-campus ride sharing service.</p>
            <button id="themeButton" onClick={themeHandler}>Switch Theme</button>
        </div>
    );
}

const Exercise4 = () => {
    return(
        <Header heading="Explore KIET!" slogan="A place for learning, discovery, innovation, expression and discourse" />
    );
}

export default Exercise4;