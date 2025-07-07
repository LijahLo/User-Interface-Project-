const RegisterForm = () => {
    return(
    <div>
    <h1 className = "text-center">Register</h1>
        <div className="container">
        <hr>
        <h2 className="text-center">name</h2>
        <label for="exampleFormControlInput1" class="form-label">name</label>
        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name"></input>
        </hr>
        <hr>
        <h2 className="text-center">userName</h2>
        <label for="exampleFormControlInput1" class="form-label">userName</label>
        <input type="username" class="form-control" id="exampleFormControlInput1" placeholder="username"></input>
        </hr>
        <hr>
        <h2 className="text-center">Email</h2>
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </hr>
        <hr>
        <h2 className="text-center">Password</h2>
        <label for="exampleFormControlTextarea1" class="form-label">Password</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </hr>
        </div>
    </div>
    );
} 
export default RegisterForm;