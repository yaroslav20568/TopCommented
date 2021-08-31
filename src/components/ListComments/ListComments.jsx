import React from 'react';
import Comment from './../Comment/Comment';
import { CommentsWrapper, InfoTitle } from './ListCommentsStyle';

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
