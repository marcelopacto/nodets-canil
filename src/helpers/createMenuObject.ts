type MenuOptions = '' | 'todos' |'caes' |'gatos' | 'peixes';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        todos: false,
        caes: false,
        gatos: false,
        peixes: false
    };
    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;

}