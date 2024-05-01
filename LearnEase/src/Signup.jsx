import {useRef} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const username = useRef(null);
  const password = useRef(null);

const handleClick = async() => {
  const usernameVal = username.current.value;
  const passwordVal = password.current.value;
  
  const response = await fetch("http://localhost:3000/admin/signup",{
  method : "POST",
  headers : {
    "Content-Type" : "application/json"
  },
  body : JSON.stringify({ username: usernameVal, password: passwordVal })
})

const json = await response.json();
localStorage.setItem("token",json.token);
navigate("/");
}


  return (
    <div className="w-1/2 h-screen mx-auto mt-6">
      <h2 className="text-center text-4xl font-light font-sans my-5">Welcome to LearnEase 🙏</h2>
     <div className="w-1/2 mx-auto mt-20">
      <input ref={username} className="bg-gray-200 block mb-4 w-full p-3 rounded-md" type="text"placeholder="username or email"/>
      <input ref={password} className="bg-gray-200 block mb-4 w-full p-3 rounded-md" type="password" placeholder="password"/>
      <button className="p-3 rounded-md bg-blue-500 text-white font-normal text-lg mx-auto w-full"
      onClick={handleClick}
      >Signup</button>
     </div>
    </div>
  );
};

export default Signup;
