import React from 'react';
import { Container, Image, Header, Description } from './style';

interface RecipeProps {
    title: string;
    price: number;
    img: string;
    desc: string;
}

export const Recipe: React.FC<RecipeProps> = ({ img, title, price, desc }) => {
    return (
        <Container>
            <Image>
                <img
                    src={`http://localhost:5000/api/images/` + img}
                    alt={title}
                />
            </Image>
            <Header>
                <h3>{title}</h3>
                <h4>{price}</h4>
            </Header>

            <Description>{desc}</Description>
        </Container>
    );
};
