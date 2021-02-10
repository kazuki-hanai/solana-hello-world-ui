import React from 'react';

export const Footer = (): JSX.Element => {
    return (
        <footer className="text-white text-center">
            <p>
                Repository URL:{' '}
                <a
                    className="underline"
                    href="https://github.com/wan-nyan-wan/solana-hello-world-ui"
                >
                    https://github.com/wan-nyan-wan/solana-hello-world-ui
                </a>
            </p>
        </footer>
    );
};
