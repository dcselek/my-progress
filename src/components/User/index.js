import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const [userInfo, setUserInfo] = useState([])
    let { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUserInfo(res.data))
    }, [id])
    return (
        <div>
            <code>{userInfo.name}</code>
            <br/>
            <code>{userInfo.email}</code>
            <br/>
            <code>{userInfo.phone}</code>
        </div>
    )
}

export default User
