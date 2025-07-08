import { fetchData } from "../../main.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        username: '',
        Postitem: ([])
    })  

    const { name, username, Postitem} = user;
    const onChange = (e) => setUser({...Postitem, [e.target.name]:e.target.value})

   
    const onClick = (e) =>{
        e.preventDefault();
    fetchData("/user/login",
        {
            name,
            username,
            Postitem
        },
        "POST")
        .then((data) => {
            if(!data.message){
                console.log(data)
            navigate("/Profile")
            }
        })
        .then(Postitem => {
            setPosts([...Postitem, newPost]);
            setNewPost('')
        })
        .catch((error) => {
         console.log(error)
        })
    }
    return(
    <div>
    <form onClick={onClick}>
    <h1 className = "text-center">Profile</h1>
        <div className="container">
        <hr>
        <h2 className="text-center">name</h2>
        <label htmlFor="name" class="form-label">Name</label>
        <input type="name" class="form-control" id="name" placeholder="name"
        onChange={onChange}
        value = {Postitem}></input>
        </hr>
        <hr>
        <h2 className="text-center">userName</h2> 
        <label htmlFor="username" class="form-label">userName</label>
        <input type="username" class="form-control" id="username" placeholder="username"
        onChange={onChange}
        value = {Postitem}></input>
        </hr>
            <div>
            <h3>Your Posts:</h3>
            {posts.map(post => (
            <div key={post.id}>
            <p>{post.content}</p>
        
        <input type = "Postitem" placeholder="Upload Post here" 
            onChange={onChange}
            value = {Postitem}> 
        </input>   
        <button type="submit">Create Post</button>
        </div>
        ))}

        </div>
        </div>
    </form>
    </div>
    );
} 
export default Profile;