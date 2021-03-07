import React from 'react';
import { ProjectData } from '../App/App';

interface TourProps {
    data: ProjectData;
    onClick(id: string): void;
}

export const Tour: React.FC<TourProps> = ({ data, onClick }) => {
    return (
        <article>
            <img src={data.image} alt='Project' />
            <div>
                <span>{data.name}</span>
                <span>{data.price}</span>
            </div>
            <p>{data.info}</p>
            <button onClick={() => onClick(data.id)}>Not Interested</button>
        </article>
    );
};
