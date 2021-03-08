import React, { createContext, useContext } from 'react';
import produce from 'immer';

export type ProjectData = {
    id: string;
    image: string;
    info: string;
    name: string;
    price: string;
};

interface State {
    isLoading: boolean;
    data: ProjectData[];
    error: null | string;
}

const initialState = {
    isLoading: false,
    data: [],
    error: null,
};

const ToursContext = createContext<{
    state: State;
    dispatch: React.Dispatch<any>;
    notInterested: (id: string) => void;
}>({
    state: initialState,
    dispatch: () => {},
    notInterested: () => {},
});

const toursReducer = produce((state, action) => {
    switch (action.type) {
        case 'loading':
            state.isLoading = true;
            return;
        case 'success':
            state.isLoading = false;
            state.data = action.payload;
            return;
        case 'error':
            state.isLoading = false;
            state.error = action.payload;
            return;
        case 'not-interested':
            state.data = state.data.filter(
                (item: any) => item.id !== action.payload,
            );
    }
});

const ToursProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(toursReducer, initialState);

    const notInterested = (id: string) => {
        dispatch({ type: 'not-interested', payload: id });
    };

    return (
        <ToursContext.Provider
            value={{
                state,
                dispatch,
                notInterested,
            }}
        >
            {children}
        </ToursContext.Provider>
    );
};

const useToursContext = () => useContext(ToursContext);

export { useToursContext, ToursProvider };
