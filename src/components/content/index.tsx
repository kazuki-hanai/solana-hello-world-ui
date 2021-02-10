import React from 'react';
import { Header } from '@/components/header';
import { HelloWorld } from '@/components/helloWorld';
import { Description } from '@/components/description';
import { Footer } from '@/components/footer';

export const Content = (): JSX.Element => {
    return (
        <div className="flex flex-col place-content-center justify-center min-h-screen">
            <Header></Header>
            <Description></Description>
            <HelloWorld></HelloWorld>
            <Footer></Footer>
        </div>
    );
};
