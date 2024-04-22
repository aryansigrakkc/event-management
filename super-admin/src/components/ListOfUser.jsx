import React, { useEffect } from 'react'
import { Table,Space,Tag ,Popconfirm} from 'antd'
import { EyeTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser } from '../redux/slice/userSlice';
const ListOfUser = () => {
    const dispatch=useDispatch()
    const getData=useSelector((state)=>state.user)
    console.log(getData,"getdatata");

    useEffect(()=>{
        dispatch(getUser())

    },[])

    const handleDelete=(id)=>{
        dispatch(deleteUser({id:id})).then((res)=>{
          dispatch(getUser())
        })
      
      }
    const dataSource = [
        {
          key: '1',
          uname: 'nick',
          userdetails:'n/a',
          expences:'32 billion',
          address: '10 Downing Street',
          livelocation:'32 mx jorge washi',
          status: true
        },
        {
            key: '1',
            uname: 'nick',
            userdetails:'n/a',
            expences:'32 billion',
            address: '10 Downing Street',
            livelocation:'32 mx jorge washi',
            status: true
          },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Contact',
          dataIndex: 'contact_number',
          key: 'address',
        },
       
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: status => (
              <Tag color={status ? 'green' : 'red'}>
                {status ? 'Active' : 'Inactive'}
              </Tag>
            ),
          },
          {
            title: "Action",
            key: "action",
            render: (record) => {
              console.log(record,"recordddd");
              
              return (
                <Space size="middle">
      
      <Link to={`/viewevent/${record._id}`}><EyeTwoTone /></Link>
  
  <EditTwoTone />
  
                  
      <Popconfirm
                    title="Event"
                    description="Are you sure to delete "
                    onConfirm={() => handleDelete(record._id)}
                    onOpenChange={() => console.log("open change")}
                  >
                    <DeleteTwoTone />
                  </Popconfirm>
      
                </Space>
              );
            },
          },
      ];

      const arr = [];
 
      if (Array.isArray(getData?.data?.data)) {
        getData.data.data.forEach( (item, idx) => {
          const obj = {
            sno: idx + 1,
            _id:item._id,
            name: item.name,
            email: item.email,
            contact_number: item.contact_number,
            address: item.address,
            roll: item.roll,
            
          
            status: item.status,
            // clogo:"http://localhost:4000/logo/"+item.logo
          };
          arr.push(obj);
        });
      } else {
        console.error("Data is not an array:", getData?.data?.data);
      }


  return (
 <>
  <Table dataSource={arr} columns={columns} />;
 </>
  )
}

export default ListOfUser