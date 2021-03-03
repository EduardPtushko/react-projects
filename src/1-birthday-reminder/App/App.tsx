import React from 'react';
import items from '../data';
import { GlobalStyle } from '../globalStyle';
import { ThemeProvider } from 'styled-components';
import { Container, Button, Heading } from './style';
import { List } from '../List';

export const App: React.FC = () => {
    const [data, setData] = React.useState(() => items);

    return (
        <ThemeProvider
            theme={{
                fontFamily: 'Helvetica Neue',
            }}
        >
            <>
                <Container>
                    <Heading>{data.length} birthdays today</Heading>
                    <List data={data} />
                    <Button onClick={() => setData([])}>Clear All</Button>
                </Container>
                <GlobalStyle />
            </>
        </ThemeProvider>
    );
};
