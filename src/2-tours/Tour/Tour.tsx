import React from 'react';
import { ProjectData } from '../contexts/tours-context';
import { Article, Button, Header, Badge } from './style';

interface TourProps {
    data: ProjectData;
    onClick(): void;
}

export const Tour: React.FC<TourProps> = ({ data, onClick }) => {
    const [less, setLess] = React.useState(true);
    const renderInfo = () => {
        const text = data.info.substring(0, 240) + '...';
        return (
            <p>
                {' '}
                {less ? text : data.info}
                <button onClick={() => setLess(!less)}>
                    {less ? 'Read More' : 'Show Less'}
                </button>
            </p>
        );
    };
    return (
        <Article>
            <img src={data.image} alt='Project' />
            <div>
                <Header>
                    <span>{data.name}</span>
                    <Badge>{data.price}</Badge>
                </Header>
                {renderInfo()}
                <Button onClick={onClick}>Not Interested</Button>
            </div>
        </Article>
    );
};
