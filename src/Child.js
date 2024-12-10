import React from 'react';
import { useSelector } from 'react-redux';

function Child() {
    const count = useSelector((state) => state.count);
    const profilePhoto = useSelector((state) => state.profilePhoto);

    return (
        <div>
            <h1>Child:{count}</h1>
            <img src={profilePhoto} alt="profile" />
        </div>
    )
}

export default Child