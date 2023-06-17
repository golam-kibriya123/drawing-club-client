import { useContext, useState } from 'react';
import loginBg from '../../assets/auth/login.jpg';
import { BsFillEyeFill, BsFillEyeSlashFill, BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { updateProfile } from 'firebase/auth';
const Register = () => {
    const [passType, setPassType] = useState(true);
    const { createUserWithMailAndPass, googleLogin, auth } = useContext(AuthContext);

    const passTypeControl = () => {
        setPassType(!passType)
    };
    const update = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: `${photo}`
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            console.log(error)
        });
    }
    const handelRegistration = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const pass = from.password.value;
        const photo = from.photo.value;
        const name = from.name.value;
        const role = 'student';
        const newUser = { name, email, pass, photo, role };
        createUserWithMailAndPass(email, pass)
            .then((userCredential) => {
                update(name, photo);
                fetch(`https://draing-club-server.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login Successfully',
                            showConfirmButton: false,
                            timer: 900
                        });
                    })

                event.target.reset()
                console.log(userCredential);
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(error)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: errorMessage,
                    confirmButtonText: 'Try Again'
                })

            })

    };

    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url('${loginBg}')` }}>
            <Helmet>
                <title>Drawing Club | register</title>
            </Helmet>
            <div className="hero-content  md:w-[40%] w-[90%] ">

                <div className=" w-full shadow-2xl  border border-primary h-full ">
                    <form className="card-body" onSubmit={handelRegistration}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" name='email' required />
                        </div>

                        <div className="form-control relative ">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type={`${passType ? 'password' : 'text'}`} placeholder="password" className="input input-bordered" name='password' required />
                            <BsFillEyeSlashFill className={`absolute bottom-3 right-2 text-2xl cursor-pointer ${passType ? '' : 'hidden'}`} onClick={passTypeControl} />
                            <BsFillEyeFill className={`absolute bottom-3 right-2 text-2xl cursor-pointer  ${passType ? 'hidden' : ''}`} onClick={passTypeControl} />

                        </div>

                        <div className="form-control relative ">

                            <input type={`${passType ? 'password' : 'text'}`} placeholder="Confirm Password" className="input input-bordered" name='confirmPass' />


                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Photo URL</span>
                            </label>
                            <input type="text" placeholder=" Photo URL" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary border border-primary bg-opacity-0 hover:text-white text-primary">Submit</button>
                            <div className='relative mx-auto'>or
                                <div className='  border border-primary absolute top-5 left-5 w-10'> </div>
                                <div className='  border border-primary absolute top-5 right-5 w-10'> </div>
                            </div>
                            <BsGoogle className='text-3xl hover:text-primary text-purple-500 mx-auto my-5 cursor-pointer' onClick={googleLogin} />
                        </div>



                        <Link to={'/login'} className='text-primary mx-auto hover:text-purple-600'>Have an account! Login now?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;