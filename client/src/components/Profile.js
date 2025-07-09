import {fetchData} from '../main';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const [posts, setPosts]       = useState([]);
    const [newPosts, setNewPost]   = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        username: '',    
    })  

    const { name, username} = user;
    const onChange = (e) => setUser({...user, [e.target.name]:e.target.value})

   
    const onClick =  async (e) =>{
        e.preventDefault();
    fetchData("/user/login",
        {
            name,
            username,
            
            
        },
        "POST")
        .then((data) => {
            if(!data.message){
                console.log(data)
            navigate("/Profile")
            }
        })
        const postsData = await fetchData('',null,"GET");
        setPosts(postsData)
        
        .then(postsData => {
            setPosts([...postsData, newPosts]);
            setNewPost('')
        })
        .catch((error) => {
         console.log(error)
        })
    }
     const handlePost = (e) =>{
        e.preventDefault();
     try {
            const post = fetchData('/user/post',{
                content: newPosts,
                userId: user._id, 
                username:user.username
            },"POST");
         setPosts([post,...posts]);
        setNewPost("");
        }
     catch(issue){
        console.error("Unable to upload post", issue)
     }   
    };
    const handleDeletePost = (postId) => {
    try{
        const res = fetchData('/user/post/${postId}',{
             method: 'DELETE',
        });
        const result = res.json();
       if(res.ok){
        setPosts(posts.filter(posts => posts._id !== postId));
       } else { 
        console.error("Unable to Delete Post");
       } 
    } catch(issue){
        console.error("Delete issue", issue);
    }    
    }
    return(
    <div>
    <form onClick={onClick}>
    <div className="container">
    <h1 className = "text-center">Profile</h1>
         
    <h1 className = "text-center">Login</h1>
        <h2 className="text-center">name</h2>
        <label htmlFor="name" class="form-label">Name</label>
        <input type="name" class="form-control" id="name" placeholder="name"
        onChange={onChange}
        value = {newPosts}></input>
    
        
        <h2 className="text-center">userName</h2> 
        <label htmlFor="username" class="form-label">userName</label>
        <input type="username" class="form-control" id="username" placeholder="username"
        onChange={onChange}
        value = {newPosts}></input>
        
        <form onClick={handlePost}>
            <h3>Make a Post</h3>
            <textarea  className = 'form control'
            placeholder='Upload post here'
            value={newPosts}
            onChange= {(e) => setNewPost(e.target.value)}/>
            <button type="submit" className="btn btn-success mt-2">Create Post</button>
        </form>
            <div>
            <h3>Your Posts:</h3>
            {posts.map(post => (
            <div key={post.id}>
            <p>{post.content}</p>
            <small>{new Date(post.createdAt).toLocaleString()}</small>
            <div>
           {Array.isArray(posts) && (posts.map)((post) => (
           <div key={post._id}>
           <p>{post.content}</p>
           <button onClick={() => handleDeletePost(post._id)}>Delete</button>
        </div>
        ))}

       </div>
       </div>
        ))}
    </div>
    </div>
    </form>
    </div>
    );
} 
export default Profile;