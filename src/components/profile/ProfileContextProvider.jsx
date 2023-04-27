import React from 'react'
import { createContext } from 'react'

export const ProfileContext = createContext(null)

const ProfileContextProvider = ({ children, extraContext }) => {
    let context = {
        ...extraContext
    }
    return (
        <ProfileContext.Provider value={context}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider