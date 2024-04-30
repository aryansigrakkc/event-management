import React, { useEffect } from 'react'
import { Table,Space,Tag,Popconfirm } from 'antd'
import { EyeTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEvent, eventViewList, getEvent } from '../redux/slice/eventSlice';

const EventList = () => {
const dispatch=useDispatch();
const getData=useSelector((state)=>state.event)
console.log(getData,'getdata');

useEffect(()=>{
dispatch(getEvent())
},[])

const handleDelete = (id) => {
   
  dispatch(deleteEvent({id:id})).then((re) => {
    dispatch(getEvent())
  });

};

const arr = [];
 
if (Array.isArray(getData?.data?.data)) {
  getData.data.data.forEach( (item, idx) => {
    const obj = {
      sno: idx + 1,
      _id:item._id,
      event_name: item.event_name,
      short_desc: item.short_desc,
      long_desc: item.long_desc,
      posted_by: item.posted_by.name,
      type: item?.category_id?.name,
      types_of_event:item.types_of_event,
      from_date: item.from_date_to_date,
      tags: item.tags,
      status: item.status,
      action:item.is_verified,
      email:item.posted_by.email,
      image:"http://localhost:4001/image/"+item.image+"/event",
    };
    
    arr.push(obj);
  });
} else {
  console.error("Data is not an array:", getData?.data?.data);
}
const handleClick=(_id) => {
  dispatch(eventViewList({_id:_id}))
}
   

      
      const columns = [
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render:(_,record)=>{
            return(
              <> 
                <img src={record.image}  style={{width:"50px",height:"50px"}}/>
              </>
            )
          }
        },
        {
          title: 'Event-Name',
          dataIndex: 'event_name',
          key: 'event-name',
        },
        {
          title: 'Short_Desc',
          dataIndex: 'short_desc',
          key: 'short_desc',
        },
        {
          title: 'Long_Desc',
          dataIndex: 'long_desc',
          key: 'long_desc',
        },
        {
          title: 'Posted-by',
          dataIndex: 'posted_by',
          key: 'posted_by',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: 'Type of event',
          dataIndex: 'types_of_event',
          key: 'type',
        },
        {
          title: 'From-date-to-date',
          dataIndex: 'from_date',
          key: 'from_date',
        },
        {
          title: 'Tags',
          dataIndex: 'tags',
          key: 'tags',
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
      <Link to={`/updateevent/${record._id}`}><EditTwoTone /></Link>
      
  
  
  
                  
      <Popconfirm
                    title="Event"
                    description="Are you sure to delete "
                    onConfirm={() => handleDelete(record._id)}
                    onOpenChange={() => console.log("open change")}
                  >
                    <DeleteTwoTone />
                  </Popconfirm>
                  {
    record.action === 0 ? (
        <Tag color="blue" onClick={() => handleClick(record._id)}>Publish</Tag>
    ) : record.action === 1 ? (
        <Tag color="orange">Pending</Tag>
    ) : record.action === 2 ? (
        <Tag color="green">Verified</Tag>
    ) : (
        <Tag color="red">Rejected</Tag>
    )
}

       
      
                </Space>
              );
            },
          },
      ];


    






      
  return (
    <>
    <Table dataSource={arr} columns={columns} />;
    </>
  )
}

export default EventList