import { useState } from 'react';
import loginBg from '../../assets/auth/login.jpg';
import { BsFillEyeFill, BsFillEyeSlashFill, BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Login = () => {
    const [passType, setPassType] = useState(true);
    const passTypeControl = () => {
        setPassType(!passType)
    }

    return (


        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url('${loginBg}')` }}>
            <div className="hero-content  w-[30%] ">

                <div className=" w-full shadow-2xl  border border-primary h-full ">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control relative ">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type={`${passType ? 'password' : 'text'}`} placeholder="password" className="input input-bordered" />
                            <BsFillEyeSlashFill className={`absolute bottom-10 right-2 text-2xl cursor-pointer ${passType ? '' : 'hidden'}`} onClick={passTypeControl} />
                            <BsFillEyeFill className={`absolute bottom-10 right-2 text-2xl cursor-pointer  ${passType ? 'hidden' : ''}`} onClick={passTypeControl} />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary border border-primary bg-opacity-0 hover:text-white text-primary">Login</button>
                            <p className='relative mx-auto'>or
                                <div className='  border border-primary absolute top-5 left-5 w-10'> </div>
                                <div className='  border border-primary absolute top-5 right-5 w-10'> </div>
                            </p>
                            <BsGoogle className='text-3xl text-primary mx-auto my-5' />
                        </div>
                        <Link className='text-primary mx-auto hover:text-purple-600'>New here? go to register</Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;