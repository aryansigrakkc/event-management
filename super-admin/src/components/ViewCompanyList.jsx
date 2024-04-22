import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { useParams } from "react-router-dom";
import { Space, Table, Tag, Button, Drawer, Badge, Popconfirm,message } from "antd";
import { getCompanyById } from '../redux/slice/companySlice';

const ViewCompanyList = () => {
  const param = useParams();

  const dispatch = useDispatch(); 
  const getData = useSelector((state) => state.company);
  console.log(getData,"get data");

  useEffect(() => {
   dispatch(getCompanyById(param.id))
  }, []); 




 

  return (
    <>
     
      <div className="container">
        <div className="row">
          <div className="col-md-12">
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Company Name</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Person Name</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >{getData?.data?.data?._id}</td>
      <td>{getData?.data?.data?.company_name}</td>
      <td>{getData?.data?.data?.contact_number}</td>
      <td>{getData?.data?.data?.Person_name}</td>
      <td>{getData?.data?.data?.email}</td>
      <td>{getData?.data?.status?"Active":"Inactive"}</td>
     
    </tr>

  </tbody>
</table>

          </div>
        </div>
      </div>
  
  
    </>
  );
};

export default ViewCompanyList;
