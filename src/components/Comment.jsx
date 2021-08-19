import React from 'react';

function Comment({ thumbnail, title, num_comments, permalink }) {
    console.log(permalink);
    return (
        <div>
            {
                thumbnail === 'self' ? '' : <img src={thumbnail} alt="" />
            }
            <div>{title}</div>
            <div>Number of comments: {num_comments}</div>
            <a href={`https://www.reddit.com/${permalink}`} target="_blank">Link</a>
        </div>
    );
}

export default Comment;
