import React, { useEffect } from 'react';
import { Space, Table, Tag, Button, Drawer, Badge, Popconfirm,message } from "antd";
import cookies from 'js-cookies';

import {
  EyeTwoTone,
  EditTwoTone,
  DeleteTwoTone,
 
} from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCompany, getCompany } from '../redux/slice/companySlice';
 import { useNavigate } from 'react-router-dom';

const CompanyList = () => {
  const navigate=useNavigate()
  const token = localStorage.getItem('token');


  const dispatch=useDispatch();
  const getData=useSelector((state)=>state.company);

  useEffect(()=>{
    dispatch(getCompany())
    
  },[])

  const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };


  const handleDelete = (id) => {
   
    dispatch(deleteCompany({id:id})).then((re) => {
      dispatch(getCompany())
    });

  };

  const handleLogut = ()=>{
    if(token) {
      localStorage.removeItem('token');
      navigate("/");
    }
  }

      
    const columns = [
        {
          title: 'Company-logo',
          dataIndex: 'clogo',
          key: 'clogo',
          render:(_,record)=>{
           
            return(
              <> 
                <img src={record.clogo}  style={{width:"50px",height:"50px"}}/>
              </>
            )
          }
        },
        {
          title: 'Company-Name',
          dataIndex: 'cname',
          key: 'company-name',
        },
        {
          title: 'Contact-Number',
          dataIndex: 'contactnumber',
          key: 'contactnumber',
        },
        {
          title: 'Person-Name',
          dataIndex: 'personname',
          key: 'personname',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Pr-Contact-Number',
          dataIndex: 'prnumber',
          key: 'prnumber',
        },
        {
          title: 'Total-Strength',
          dataIndex: 'tstrength',
          key: 'tstrength',
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render:(_,record)=>{
            return(
              <> 
             
                {record.status? <Badge count={"Active"} style={{ backgroundColor: "#52c41a" }} />:<Badge count={"Inactive"}/>}
              </>
            )
          }
        },
        {
          title: "Action",
          key: "action",
          render: (record) => {
            return (
              <Space size="middle">
    
<Link to={`/viewcompanylist/${record._id}`}><EyeTwoTone /></Link>

<Link to={`/updatecompanylist/${record._id}`}><EditTwoTone /></Link>

                
    <Popconfirm
                  title="Company"
                  description="Are you sure to delete "
                  onConfirm={() => handleDelete(record._id)}
                  onOpenChange={() => console.log("open change")}
                >
                  <DeleteTwoTone />
                </Popconfirm>
                <Link to={`/vieweventList/${record._id}`}><button>ViewList</button></Link>
                
    
              </Space>
            );
          },
        },
    ];


    const arr = [];
 
if (Array.isArray(getData?.data?.data)) {
  getData.data.data.forEach( (item, idx) => {
    console.log(item)
    const obj = {
      sno: idx + 1,
      _id: item._id,
      cname: item.company_name,
      contactnumber: item.contact_number,
      personname: item.Person_name,
      email: item.email,
      prnumber: item.pr_contact_number,
      tstrength: item.total_strength,
      status: item.status,
      clogo:"http://localhost:4001/image/"+item.logo+"/company"
    };
    arr.push(obj);
  });
} else {
  console.error("Data is not an array:", getData?.data?.data);
}


  return (
    <>
      <h4 className='text-success'> All Companies List</h4>
    
      <Table dataSource={arr} columns={columns} />
    </>
  )
}

export default CompanyList;
