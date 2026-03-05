import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import type { IInputSign } from '../interfaces/IInputSign'

const Signin = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IInputSign>()


    const handleForm = (data: IInputSign) => {
        if (data.password === data.confirmPassword) {
            console.log(data)
            // http request => back 
            navigate('/signup')
        }
    }

    return (
        <div className="modal-box min-h-screen bg-linear-to-b from-gray-900 to-black flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo Header */}
                <div className="text-center mb-8" >
                    <h1 className="text-4xl font-bold text-red-600 mb-2">Allo Ciné</h1>
                    <p className="text-gray-400">Sign in to your account</p>
                    <form method="dialog" className="modal-backdrop">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-20 text-red-600">X</button>
                    </form>
                </div>

                {/* Form Container */}
                <div className="bg-gray-800 bg-opacity-70 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
                    <form onSubmit={handleSubmit(handleForm)} className="space-y-6">

                        {/* Email Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-300 font-medium">Email</span>
                            </label>
                            <input 
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address"
                                    },
                                    minLength: {
                                        value: 5,
                                        message: "Email too short"
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Email too long"
                                    }
                                })}
                                autoComplete="email"
                                placeholder="Enter your email address"
                                className="input input-bordered input-ghost w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:input-primary"              
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>

                        {/* Password Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-300 font-medium">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "password is required",
                                    minLength: {
                                        value: 12,
                                        message: "Password too short"
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Password too long"
                                    },
                                    pattern: {
                                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{12,}$/,
                                        message: "The password must contain one uppercase letter, one lowercase letter, one number, and one special character."
                                    },
                                })}
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                className="input input-bordered input-ghost w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:input-primary"
                            />
                            {errors.password && <p>{errors.password.message}</p>} 
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-error w-full bg-red-600 hover:bg-red-700 border-0 text-white font-bold text-lg mt-8"
                        >
                            Sign in
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="mt-6 text-center space-y-2">
                        <p className="text-gray-400 text-sm">
                            Don't have an account?{' '}
                            <span
                                className="text-red-600 hover:text-red-500 font-semibold cursor-pointer"
                                onClick={() => {
                                    (document.getElementById('form-signup') as HTMLDialogElement)?.showModal();
                                    navigate('/signup');
                                }}
                            >
                                Sign up
                            </span>
                        </p>
                        <p className="text-gray-500 text-sm">
                            <span
                                className="hover:text-red-600 cursor-pointer"
                                onClick={() => navigate('/forgot')}
                            >
                                Forgot your password?
                            </span>
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <p className="text-gray-500 text-xs text-center mt-8">
                    This page is secure and protected by SSL encryption.
                </p>
            </div>
        </div>
    )
}

export default Signin