import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';


function Tutorial1() {

    const navigate = useNavigate();

    const [skipClick, setSkipClick] = useState();

    const handleClickNext = (e) => {
        navigate('/tutorial2');
    }

    return (
        <>
        <div className='white-container' >
            <div className='title' style={{height: 300}}>
                <p>01</p>
            </div>
            <div className="text" style={{marginTop: '-160px', marginLeft: "100px", marginRight: "100px", marginBottom: "30px"}}>
                <p>At the bottom of the screen, clearly sign the given letters on the control panel.</p>
            </div>
            <button className='button-div' onClick={handleClickNext}> next </button>
        </div>
        </>
    );
}

export default Tutorial1;