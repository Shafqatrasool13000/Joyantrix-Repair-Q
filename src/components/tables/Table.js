import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { customerList } from '../utils/urls';
import table from './table.json'
import { Audio } from  'react-loader-spinner'



const Table = () => {
    const [editabel,setEditable]=useState()
    const [users,setUsers]=useState()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}${customerList}`).then((response)=>setUsers(response.data)).catch((error)=>console.log(error));
      }, []);
    console.log(users)
    
    const handleTable=(table,index)=>{
        setEditable(table)
      console.log(editabel)
    }
    return <div className='container'>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>

                {!users?
                    <Audio
                    heigth="100"
                    width="100"
                    color='grey'
                    ariaLabel='loading'
                  />:(
                    users.customers.map((table, index) => {
                        const { firstName, lastName, email } = table
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td><button onClick={()=>handleTable(table,index)} className='btn btn-primary me-2'>E</button><button className='btn btn-danger'>D</button></td>
                                 
                            </tr>
                        )
                    })
                  )
                   
                }


            </tbody>
        </table>
    </div>;
};

export default Table;
