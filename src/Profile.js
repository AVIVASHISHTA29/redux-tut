// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateEmail } from './redux/actions/profileActions';

// function Profile() {
//     const [localState, setLocalState] = useState("");
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <input type="text" placeholder="Enter Email" value={localState} onChange={(e) => setLocalState(e.target.value)} />
//             <button onClick={() => dispatch(updateEmail(localState))}>Update Email</button>
//         </div>
//     )
// }

// export default Profile

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmail } from "./redux/actions/profileActions";

function Profile() {
    const email = useSelector((state) => state.profile.email);
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => dispatch(updateEmail(e.target.value))}
            />
        </div>
    );
}

export default Profile;
