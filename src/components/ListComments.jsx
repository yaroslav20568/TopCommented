import React from 'react';
import Comment from './Comment';
import styled from 'styled-components';

const CommentsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    @media ${props => props.theme.media.mw992} {
        grid-template-columns: repeat(4, 1fr);
    }
    @media ${props => props.theme.media.mw768} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${props => props.theme.media.mw600} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${props => props.theme.media.mw360} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const InfoTitle = styled.h2`
    color: #999;
    font-weight: 500;
    font-style: italic;
`;

function ListComments({ itemsByComments, isLoaded }) {
    return (
        <>
            {
                isLoaded ? 
                    itemsByComments.length === 0 ? 
                        <InfoTitle>No results found matching your criteria.</InfoTitle> :
                        <CommentsWrapper>
                            {itemsByComments.map((item, index) => <Comment key={`comment_${index}`} {...item.data} />)}
                        </CommentsWrapper> :
                    <InfoTitle>Loading...</InfoTitle>
            }
        </>
    )
};

export default ListComments;
