import React from 'react';
import { useSelector } from 'react-redux';

function Child() {
    const count = useSelector((state) => state.count);
    return (
        <div>Child:{count}</div>
    )
}

export default Child