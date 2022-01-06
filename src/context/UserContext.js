import React, { useState } from 'react'

const UserContext = React.createContext()

function User() {
    const [user, setUser] = useState([])
    return (
        setUser,
        user
    )
}

export function UserProvider({children}) {
    const user = User();

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default function UserConsumer() {
    return React.useContext(UserContext)
}