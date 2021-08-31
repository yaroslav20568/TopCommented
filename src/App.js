import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, RootContainer, RootTitle, RootFilter, FilterRow, FilterTitle, FilterButton, FilterRange } from './AppStyle';
import ListComments from './components/ListComments/ListComments';

function App() {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [enableAutoRefresh, setEnableAutoRefresh] = useState(false);
    const [itemsMaxComments, setItemsMaxComments] = useState(0);
    const [rangeValue, setRangeValue] = useState(0);
    let interval;
    const theme = {
        media: {
            mw992: "(max-width: 992px)",
            mw768: "(max-width: 768px)",
            mw600: "(max-width: 600px)",
            mw360: "(max-width: 360px)"
        }
    }

    const findMaxComments = (arr) => {
        return Math.max(...arr.map(elem => elem.data.num_comments));
    };

    const fetchData = () => {
        setIsLoaded(false);
        fetch('https://www.reddit.com/r/reactjs.json?limit=100')
            .then(response => response.json())
            .then(({ data }) => {
                setIsLoaded(true);
                setItems(data.children);
                setItemsMaxComments(findMaxComments(data.children));
            })
    };

    const getItemsByComments = (comments, rangeValue) => {
        return comments
            .filter(item => item.data.num_comments >= rangeValue)
            .sort((a, b) => b.data.num_comments - a.data.num_comments)
    };

    const handlerClickButton = () => {
        setEnableAutoRefresh(!enableAutoRefresh);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if(enableAutoRefresh) {
            interval = setInterval(fetchData, 3000);
        }
        return () => {
            clearInterval(interval);
        }
    }, [enableAutoRefresh]);

    const itemsByComments = getItemsByComments(items, rangeValue);

    return (
        <ThemeProvider theme={theme}>
            <RootContainer>
                <GlobalStyle />
                <RootTitle>Top commented.</RootTitle>
                <RootFilter>
                    <FilterRow>
                        <FilterTitle>Current filter: {rangeValue}</FilterTitle>
                        <FilterButton onClick={handlerClickButton}>{enableAutoRefresh ? 'Stop auto-refresh' : 'Start auto-refresh'}</FilterButton>
                    </FilterRow>
                    <FilterRow>
                        <FilterRange onChange={(e) => setRangeValue(+e.target.value)} type="range" value={rangeValue} min="0" max={itemsMaxComments + 1} />
                    </FilterRow>
                </RootFilter>
                <ListComments itemsByComments={itemsByComments} isLoaded={isLoaded} />
            </RootContainer>
        </ThemeProvider>
    );
}

export default App;
