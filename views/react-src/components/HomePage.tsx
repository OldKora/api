import * as React from 'react';

const HomePage = (props: HomePageProps) => {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <h1>Hello {props.name}!</h1>
            <p>{count}</p>
            <button onClick={() => {setCount(count + 1)}} >Increment</button>
            <button onClick={() => {setCount(count - 1)}} >Decrement</button>
        </>
    );
};

export interface HomePageProps { name: string }

export default HomePage;