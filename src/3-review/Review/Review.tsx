import React from 'react';
import { Container, Image } from './style';

interface ReviewProps {
    id: number;
    name: string;
    job: string;
    image: string;
    text: string;
}

export const Review: React.FC<ReviewProps> = ({ image, name, job, text }) => {
    return (
        <Container>
            <Image>
                <img src={image} alt='Photo' />
            </Image>
            <h3>{name}</h3>
            <h4>{job}</h4>
            <p>{text}</p>
        </Container>
    );
};
