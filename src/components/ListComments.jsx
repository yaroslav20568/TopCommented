import React from 'react';
import Comment from './Comment';

function ListComments({ comments }) {
    return (
        <div>
            {
                comments.map(item => <Comment {...item.data} />)
            }
        </div>
    )
};

export default ListComments;
