import React from 'react'
import { useFormik } from 'formik'

function FormikPage() {
    const formik = useFormik({
        initialValues: {
            userName: "dcselek",
            password: "asdasd",
            gender: "male",
            country: "turkey",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div>
            <h1>form</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='userName'>Username: </label>
                <input name='userName' value={formik.values.userName} onChange={formik.handleChange} />
                <br />

                <label htmlFor='password'>Password: </label>
                <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange} />
                <br />

                <label htmlFor='gender'>Gender: </label>
                <span>Male: </span>
                <input type="radio" name='gender' value="male" onChange={formik.handleChange} />
                <span>Female: </span>
                <input type="radio" name='gender' value="female" onChange={formik.handleChange} />
                <br />

                <select name='country' value={formik.values.country} onChange={formik.handleChange}>
                    <option value="turkey">Turkey</option>
                    <option value="england">England</option>
                    <option value="russia">Russia</option>
                </select>
                <br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormikPage
