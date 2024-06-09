import React from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSignup from '../../hooks/useSignUp.js'
const SignUp = () => {
    const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		// confirmPassword: "",
		gender:"",
	});

    // console.log(inputs.fullName);


    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};
    const handleSubmit = async (e) => {

        // it will not rerender the page so we can prevent it with the help of preventDefault() 
		
        e.preventDefault();
        
        signup({
            fullName: inputs.fullName,
            username: inputs.username,
            password: inputs.password,
            gender: inputs.gender
        })
	    // await signup(inputs);
        console.log(inputs);
	};




  return (
    <>
            <div className='flex flex-col items-center justify-center min-w-80 mx-auto  md:min-w-96 '>

                <div className="w-full  p-6 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">

                    <h1 className='text-3xl font-semibold pt-4: md:pt-0 text-center text-gray-700'>
                        Sign Up
                        <span className='text-orange-400'> ChatApp</span>
                    </h1>



                    <form onSubmit={handleSubmit} action="">

                        <div>
                            <label className='label p-3'>
                                <span className='text-base label-text'> Full Name </span>
                            </label>
                             <input type='text'
                                placeholder='Wikky Doe'
                                className='w-full input input-bordered h-10 border-orange-300'
                                value={inputs.fullName}
                                // spread the input and only change the fullName store it in the json
                                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            /> 
                        </div>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Username</span>
                            </label>
                            {/* <input type='text'
                                placeholder='Enter username'
                                className='w-full input input-bordered h-10 border-orange-300'
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            /> */}

                            <label className="input input-bordered flex items-center gap-2 border-orange-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow " placeholder="Eg: wikky091"    value={inputs.username}
                                // spread the input and only change the fullName store it in the json
                                onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                            </label>
                        </div>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 border-orange-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow"  placeholder='Enter your password'
                                
                                value={inputs.password}
                                // spread the input and only change the fullName store it in the json
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                                />
                            </label>
                        </div>
                        {/* <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Confirm Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 border-orange-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow" placeholder='Enter your confirm password'
                                
                                value={inputs.confirmPassword}
                                // spread the input and only change the fullName store it in the json
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                                />
                            </label>
                        </div> */}
                       
                          <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}></GenderCheckBox>
 						
                          <div>
                        <button className='btn btn-block btn-sm mt-3 bg-orange-400 hover:bg-orange-500'>
                                                    
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}                           
                            </button>
					    </div>
                        <div className='font-semibold text-xs text-center py-3' >Already have an account? </div>
                        <Link to="/login" className='font-semibold  text-sm  w-full border  rounded-full flex  justify-center items-center  p-2  hover:underline hover:decoration-orange-600 border-orange-700 cursor-pointer' >
                            

                          Log In
                            
                        </Link>

                    </form>

                </div>

                {/* <button className="btn btn-active btn-primary">Primary</button> */}

            </div>

        </>
  )
}

export default SignUp
