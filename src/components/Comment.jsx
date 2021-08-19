import React from 'react';
import noImg from './../assets/img/noImage.jpg';
import styled from 'styled-components';

const StyleComment = styled.div`
    border: 1px solid #000;
    padding: 8px;
`;

const StyleImg = styled.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
`;

const StyleTitle = styled.h4`
    font-size: 14px;
    margin: 3px 0 6px;
`;

const StyleSubTitle = styled.h5`
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 4px;
`;

const StyleLink = styled.a`
    text-decoration: none;
    color: blue;
`;

const cutStrValue = (str) => {
    if(str.length > 30) {
        return str.substr(0, 45) + '...';
    }
    return str;
}

function Comment({ thumbnail, title, num_comments, permalink }) {
    

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

export default Comment;
