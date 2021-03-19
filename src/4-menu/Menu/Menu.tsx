import React from 'react';
import { useMenuContext } from '../contexts/menu-context';
import { Nav, List } from './style';

export const Menu: React.FC = () => {
    const menu = useMenuContext();
    const getAllRecipes = () => {
        menu.getAllRecipes();
    };
    const getBreakfastRecipes = () => {
        menu.getBreakfastRecipes();
    };
    const getLunchRecipes = () => {
        menu.getLunchRecipes();
    };
    const getShakesRecipes = () => {
        menu.getShakesRecipes();
    };
    return (
        <Nav>
            <List>
                <button onClick={getAllRecipes}>All</button>
                <button onClick={getBreakfastRecipes}>Breakfast</button>
                <button onClick={getLunchRecipes}>Lunch</button>
                <button onClick={getShakesRecipes}>Shakes</button>
            </List>
        </Nav>
    );
};
