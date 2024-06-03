import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate, useParams } from 'react-router-dom';
import { baseURL } from '../baseURL';

const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { id, token } = useParams();
    const navigate=useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (confirmPassword !== newPassword) {
            Swal.fire({
                title: "Error",
                text: "The passwords don't match",
                icon: "error",
                confirmButtonText: "Ok",
            });
        } else {
            try {
                const res = await axios.post(`${baseURL}/user/reset-password/${id}/${token}`, { password: newPassword });
                if (res) {
                    Swal.fire({
                        icon: "success",
                        title: "Password Reset Successful",
                    });
                    navigate("/login");
                }
            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: "An error occurred while resetting your password. Please try again later.",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            }
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Reset Password
                    </h2>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 
                            border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                            focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => {
                                setNewPassword(e.target.value);
                            }} />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 
                            border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                            focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }} />
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none 
                        focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 
                        dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset password</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ResetPasswordPage;
