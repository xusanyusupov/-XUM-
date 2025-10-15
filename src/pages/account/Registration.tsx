import logo from '@/assets/head/logo.png'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
interface FormValues {
  username: string
  password: string
}

const Registration = () => {
  const [isUser,setIsUser] = useState<FormValues | null >(null)
  const formik = useFormik<FormValues>({
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

      const userExists = existingUsers.some(
        (user: FormValues) => user.username === values.username
      );

      if (userExists) {
        toast.error("This username is already registered!", {
          className: "custom-toast",
        });
        return; 
      }
      const updatedUsers = [...existingUsers, values];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setIsUser(values);
      toast.success("Registration successful!", {
        className: "custom-toast",
      });
      setTimeout(() => {
        window.location.href = "/account"
      }, 3000);
    },
  });
  
  

  return (
    <>
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-md w-full border border-mainColor/40 rounded-lg flex flex-col px-5 py-5">
        <div className="flex items-center gap-3 max-xs:flex-col">
          <div className="w-24 h-24 flex items-center justify-center border border-mainColor rounded-full">
            <img src={logo} className="w-20" alt="Logo (XUM)" />
          </div>
          <div className="flex flex-col">
            <b className="inter text-2xl text-mainColor text-center whitespace-nowrap">
              Xtraordinary Urban Meals
            </b>
            <p className="inter text-xs text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center my-4">
          <div className="w-full border border-mainColor"></div>
        </div>

        <p className="text-mainColor text-center inter text-xl">Registration</p>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col gap-5 px-5"
        >
          <div className="w-full">
            <p className="inter pl-2 text-[14px]">Username:</p>
            <input
              autoComplete="off"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-mainColor/40 py-1 pl-3 rounded-lg"
              type="text"
            />
             {
              formik.touched.username && formik.errors.username && (
                <p className='text-red-500 pl-2 text-[14px]'>{formik.errors.username}</p>
              )
            }
          </div>
          <div className="w-full">
            <p className="inter pl-2 text-[14px]">Password:</p>
            <input
              autoComplete="off"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-mainColor/40 py-1 pl-3 rounded-lg"
              type="password"
            />
            {
              formik.touched.password && formik.errors.password && (
                <p className='text-red-500 pl-2 text-[14px]'>{formik.errors.password}</p>
              )
            }
          </div>
          <button
            type="submit"
            className="bg-mainColor text-secondary py-1 rounded-lg"
          >
            Send
          </button>
        </form>

        <div className="flex items-center justify-center py-3 max-xs:flex-col">
          <p className="inter">Do you have an account?</p>
          <p className="inter text-mainColor underline">
            <Link to="/login">Login</Link>
          </p>
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

export default Registration
