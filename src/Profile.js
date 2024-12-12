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

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "./redux/actions/dataActions";
import { updateEmail } from "./redux/actions/profileActions";

function Profile() {
    const email = useSelector((state) => state.profile.email);
    const { loading, data } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!data) {
            dispatch(fetchData(2));
        }
    }, [data]);


    return (
        <div>
            <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => dispatch(updateEmail(e.target.value))}
            />
            <Link to="/">
                <div>Go to Home</div>
            </Link>
            {loading ? <h1>Loading Has Started...</h1> : data ? <h1>Data Has been fetched</h1> : null}
        </div>
    );
}

export default Profile;
