import React from 'react';
import Comment from './Comment';
import styled from 'styled-components';

const CommentsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
`;

function ListComments({ comments, isLoading }) {
    return (
        <CommentsWrapper>
            {
                isLoading ? 
                    comments.map((item, index) => <Comment key={`comment_${index}`} {...item.data} />) :
                    'Loading...'
            }
        </CommentsWrapper>
    )
};

export default ListComments;
