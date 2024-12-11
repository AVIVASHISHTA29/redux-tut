import React from 'react';
import { useSelector } from 'react-redux';

function Child() {
    const count = useSelector((state) => state.count);
    const profilePhoto = useSelector((state) => state.profilePhoto);

    const { email } = useSelector((state) => state.profile);
    const { data, loading, error } = useSelector((state) => state.data);


    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            <h1>Child:{count}</h1>
            <img src={profilePhoto} alt="profile" />
            <h1>Email From Redux: {email}</h1>
            <h1>Data From Redux: {JSON.stringify(data)}</h1>
        </div>
    )
}

export default Child