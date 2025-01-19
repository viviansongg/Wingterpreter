import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';


function Tutorial3() {

    const navigate = useNavigate();

    const [skipClick, setSkipClick] = useState();

    const handleClickNext = (e) => {
        navigate('/tutorial4');
    }

    return (
        <>
        <div className='white-container'>
            <div className='title' style={{height: 300}}>
                <p>03</p>
            </div>
            <div className="text" style={{marginTop: '-160px', marginLeft: "100px", marginRight: "100px", marginBottom: "30px"}}>
                <p>To move the bird down, sign the letter next to the down arrow.</p>
            </div>
            <button className='button-div' onClick={handleClickNext}> next </button>
        </div>
        </>
    );
}

export default Tutorial3;