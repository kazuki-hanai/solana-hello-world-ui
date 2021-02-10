import React from 'react';
import type { RootState } from '@/reducers';
import { useSelector } from 'react-redux';

export const Description = (): JSX.Element => {
    const { helloWorldState } = useSelector((state: RootState) => state);
    return (
        <div className="text-black bg-white p-4 rounded mb-4">
            <h2 className="text-lg font-bold text-center w-full">
                Description
            </h2>
            <p className="">
                Transaction ID: {helloWorldState?.result.transactionId}
            </p>
            <p className="">Cluster URL: {helloWorldState?.result.url}</p>
            <p className="">
                Payer Account: {helloWorldState?.result.payerAccount}
            </p>
            <p className="">program ID: {helloWorldState?.result.programId}</p>
            <p className="">
                Greeted Pubkey: {helloWorldState?.result.greetedPubkey}
            </p>
            <p className="">
                Num Greetes: {helloWorldState?.result.numGreetes}
            </p>
        </div>
    );
};
