import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import image from "../static/e.png"
export const Signup = () => {
  const navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState('');
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response=await fetch("https://kisaan-mitr-backend.vercel.app/api/user/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(Data)
    })
    const json=await response.json();
    console.log(json);
    if (response.ok) {
      localStorage.setItem("token", json.jwtData); 
      setResponseMessage(json.message);
      navigate('/', { replace: true });
    } else {
      setResponseMessage(json.msg); 
    }
  }

  const [Data, setData] = useState({
    userName:"",
    email:"",
    password:""
  })

  const handleChange=({currentTarget:input})=>{
    setData({...Data,[input.name]:input.value})
  }


  return (
    <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-24 w-auto"
                        src={image}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                User Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="userName"
                                    name="userName"
                                    onChange={handleChange}
                                    required
                                    value={Data.userName}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    required
                                    value={Data.email}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    required
                                    value={Data.password}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                            <Link to="/login"><div className="text-sm font-medium leading-6 text-gray-600 pt-3 flex justify-center hover:text-gray-800 hover:text-base">Already a member? Login</div></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
  )
}
