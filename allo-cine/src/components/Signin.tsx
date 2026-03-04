import { useForm } from "react-hook-form";
import { Link } from "react-router";
import type { IInputSign } from '../interfaces/IInputSign'

const Signin = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IInputSign>()

    const handleForm = (data: IInputSign) => {
        if (data.password === data.confirmPassword) {
            console.log(data)
            // http request => back 
        }
    }

    return (
        <div className="modal-box min-h-screen bg-linear-to-b from-gray-900 to-black flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo Header */}
                <div className="text-center mb-8" >
                    <h1 className="text-4xl font-bold text-red-600 mb-2">Allo Ciné</h1>
                    <p className="text-gray-400">Log in to your account</p>
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
                                {...register("email", {required: true})}
                                placeholder="Enter your email address"
                                className="input input-bordered input-ghost w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:input-primary"              
                            />
                            {errors.password?.type === "required" && <p>Please enter a email address</p>} 
                        </div>

                        {/* Password Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-300 font-medium">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {minLength: 12, required: true})}
                                placeholder="Enter your password"
                                className="input input-bordered input-ghost w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:input-primary"
                            />
                            {errors.password?.type === "minLength" && <p>Password too short</p>} 
                            {errors.password?.type === "required" && <p>Please enter a password</p>} 
                        </div>
                        
                        {/* Confirm Password Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-300 font-medium">Confirm password</span>
                            </label>
                            <input
                                type="password"
                                {...register("confirmPassword", {minLength: 12, required: true})}
                                placeholder="Confirm your password"
                                className="input input-bordered input-ghost w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:input-primary"
                            />
                            {errors.password?.type === "minLength" && <p>Password too short</p>} 
                            {errors.password?.type === "required" && <p>Please enter a password</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-error w-full bg-red-600 hover:bg-red-700 border-0 text-white font-bold text-lg mt-8"
                        >
                            Log in
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="mt-6 text-center space-y-2">
                        <p className="text-gray-400 text-sm">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-red-600 hover:text-red-500 font-semibold">
                                Sign up
                            </Link>
                        </p>
                        <p className="text-gray-500 text-sm">
                        <Link to="/forgot" className="hover:text-red-600">
                            Forgot your password?
                        </Link>
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