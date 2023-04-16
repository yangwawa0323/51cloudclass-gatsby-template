import React, { createContext } from 'react';

export const HeaderContext = createContext(null);

const HeaderContextProvider = ({ children, extraContext }) => {

    const context = {
        ...extraContext,
    }

    return (
        <HeaderContext.Provider value={context}>
            {children}
        </HeaderContext.Provider>
    )
}


export default HeaderContextProvider;