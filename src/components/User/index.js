import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const [userInfo, setUserInfo] = useState([])
    const [loading, setLoading] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUserInfo(res.data))
            .finally(setLoading(true))
    }, [id])
    return (
        <div>
            {!loading && <h1>......</h1>}
            {loading &&
                <>
                    <h3>kullanıcı {userInfo.id}</h3>
                    <code>{userInfo.name}</code>
                    <br />
                    <code>{userInfo.email}</code>
                    <br />
                    <code>{userInfo.phone}</code>
                </>
            }
        </div>
    )
}

export default User
