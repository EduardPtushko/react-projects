import React from 'react';

import { useToursContext } from '../contexts/tours-context';

import { Tour } from '../Tour/Tour';

export const Tours: React.FC = () => {
    const { notInterested, state } = useToursContext();
    const { data } = state;
    return (
        <>
            {data.map((item) => (
                <Tour onClick={() => notInterested(item.id)} data={item} />
            ))}
        </>
    );
};
