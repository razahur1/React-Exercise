// Use props to set heading and slogan.

const Header = (props)=>{
    return(
        <div>
            <h1>{props.heading}</h1>
            <h3>{props.slogan}</h3>
        </div>
    );
}

const Exercise2 = () => {
    return(
        <Header heading="Explore KIET!" slogan="A place for learning, discovery, innovation, expression and discourse" />
    );
}

export default Exercise2;