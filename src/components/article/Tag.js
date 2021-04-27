import React from 'react';

const Tag = ({ id, name }) => {
    return (
        <div className="rounded-full border-2 flex p-2">
            <button id={id} className="bg-gray-200 cursor-pointer hover:text-darkblue-100">{name}</button>
        </div>
    )
}

export default Tag;