import React, {useState} from 'react';

const ButtonUp = ({clickAction}) => {
    return (
        <button onClick={clickAction}>
            +1
        </button>
    );
};

const ButtonDwn = ({clickAction}) => {
    return (
        <button onClick={clickAction}>
            -1
        </button>
    );
};

const Display = ({content}) => (
    <pre>{content}</pre>
);

const CountManager = () => {
    const [count, setCount] = useState(0);

    const incCounter = () => {
        setCount(count + 1);
    }

    const decCounter = () => {
        setCount (count - 1);
    }

    return (
        <div>
            <ButtonUp clickAction={incCounter} />
            <Display content={count} />
            <ButtonDwn clickAction={decCounter} />
        </div>
    );
};
export default CountManager;