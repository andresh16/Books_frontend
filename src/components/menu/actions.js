export const TOGGLE_MENU = "TOGGLE_MENU";
export const CLOSE_MENU = "CLOSE_MENU";
export const CHANGE_TITLE = "CHANGE_TITLE";



export function toggleMenu(){
    return {
        type: TOGGLE_MENU
    };
}

export function closeMenu(){
    return {
        type: CLOSE_MENU
    };
}

export function changeTitleMenu(title){
    return {
        type: CHANGE_TITLE,
        title
    };
}