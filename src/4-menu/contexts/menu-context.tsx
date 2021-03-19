import React, { createContext, useContext } from 'react';
import { makeAutoObservable, runInAction } from 'mobx';
import { RecipeType } from '../recipeType';

const MenuContext = createContext<MenuStore | undefined>(undefined);

const useMenuContext = () => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error('MenuContext should be provided');
    }
    return context;
};

class MenuStore {
    url = 'http://localhost:5000/api/recipes';
    data: RecipeType[] = [];
    error: number | null = null;
    cache: RecipeType[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async fetchRecipes() {
        const res = await fetch(this.url);
        if (res.ok) {
            const data = await res.json();

            this.cache = data;
            return data;
        } else {
            this.error = res.status;
        }
    }

    async handleCache() {
        await this.fetchRecipes();
        runInAction(() => {
            this.data = this.cache;
        });
        setInterval(async () => {
            const data = await this.fetchRecipes();
            this.cache = data;
        }, 50000);
    }

    getAllRecipes() {
        this.data = this.cache;
    }

    getBreakfastRecipes() {
        this.data = this.cache.filter((r) => r.category === 'breakfast');
    }
    getLunchRecipes() {
        this.data = this.cache.filter((r) => r.category === 'lunch');
    }

    getShakesRecipes() {
        this.data = this.cache.filter((r) => r.category === 'shakes');
    }
}

const MenuProvider: React.FC = ({ children }) => {
    const menu = new MenuStore();
    return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>;
};

export { useMenuContext, MenuProvider };
