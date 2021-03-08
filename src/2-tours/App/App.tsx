import React from 'react';
import { GlobalStyle } from '../globalStyle';
import { Loading } from '../Loading';
import { Tours } from '../Tours';
import { Container, Title, Underline, Heading } from './style';
import { ProjectData, useToursContext } from '../contexts/tours-context';

const url = 'https://course-api.com/react-tours-project';

export const App: React.FC = () => {
    const { state, dispatch } = useToursContext();
    const { isLoading, error, data } = state;

    const fetchItems = async () => {
        dispatch({ type: 'loading' });
        const response = await window.fetch(url);

        if (!response.ok) {
            dispatch({
                type: 'error',
                paylod: 'Ошибка HTTP: ' + response.status,
            });
        } else {
            const json: ProjectData[] = await response.json();
            dispatch({ type: 'success', payload: json });
        }
    };

    React.useEffect(() => {
        fetchItems();
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return <Loading />;
        } else if (error) {
            return <h3>{error}</h3>;
        } else if (data.length === 0) {
            return (
                <div>
                    <h3>There is no tours left</h3>
                    <button onClick={fetchItems}>Fetch more tours</button>
                </div>
            );
        } else {
            return (
                <section>
                    <Title>
                        <Heading>Our Tours</Heading>
                        <Underline></Underline>
                    </Title>
                    <Tours />
                </section>
            );
        }
    };

    return (
        <>
            <GlobalStyle />
            <Container>{renderContent()}</Container>
        </>
    );
};
