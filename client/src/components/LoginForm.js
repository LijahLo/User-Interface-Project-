import {fetchData} from '../main';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        
        email: '', 
        password: ''
    })  

    const { email, password} = user;
    const onChange = (e) => setUser({...email, [e.target.name]:e.target.value})

   
    const onClick = (e) =>{
        e.preventDefault();
    fetchData("/user/login",
        {
            email,
            password
        },
        "POST")
        .then((data) => {
            if(!data.message){
                console.log(data)
            navigate("/Profile")
            }
        })
        .catch((error) => {
         console.log(error)
        })
    }


    return(
    <div>
    <form onClick={onClick}>
    <div className="container">
    <h1 className = "text-center">Login</h1>
         
        <h2 className="text-center">Email</h2>
        <label htmlFor="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com"
        onChange={onChange}
        value = {email}></input>
        
        
        <h2 className="text-center">Password</h2>
        <label htmlFor="password" class="form-label">Password</label>
        <textarea class="form-control" id="password" rows="1"
        onChange={onChange}
        value = {password} 
        required></textarea>
        
        
    </div>
    </form>
    </div>

    );
} 
export default LoginForm;