export const debug = (message) => {
    console.log(`%c[51cloudclass]:`, 'color: green; background: yellow; font-size: 14px');
    console.log(message);
}

export const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}