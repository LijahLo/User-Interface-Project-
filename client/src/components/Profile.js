const Profile = () => {
    return(
    <div>
    <h1 className = "text-center">profile</h1>
        <div className="container">
        <hr>
        <h2 className="text-center">name</h2>
        <label for="exampleFormControlInput1" class="form-label">name</label>
        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name"></input>
        </hr>
        <h2 className="text-center">userName</h2> 
        <label for="exampleFormControlInput1" class="form-label">userName</label>
        <input type="username" class="form-control" id="exampleFormControlInput1" placeholder="username"></input>
        </div>
    </div>
    );
} 
export default Profile;