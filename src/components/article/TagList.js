import React, { useState, useEffect } from 'react';
import Tag from './Tag';

const TagList = ({ tag }) => {

    return (
        <div>
            <Tag {...tag} />
        </div>
    )

}

export default TagList