import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input } from "./index"
import service from '../appwrite/auth'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import Logo from './Logo'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const [error, setError] = useState("")

    const login = async (data) => {
        // console.log("Form Submitted, Data:", data);
        setError("")
        try {
            const session = await service.login(data)
            if (session) {
                const userData = await service.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>
                    Sign in to your account
                </h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don't have any account?<br />
                    <Link
                        to="/signup"
                        className='font-medium text-primary transition-all duration-200 hover:underline'
                    >
                        Sign Up
                    </Link>
                </p>
                {
                    error && <p className="text-red-600 mt-8 text-center">{error}</p>
                }
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be valid address"
                                }
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                // validate: {
                                //     matchPattern: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value) ||
                                //         "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
                                // }
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        <Button type="submit" className="w-full cursor-pointer">Sign In</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login