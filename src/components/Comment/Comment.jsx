import React from 'react';
import noImg from './../../assets/img/noImage.jpg';
import { StyleComment, StyleImg, StyleTitle, StyleSubTitle, StyleLink } from './CommentStyle';

function Comment({ thumbnail, title, num_comments, permalink }) {
    const cutStrValue = (str) => {
        if(str.length > 30) {
            return str.substr(0, 45) + '...';
        }
        return str;
    };

    return (
        <StyleComment>
            {
                thumbnail === 'self' || thumbnail === 'default' ? 
                    <StyleImg src={noImg} alt="" /> :
                    <StyleImg src={thumbnail} alt="" />
            }
            <StyleTitle>{cutStrValue(title)}</StyleTitle>
            <StyleSubTitle>Number of comments: {num_comments}</StyleSubTitle>
            <StyleLink href={`https://www.reddit.com/${permalink}`} target="_blank">Link</StyleLink>
        </StyleComment>
    );
}

export default React.memo(Comment);
