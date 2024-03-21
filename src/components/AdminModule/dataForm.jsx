import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Store/user/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DataForm = ({ isOpen, onClose }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const onSubmit = async (data) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:3000/api/crud/create", data, {
                headers: { Authorization: `Bearer ${token}` },
            })
            if (response.data.success) {
                dispatch(addItem(response.data.data));
                toast.success("Your post is Added");
                reset();
            }
        } catch (error) {
            console.log(error)
        }
        onClose()
    };
    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center p-4">
                <div className="bg-white w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 p-4 rounded-lg overflow-y-auto shadow-lg max-h-screen">
                    <h2 className="text-lg font-bold mb-4">Add New Class</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="className" className="block text-sm font-medium">Class Name</label>
                            <input type="text" id="className" {...register("className", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.className && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="staffName" className="block text-sm font-medium">Staff Name</label>
                            <input type="text" id="staffName" {...register("staffName", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.staffName && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="startingTime" className="block text-sm font-medium">Starting Time</label>
                            <input type="time" id="startingTime" {...register("startingTime", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.startingTime && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="endingTime" className="block text-sm font-medium">Ending Time</label>
                            <input type="time" id="endingTime" {...register("endingTime", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.endingTime && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-sm font-medium">Location</label>
                            <input type="text" id="location" {...register("location", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.location && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="bookingFee" className="block text-sm font-medium">Booking Fee</label>
                            <input type="number" id="bookingFee" {...register("bookingFee", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.bookingFee && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className='flex justify-between'>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                            <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default DataForm