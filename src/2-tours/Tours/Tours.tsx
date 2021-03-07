import React from 'react';
import { ProjectData } from '../App/App';
import { Tour } from '../Tour/Tour';

interface ToursProps {
    data: ProjectData[];
    onClick(id: string): void;
}

export const Tours: React.FC<ToursProps> = ({ data, onClick }) => {
    return (
        <>
            {data.map((item) => (
                <Tour onClick={onClick} data={item} />
            ))}
        </>
    );
};
