import React from 'react';
import { useSelector } from 'react-redux';

function Child() {
    const count = useSelector((state) => state.count);
    const profilePhoto = useSelector((state) => state.profilePhoto);

    const { email } = useSelector((state) => state.profile)

    return (
        <div>
            <h1>Child:{count}</h1>
            <img src={profilePhoto} alt="profile" />
            <h1>Email From Redux: {email}</h1>
        </div>
    )
}

export default Child