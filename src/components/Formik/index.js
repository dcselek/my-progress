import React from 'react'
import { useFormik } from 'formik'
import validationSchema from './validations';
import RegisterUser from '../../context/UserContext'

function FormikPage() {
    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
            gender: "male",
            country: "turkey",
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema,
    })

    const { setUser } = RegisterUser();
    return (
        <div>
            <h1>form</h1>
            <form onSubmit={(e) => { handleSubmit(); setUser(values); e.preventDefault(); }}>
                <label>Email: </label>
                <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                <br />
                <span id='errorSpan'>{touched.email && errors.email}</span>
                <br />
                <br />

                <label>Password: </label>
                <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                <br />
                <span id='errorSpan'>{touched.password && errors.password}</span> {/* touched inputa tıklayıp başka bir inputa focus olduğumuzda çalışır. bilgiyi almak için handleBlur kullanıyoruz */}
                <br />
                <br />

                <label>Password Confirm: </label>
                <input type="password" name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur} />
                <br />
                <span id='errorSpan'>{touched.passwordConfirm && errors.passwordConfirm}</span>
                <br />
                <br />

                {/* <label htmlFor='gender'>Gender: </label>
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
                <br /> */}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormikPage
