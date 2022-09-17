import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


//localhost:3000/about/

const About = () => {

    const navigate = useNavigate();

    const {aboutID} = useParams();

    //change the window tab title to the page name
    useEffect(() => {
      
        document.title = "About Us"
    
    }, [])
    

    const handleClick = () => {
        navigate('/')
        
    }


    return (
        <>
        <h1>About us</h1>

        <h2>{aboutID}</h2>

        <button onClick={handleClick}>Go Home</button>
        </>
    )
}

export default About