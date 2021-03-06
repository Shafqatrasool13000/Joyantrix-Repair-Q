import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { customerList, deleteCustomer } from '../utils/urls';
import sweetalert from '../../SweetAlert';
import Loader from '../Loader/Loader'
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Modal from 'react-modal'
import EditCustomer from '../EditCustomer/EditCustomer';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'

const CustomerList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [customersList, setCustomersList] = useState(null)
    const [editableCustomer, setEditableCustomer] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${process.env.REACT_APP_BASE_URL}${customerList}`).then((response) => {
            setIsLoading(false)
            setCustomersList(response.data.customers)
        }).catch((error) => {
            setIsLoading(false)
            sweetalert('Something Went Wrong', 'error')
        });


    }, [update]);

    const history = useHistory();
    const moveToCustomersList = () => {
        history.push('/customers-table')
    }

    // Edit Handler
    const editHandler = (customer) => {
        setEditableCustomer(customer)
        setIsModalOpen(true)
    }
    const removeModal = () => {
        setIsModalOpen(false)
        setUpdate((prev) => !prev)

    }
    // Delete Handler 
    const deleteHandler = (_id) => {
        setIsLoading(true)
        axios.delete(`${process.env.REACT_APP_BASE_URL}${deleteCustomer}/${_id}`).then((response) => {
            setIsLoading(false)
            sweetalert('Customer Deleted Sucessful', 'success', moveToCustomersList)
            setUpdate((prev) => !prev)
        }).catch((error) => {
            setIsLoading(false)
            sweetalert('Something Went Wrong', 'error')
        });
    }
    return <div className='container form mt-3 '>
        {isLoading && <Loader />}
        <Modal appElement={document.getElementById('app')} shouldCloseOnEsc isOpen={isModalOpen} shouldCloseOnOverlayClick onRequestClose={() => setIsModalOpen(false)} style={
            {
                content: { color: "orange", background: " linear-gradient(to right, #870000, #190a05)" }
            }
        }>
            <div className='d-flex flex-column align-items-center'>
                <EditCustomer customerInfo={editableCustomer} removeModal={removeModal} />

            </div>
        </Modal>
        <div className='text-end'>
            <Link to='/create-customer'>
                <button className="btn btn-success">Create Customer</button>
            </Link>
        </div>
        <div className='content-overflow'>

            <table className="table overlay list-table ">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#Sr.</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customersList && customersList.map((customer, index) => {
                            const { firstName, lastName, email, _id } = customer
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{email}</td>
                                    <td><FaEdit style={{ cursor: 'pointer', color: '#34568B' }} onClick={() => editHandler(customer)} size='1.5rem' className='me-3' /><FaTrashAlt style={{ cursor: 'pointer', color: 'red' }} onClick={() => deleteHandler(_id)} size='1.5rem' /></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    </div>;
};

export default CustomerList;
