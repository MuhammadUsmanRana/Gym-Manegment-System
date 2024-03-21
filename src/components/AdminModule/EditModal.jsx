import React from 'react';
import { useForm } from 'react-hook-form';

const EditModal = ({ isOpen, closeModal, onSubmit, defaultValues }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="bg-white w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 p-4 rounded-lg overflow-y-auto shadow-lg max-h-screen">
                    <h2 className="text-lg font-bold mb-4">Edit Class</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="className" className="block text-sm font-medium">Class Name</label>
                            <input type="text" id="className" defaultValue={defaultValues?.className} {...register("className", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.className && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="staffName" className="block text-sm font-medium">Staff Name</label>
                            <input type="text" id="staffName" defaultValue={defaultValues?.staffName} {...register("staffName", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.staffName && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="startingTime" className="block text-sm font-medium">Starting Time</label>
                            <input type="time" id="startingTime" defaultValue={defaultValues?.startingTime} {...register("startingTime", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.startingTime && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="endingTime" className="block text-sm font-medium">Ending Time</label>
                            <input type="time" id="endingTime" defaultValue={defaultValues?.endingTime} {...register("endingTime", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.endingTime && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-sm font-medium">Location</label>
                            <input type="text" id="location" defaultValue={defaultValues?.location} {...register("location", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.location && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="bookingFee" className="block text-sm font-medium">Booking Fee</label>
                            <input type="number" id="bookingFee" defaultValue={defaultValues?.bookingFee} {...register("bookingFee", { required: true })} className="mt-1 p-2 border  rounded-md w-full" />
                            {errors.bookingFee && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div className='flex justify-between'>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Update</button>
                            <button onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
