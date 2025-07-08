import { fetchData } from "../../main.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '', 
        username: '', 
        email: '', 
        password: '',
        password2:''
    });
    const {name, username, email, password, password2} = user;
    const onChange = (e) => setUser({...name, [e.target.name]:e.target.value})
   
    const onClick = (e) =>{
        e.preventDefault();
    fetchData("/user/register",
        {
            name, 
            username, 
            email,
            password
        },
        "POST")
        .then((data) => {
            if(!data.message){
                console.log(data)
            }
        })
        .catch((error) => {
         console.log(error)
        navigate("/Profile")
        })
    }

    
    return(
    <div>
    <form onClick={onClick}>
    <h1 className = "text-center">Register</h1>
        <div className="container">
        <hr>
        <h2 className="text-center">name</h2>
        <label htmlFor="name" className="form-label">name</label>
        <input type="text" class="form-control" id="name" placeholder="name" 
        onChange={onChange}
        value = {name}
        required >
        </input>
        
        </hr>
        <hr>
        <h2 className="text-center">userName</h2>
        <label htmlFor="username" class="form-label">userName</label>
        <input type="username" class="form-control" id="username" placeholder="username"
        onChange={onChange}
        value = {username}
        required>
        </input>
        </hr>
        <hr>
        <h2 className="text-center">Email</h2>
        <label htmlFor="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com"
        onChange={onChange}
        value = {email}></input>
        </hr>
        <hr>
        <h2 className="text-center">Password</h2>
        <label htmlFor="password" class="form-label">Password</label>
        <textarea class="form-control" id="password" rows="1"
        onChange={onChange}
        value = {password} 
        required></textarea>
        </hr>
        <label htmlFor="password2" className="form-label">Confirm Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password2"
            name='password2'
            required
          onChange={onChange}
        value = {password2}/>
    </div>
    </form>
    </div>
    );
} 
export default RegisterForm;