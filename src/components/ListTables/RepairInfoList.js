import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {repairInfoDelete, repairInfoTable } from '../utils/urls';
import sweetalert from '../../SweetAlert';
import Loader from '../Loader/Loader'
import { FaTrashAlt,FaEdit } from "react-icons/fa";
import Modal from 'react-modal'
import { useHistory } from 'react-router-dom';
import EditRepairInfo from '../EditRepairInfo/EditRepairInfo';

const RepairInfoList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [repairInfoList, setRepairInfoList] = useState(null)
    const [editableRepairInfo, setEditableRepairInfo] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [update,setUpdate]=useState(false);
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${process.env.REACT_APP_BASE_URL}${repairInfoTable}`).then((response) => {
            setIsLoading(false)
            setRepairInfoList(response.data.repairInfos)
        }).catch((error) => {
            setIsLoading(false)
            sweetalert('Something Went Wrong', 'error')
        });


    }, [update]);

    const history=useHistory();
    const moveToRepairInfo=()=>{
        history.push('/repair-info-table')
    }

    // Edit Handler
    const editHandler = (customer) => {
        setEditableRepairInfo(customer)
        setIsModalOpen(true)
    }
    const removeModal=()=>{
        setIsModalOpen(false)
        setUpdate((prev)=>!prev)
    }
    // Delete Handler 
    const deleteHandler = (_id) => {
        setIsLoading(true)
        axios.delete(`${process.env.REACT_APP_BASE_URL}${repairInfoDelete}/${_id}`).then((response) => {
            setIsLoading(false)
            sweetalert('Repair Info Deleted Sucessful', 'success', moveToRepairInfo)
            setUpdate((prev)=>!prev)
        }).catch((error) => {
            setIsLoading(false)
            sweetalert('Something Went Wrong', 'error')
        });
    }

    return <div className='container form mt-3'>
      
        <Modal shouldCloseOnEsc isOpen={isModalOpen}  shouldCloseOnOverlayClick onRequestClose={()=>setIsModalOpen(false)} appElement={document.getElementById('app')} style={
             {overlay:{backgroundColor:"grey"},
            content:{color:"orange"}}      
         }>
             <div className='d-flex flex-column align-items-center'>
             <EditRepairInfo repairInfo={editableRepairInfo} removeModal={removeModal}/>      
             </div>
         </Modal>
        <table className="table overlay">
        {isLoading && <Loader />}
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#Sr.</th>
                    <th scope="col">Type Of Repair</th>
                    <th scope="col">Cost </th>
                    <th scope="col">Tracking Number</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    repairInfoList && repairInfoList.map((repairInfo, index) => {
                        const { typeOfRepair, estimatedCost,trackingType,trackingNumber,status,_id } = repairInfo
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{typeOfRepair}</td>
                                <td>{estimatedCost}</td>
                                <td>{trackingType}</td>
                                <td>{trackingNumber}</td>
                                <td>{status}</td>
                                <td><FaEdit style={{cursor:'pointer'}} onClick={()=>editHandler(repairInfo)}  size='1.5rem' className='me-3'/><FaTrashAlt  style={{cursor:'pointer'}} onClick={()=>deleteHandler(_id)} size='1.5rem'/></td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>


    </div>;
};

export default RepairInfoList;
