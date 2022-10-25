import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Componentb = (props) => {
    
    const [status, setstatus] = useState(1);

    const changestatus = () =>{
        if (status >=1)
            setstatus (status -1)
        else
            setstatus (status + 1)
    }

    
    return (
        <div>
           
            <div>
            { status===1 ? 'Online':'Offline' }
            </div>
            <div>
                <button onClick={changestatus}>
                    Change Status
                </button>
            </div>
        </div>
    );
};


Componentb.propTypes = {
    
};


export default Componentb;
