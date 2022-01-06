import React, { useState } from 'react'

const UserContext = React.createContext()

function RegisterUser() {
    const [user, setUser] = useState([])
    return {
        setUser,
        user,
    }
}

export function UserProvider({ children }) {
    const user = RegisterUser();

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default function UserConsumer() {
    return React.useContext(UserContext)
}