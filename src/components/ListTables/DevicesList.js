import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  deviceDelete, deviceList } from '../utils/urls';
import sweetalert from '../../SweetAlert';
import Loader from '../Loader/Loader'
import { FaTrashAlt,FaEdit } from "react-icons/fa";
import Modal from 'react-modal'
import { Link, useHistory } from 'react-router-dom';
import EditDevice from '../EditDevice/EditDevice';

const DevicesList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [devicesList, setDevicesList] = useState(null)
    const [editableDevice, setEditableDevice] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [update,setUpdate]=useState(false);
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${process.env.REACT_APP_BASE_URL}${deviceList}`).then((response) => {
            setIsLoading(false)
           
            setDevicesList(response.data.devices)
        }).catch((error) => {
            setIsLoading(false)
            sweetalert('Something Went Wrong', 'error')
        });


    }, [update]);

    const history=useHistory();
    const moveToDevicesList=()=>{
        history.push('/device-table')
    }

    // Edit Handler
    const editHandler = (device) => {
        setEditableDevice(device)
        setIsModalOpen(true)
    }
    const removeModal=()=>{
        setIsModalOpen(false)
        setUpdate((prev)=>!prev)
    }
    // Delete Handler 
    const deleteHandler = (_id) => {
        setIsLoading(true)
        axios.delete(`${process.env.REACT_APP_BASE_URL}${deviceDelete}/${_id}`).then((response) => {
            setIsLoading(false)
            sweetalert('Device Deleted Sucessful', 'success', moveToDevicesList)
            setUpdate((prev)=>!prev)
        }).catch((error) => {
            setIsLoading(false)
            sweetalert('Something Went Wrong', 'error')
        });
    }

    return <div className='container form mt-3'>
        {isLoading && <Loader />}
        <Modal appElement={document.getElementById('app')} shouldCloseOnEsc isOpen={isModalOpen}  shouldCloseOnOverlayClick onRequestClose={()=>setIsModalOpen(false)} style={
             {
            content:{color:"orange",background: " linear-gradient(to right, #870000, #190a05)"}}      
         }>
             <div className='d-flex flex-column align-items-center'>

             <EditDevice deviceInfo={editableDevice} removeModal={removeModal}/>
             
             </div>
         </Modal>
         <div className='text-end'>
         <Link to='/device-info'>
         <button className="btn btn-success">Add Device</button>

         </Link>
         </div>
        <table className="table overlay">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#Sr.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Serial Number</th>
                    <th scope="col">Model</th>
                </tr>
            </thead>
            <tbody>
                {
                    devicesList && devicesList.map((device, index) => {
                        const { deviceName, model, serialNumber,_id } = device
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{deviceName}</td>
                                <td>{serialNumber}</td>
                                <td>{model}</td>
                                <td><FaEdit style={{cursor:'pointer'}} onClick={()=>editHandler(device)}  size='1.5rem' className='me-3'/><FaTrashAlt  style={{cursor:'pointer'}} onClick={()=>deleteHandler(_id)} size='1.5rem'/></td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>


    </div>;
};

export default DevicesList;
