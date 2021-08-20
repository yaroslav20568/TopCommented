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

const RootFilter = styled.div`
    margin-bottom: 15px;
`;

const FilterRow = styled.div`
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const FilterTitle = styled.span`
    font-size: 18px;
    color: #e58327;
`;

const FilterButton = styled.button`
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 16px;
    background-color: #d816d4;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
`;

const FilterRange = styled.input`
    width: 100%;
`;

function App() {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [autoRefresh, setAutoRefresh] = useState(false);
    const [itemsMaxComments, setItemsMaxComments] = useState(0);
    const [rangeValue, setRangeValue] = useState(0);
    // let interval;

    const findMaxComments = (arr) => {
        return Math.max(...arr.map(elem => elem.data.num_comments));
    }

    const fetchData = () => {
        setIsLoading(false);
        fetch('https://www.reddit.com/r/reactjs.json?limit=100')
            .then(response => response.json())
            .then(({ data }) => {
                setIsLoading(true);
                setComments(data.children);
                setItemsMaxComments(findMaxComments(data.children));
            })
    }

    const getItemsByComments = (comments, rangeValue) => {
        return comments
            .filter(item => item.data.num_comments >= rangeValue)
            .sort((a, b) => b.data.num_comments - a.data.num_comments)
    }

    const updateRangeValue = (e) => {
        setRangeValue(+e.target.value);
        getItemsByComments(comments, rangeValue);
    }

    // const handlerClickButton = () => {
    //     setAutoRefresh(!autoRefresh);
        
    //     interval = setInterval(fetchData, 3000);
    //     if(!autoRefresh) {
    //         clearInterval(interval);
    //     }
    // }

    useEffect(() => {
        fetchData();
    }, []);

    const itemsByComments = getItemsByComments(comments, rangeValue);

    return (
        <RootContainer>
            <GlobalStyle />
            <RootTitle>Top commented.</RootTitle>
            
            <RootFilter>
                <FilterRow>
                    <FilterTitle>Current filter: {rangeValue}</FilterTitle>
                    <FilterButton /*onClick={() => handlerClickButton()}*/>{autoRefresh ? 'Stop auto-refresh' : 'Start auto-refresh'}</FilterButton>
                </FilterRow>
                <FilterRow>
                    <FilterRange onChange={(e) => updateRangeValue(e)} type="range" value={rangeValue} min="0" max={itemsMaxComments + 1} />
                </FilterRow>
            </RootFilter>

            <ListComments itemsByComments={itemsByComments} isLoading={isLoading} />
        </RootContainer>
    );
}

export default App;
