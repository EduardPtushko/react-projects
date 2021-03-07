import React, { createContext, useContext } from 'react';
import produce from 'immer';

const ToursContext = createContext({});

const toursReducer = produce((state, action) => {
    switch (action.type) {
        case 'loading':
            state.isLoading = true;
        case 'succeded':
            state.isLoading = false;
            state.data = action.payload;
        case 'error':
            state.isLoading = false;
            state.error = action.payload;
    }
});

const ToursProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(toursReducer, {
        isLoading: false,
        data: [],
        error: null,
    });

    return (
        <ToursContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </ToursContext.Provider>
    );
};

const useToursContext = () => useContext(ToursContext);

export { useToursContext, ToursProvider };
