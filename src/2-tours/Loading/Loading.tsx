import React from 'react';
import { Heading } from './style';

export const Loading: React.FC = () => {
    const loadingRef = React.useRef<HTMLHeadingElement | null>(null);

    React.useLayoutEffect(() => {
        const paint = () => {
            if (loadingRef.current) {
                if (loadingRef.current.textContent === 'Loading') {
                    loadingRef.current.textContent = 'Loading.';
                } else if (loadingRef.current.textContent === 'Loading.') {
                    loadingRef.current.textContent = 'Loading..';
                } else if (loadingRef.current.textContent === 'Loading..') {
                    loadingRef.current.textContent = 'Loading...';
                } else {
                    loadingRef.current.textContent = 'Loading';
                }
            }
        };
        const id = setInterval(() => {
            paint();
        }, 500);
        return () => clearInterval(id);
    }, []);
    return (
        <div>
            <Heading ref={loadingRef}>Loading</Heading>
        </div>
    );
};
