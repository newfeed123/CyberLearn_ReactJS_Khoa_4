import React, { useState } from 'react'

export default function Login(props) {

    const [userLogin, setUserLogin] = useState({
        userName: '',
        passWord: '',
    })


    const handleChange = (event) => {
        const {name, value} = event.target
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    const handleLogin = (event) => {
        event.preventDefault()
        if(userLogin.userName === "123" && userLogin.passWord === "123"){
            //thanh cong thi chuyen ve trang trc do
            // props.history.goBack()
            props.history.push('/home')
            localStorage.setItem('userLogin', JSON.stringify(userLogin))
        } else{
            alert('sai roi')
            return
        }
    }

    return (
        <form className='container' onSubmit={handleLogin}>
            <h3 className='display-4'>Login</h3>
            <div className="form-group">
                <p>Username</p>
                <input type="text" name='userName' className='form-control' onChange={handleChange}/>
            </div>
            <div className="form-group">
                <p>Password</p>
                <input type="text" name='passWord' className='form-control' onChange={handleChange}/>
            </div>
            <div className="form-group">
                <button className='btn btn-success'>Đăng nhập</button>
            </div>
        </form>
    )
}
