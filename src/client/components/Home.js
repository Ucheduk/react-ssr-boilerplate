import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>
                React SSR Boilerplate
            </h1>
            <button onClick={() => console.log('Happy client rendering')}>Press Me!</button>
        </div>
    )
}

export default Home;