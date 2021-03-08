import React from 'react';
import { GlobalStyle } from '../globalStyle';
import { Reviews } from '../Reviews';
import { Container, Header, Heading, Underline } from './style';

export const App: React.FC = (props) => {
    return (
        <Container>
            <Header>
                <Heading>Our Reviews</Heading>
                <Underline></Underline>
            </Header>
            <Reviews />
            <GlobalStyle />
        </Container>
    );
};
