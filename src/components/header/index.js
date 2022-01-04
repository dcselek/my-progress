import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header({data,decrement}) {
    console.log("rendered")
    return (
        <div>
            <nav style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Link to="/">Home</Link>
                <NavLink
                    style={({ isActive }) => {
                        return {
                            display: 'block',
                            fontSize: isActive ? 32 : 16,
                            color: isActive ? "red" : ""
                        }
                    }}
                    to="users"
                >
                    Users
                </NavLink> {/* NavLink denemesi */}
                <Link to="formik">Formik</Link>
            </nav>
            <span>{data.user}</span>
            <br />
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default React.memo(Header)
