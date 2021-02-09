import React from 'react';

interface Props {
    handleHelloWorld: () => void;
}

export const HelloWorldButton = (props: Props): JSX.Element => {
    return (
        <button
            className={`p-3 m-5 rounded-sm shadow-inner bg-green-500 active:bg-green-700`}
            onClick={(): void => props.handleHelloWorld()}
        >
            Hello World!
        </button>
    );
};
