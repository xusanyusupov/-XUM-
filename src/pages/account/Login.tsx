import logo from '@/assets/head/logo.png'
import * as yup from "yup";
import { Link } from "react-router-dom"
import { useFormik } from 'formik'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

interface LoginValue {
    username: string,
    password: string
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState<LoginValue | null>(null);
    const navigate = useNavigate()

    const formikLogin = useFormik<LoginValue>({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: yup.object({
        username: yup
          .string()
          .min(4, "Username must be at least 3 characters long")
          .required("Username entry is required"),
        password: yup
          .string()
          .min(6, "Password must be at least 6 characters long")
          .required("Password entry is required"),
      }),
      onSubmit: (values) => {
        const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
  
        const foundUser = existingUsers.find(
          (user: LoginValue) =>
            user.username === values.username &&
            user.password === values.password
        );
  
        if (foundUser) {
          setLoggedInUser(foundUser);
          toast.success("Login successful!", {
            className: "custom-toast",
          });
          setTimeout(() => {
            navigate("/account"); 
          }, 3000);
        } else {
          toast.error("Invalid username or password!", {
            className: "custom-toast",
          });
        }
      },
    });
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <div className='max-w-md w-full border border-mainColor/40 rounded-lg flex flex-col px-5 py-5'>
                    <div className='flex items-center gap-3 max-xs:flex-col'>
                        <div className='w-24 h-24 flex items-center justify-center border border-mainColor rounded-full'> 
                            <img src={logo} className='w-20 h-20 object-contain' alt='Logo (XUM)'/> 
                        </div>
                        <div className='flex flex-col'>
                            <b className='inter text-2xl text-mainColor text-center whitespace-nowrap max-extra-xs:text-xl'>Xtraordinary Urban Meals</b>
                            <p className='inter text-xs text-center max-extra-xs:'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center my-4'>
                        <div className='w-full border border-mainColor'></div>
                    </div>
                    <p className='text-mainColor text-center inter text-xl'>Login</p>

                    <form 
                        onSubmit={formikLogin.handleSubmit}
                        className='w-full flex flex-col gap-5 px-5'
                    > 
                        <div className='w-full'>
                            <p className='inter pl-2 text-[14px]'>Username:</p>
                            <input 
                                autoComplete="off"
                                name='username'
                                value={formikLogin.values.username}
                                onChange={formikLogin.handleChange}
                                className='w-full border border-mainColor/40 py-1 pl-3 rounded-lg' 
                                type="text" 
                            />
                            
                            {formikLogin.touched.username && formikLogin.errors.username && (
                                <p className="text-red-500 text-xs mt-1">{formikLogin.errors.username}</p>
                            )}
                        </div>
                        <div className='w-full'>
                            <p className='inter pl-2 text-[14px]'>Password:</p>
                            <input 
                                autoComplete="off"
                                name='password'
                                value={formikLogin.values.password}
                                onChange={formikLogin.handleChange}
                                className='w-full border border-mainColor/40 py-1 pl-3 rounded-lg' 
                                type="password" 
                            />
                            {formikLogin.touched.password && formikLogin.errors.password && (
                                <p className="text-red-500 text-xs mt-1">{formikLogin.errors.password}</p>
                            )}
                        </div>
                        <button 
                            type='submit'
                            className='bg-mainColor text-secondary py-1 rounded-lg'
                        >
                            Send
                        </button>
                    </form>

                    <div className='flex items-center justify-center py-3 max-xs:flex-col'>
                        <p className='inter'>Do you not have an account?</p>
                        <p className='inter text-mainColor underline'><Link to={'/registration'}> Registration</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
            theme="light"
            />
            <style>{`
                .custom-toast {
                width: auto !important;
                max-width: 350px;
                whitespace:nowrap;
                text-align: center;
                font-weight: 500;
                border-radius: 8px;
                }
            `}</style>
        </>
    )
}

export default Login