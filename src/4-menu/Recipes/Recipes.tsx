import React from 'react';
import { useMenuContext } from '../contexts/menu-context';
import { observer } from 'mobx-react-lite';

import { Recipe } from '../Recipe/Recipe';
import { Block } from './style';

export const Recipes: React.FC = observer(() => {
    const menu = useMenuContext();

    React.useEffect(() => {
        menu.handleCache();
    }, []);

    if (menu.error) {
        return <p>There is error {menu.error}</p>;
    }

    return (
        <Block>
            {menu.data.map((el) => (
                <Recipe key={el.id} {...el} />
            ))}
        </Block>
    );
});
