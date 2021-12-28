import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState([])
    let navigate = useNavigate() //useNavigate denemesi

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
    }, [])
    return (
        <div>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <button onClick={() => navigate(`/user/${user.id}`)}>{user.name}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users
