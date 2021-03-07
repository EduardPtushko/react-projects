import React from 'react';
import { GlobalStyle } from '../globalStyle';
import { Loading } from '../Loading';
import { Tours } from '../Tours';
import { Container, Title, Underline, Heading } from './style';

const url = 'https://course-api.com/react-tours-project';

export type ProjectData = {
    id: string;
    image: string;
    info: string;
    name: string;
    price: string;
};

export const App: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState<ProjectData[]>([]);
    const [error, setError] = React.useState<string | null>(null);

    const handleClick = (id: string) => {
        const newData = [...data].filter((item) => item.id !== id);
        setData(newData);
    };

    React.useEffect(() => {
        const fetchItems = async () => {
            const response = await window.fetch(url);

            if (!response.ok) {
                setError('Ошибка HTTP: ' + response.status);
            } else {
                const json: ProjectData[] = await response.json();
                setData(json);
                setIsLoading(false);
            }
        };

        fetchItems();
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return <Loading />;
        } else if (error) {
            return <h3>{error}</h3>;
        } else {
            return (
                <section>
                    <Title>
                        <Heading>Our Tours</Heading>
                        <Underline></Underline>
                    </Title>
                    <Tours data={data} onClick={handleClick} />
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
