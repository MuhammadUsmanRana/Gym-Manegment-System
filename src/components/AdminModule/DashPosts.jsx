import React, { useEffect, useState } from 'react';
import DataForm from './dataForm';
import { deleteItem, editItem, getItem } from '../../Store/user/userSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditModal from './EditModal';

const DashPosts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editItems, setEditItems] = useState(null);

    const store = useSelector((state) => state.user);
    const dispatch = useDispatch();


    const handleEdit = (item) => {
        setEditItems(item);
        setOpenModalEdit(true);
    };

    const closeModalEdit = () => {
        setOpenModalEdit(false);
    };

    const onSubmit = async (data) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.put(`http://localhost:3000/api/crud/update/${editItems._id}`, data, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data.success === true) {
                dispatch(editItem(response.data.data));
                toast.success("Your post is Updated");
            }
        } catch (error) {
            console.log(error);
        }
        closeModalEdit();
    };


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const token = localStorage.getItem("token");
                const getdata = await axios.get("http://localhost:3000/api/crud/get", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (getdata.data.success === true) {
                    dispatch(getItem(getdata.data.data));
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchItem();
    }, [dispatch]);

    const handleDelete = async (item) => {
        const Id = item._id
        try {
            const token = localStorage.getItem("token");
            let resp = await axios.delete(`http://localhost:3000/api/crud/delete/${Id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (resp.data.success === true) {
                dispatch(deleteItem(resp.data));
                toast.success("Your post is Deleted");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">List of Items</h2>
                <button onClick={openModal} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Add Item
                </button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>Class Name</Table.HeadCell>
                            <Table.HeadCell>Staff Name</Table.HeadCell>
                            <Table.HeadCell>Starting Time</Table.HeadCell>
                            <Table.HeadCell>Ending Time</Table.HeadCell>
                            <Table.HeadCell>Location</Table.HeadCell>
                            <Table.HeadCell>Booking Fee</Table.HeadCell>
                            <Table.HeadCell><span className="">Actions</span></Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {store.currentState.length ? store.currentState.map((item, index) => (
                                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{item.className}</Table.Cell>
                                    <Table.Cell>{item.staffName}</Table.Cell>
                                    <Table.Cell>{item.startingTime}</Table.Cell>
                                    <Table.Cell>{item.endingTime}</Table.Cell>
                                    <Table.Cell>{item.location}</Table.Cell>
                                    <Table.Cell>{item.bookingFee}</Table.Cell>
                                    <Table.Cell>
                                        <button className=" hover:bg-blue-600 font-bold py-2 px-4 rounded" onClick={() => handleEdit(item)}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                            </svg>
                                        </button>
                                        <button className=" hover:bg-blue-600 font-bold py-2 px-4 rounded" onClick={() => handleDelete(item)}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11v5m0 0 2-2m-2 2-2-2M3 6v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Zm2 2v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8H5Z" />
                                            </svg>

                                        </button>
                                    </Table.Cell>
                                </Table.Row>
                            )) : (
                                <h1 className='text-center font-bold'>No Class in your List</h1>
                            )}
                        </Table.Body>
                    </Table>
                </div>
            </div>

            {/* Add Data Form */}
            <DataForm isOpen={isModalOpen} onClose={closeModal} />
            {/*  Edit Modal */}
            <EditModal
                isOpen={openModalEdit}
                closeModal={closeModalEdit}
                onSubmit={onSubmit}
                defaultValues={editItems}
            />
            <ToastContainer />
        </div>
    );
};

export default DashPosts;
