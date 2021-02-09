import React from 'react';
import { Header } from '@/components/header';
import { HelloWorldButton } from '@/components/helloWorldButton';
import { Description } from '@/components/description';
import { handleHelloWorld } from '@/solana/hello_world';

export const Content = (): JSX.Element => {
    return (
        <div className="flex flex-col place-content-center justify-center min-h-screen">
            <Header></Header>
            <Description></Description>
            <HelloWorldButton
                handleHelloWorld={handleHelloWorld}
            ></HelloWorldButton>
        </div>
    );
};
