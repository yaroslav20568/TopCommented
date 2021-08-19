import React, { useState, useEffect } from 'react';
import ListComments from './components/ListComments';

function App() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://www.reddit.com/r/reactjs.json?limit=100')
            .then(response => response.json())
            .then(data => setComments(data.data.children))
    }, []);

    return (
        <>
            <h1>Top commented.</h1>
            <ListComments comments={comments} />
        </>
    );
}

export default App;
