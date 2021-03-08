import { ProjectData, useToursContext } from '../contexts/tours-context';

export const usefetchData = (url: string) => {
    const { dispatch } = useToursContext();

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

    return [];
};
