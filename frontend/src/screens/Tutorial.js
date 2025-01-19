import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, Center } from '@chakra-ui/react';


function Tutorial() {

    const navigate = useNavigate();

    const [skipClick, setSkipClick] = useState();

    const handleClickBegin = (e) => {
        navigate('/tutorial1');
    }

    return (
        <>
        <div className='white-container'>
            <div className='title' style={{height: 300}}>
                <p>tutorial</p>
            </div>
            <div className="text" style={{marginTop: '-160px', marginLeft: "100px", marginRight: "100px", marginBottom: "30px"}}>
                <p>Welcome to Wingterpreter! Let’s go through a quick tutorial to get started.</p>
            </div>
            <button className='button-div' onClick={handleClickBegin}> begin </button>
        </div>
        {/* <p> Tutorial </p> */}
       
        </>
    );
}

export default Tutorial;