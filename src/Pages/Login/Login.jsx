import { useContext, useState } from 'react';
import loginBg from '../../assets/auth/login.jpg';
import { BsFillEyeFill, BsFillEyeSlashFill, BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
const Login = () => {
    const [passType, setPassType] = useState(true);
    const passTypeControl = () => {
        setPassType(!passType)
    }
    const { loginEmailAndPass } = useContext(AuthContext)
    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        loginEmailAndPass(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 900
                })
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;

                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Password or Email was Wrong',
                    confirmButtonText: 'Try Again'


                })



                console.log(errorMessage)
                // ..
            })


    }

    return (


        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url('${loginBg}')` }}>
            <div className="hero-content  md:w-[30%] w-[90%] ">

                <div className=" w-full shadow-2xl  border border-primary h-full ">

                    <form className="card-body" onSubmit={handelLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control relative ">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type={`${passType ? 'password' : 'text'}`} placeholder="password" className="input input-bordered" name='password' />
                            <BsFillEyeSlashFill className={`absolute bottom-10 right-2 text-2xl cursor-pointer ${passType ? '' : 'hidden'}`} onClick={passTypeControl} />
                            <BsFillEyeFill className={`absolute bottom-10 right-2 text-2xl cursor-pointer  ${passType ? 'hidden' : ''}`} onClick={passTypeControl} />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary border border-primary bg-opacity-0 hover:text-white text-primary">Login</button>
                            <div className='relative mx-auto'>or
                                <div className='  border border-primary absolute top-5 left-5 w-10'> </div>
                                <div className='  border border-primary absolute top-5 right-5 w-10'> </div>
                            </div>
                            <BsGoogle className='text-3xl text-primary mx-auto my-5 cursor-pointer' />
                        </div>
                        <Link to={'/register'} className='text-primary mx-auto hover:text-purple-600'>New here? go to register</Link>
                    </form>

                </div>
            </div>
        </div>


    );
};

export default Login;