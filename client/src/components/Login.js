import {useState} from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = ({target: {name, value}}) => {
        setUser(current => ({
            ...current,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if (res.status === 200) {
                res.json().then(userObj => console.log(userObj))
            } else {
                res.json().then(errorObj => alert(errorObj.error))
            }
        })
        .catch(err => alert(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input type="text" onChange={handleChange} value={user.email} className="form-email" name="email"/>
                <label></label>
                <input type="password" onChange={handleChange} value={user.password} className="form-password" name="password"/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login