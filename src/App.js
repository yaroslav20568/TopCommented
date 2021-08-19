import React, { useState, useEffect } from 'react';
import ListComments from './components/ListComments';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *: before, *: after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.2;
        font-family: 'Roboto', sans-serif;
        background-color: #f5f5f5;
    }
`;

const RootContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 15px;
`;

const RootTitle = styled.h1`
    font-size: 28px;
    color: #e58327;
    margin-bottom: 20px;
`;

function App() {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://www.reddit.com/r/reactjs.json?limit=100')
            .then(response => response.json())
            .then(({ data }) => {
                data.children.sort((a, b) => {
                    if(a.data.num_comments > b.data.num_comments) {
                        return -1;
                    }
                });
                setIsLoading(true);
                setComments(data.children);
            })
    }, []);

    return (
        <RootContainer>
            <GlobalStyle />
            <RootTitle>Top commented.</RootTitle>
            <ListComments comments={comments} isLoading={isLoading} />
        </RootContainer>
    );
}

export default App;
