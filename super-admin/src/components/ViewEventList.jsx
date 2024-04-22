import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  eventViewListByCompany,
  verifiedEvent,
} from "../redux/slice/companySlice";
import { Table, Space, Tag, Popconfirm } from "antd";
import { EyeTwoTone, EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

const ViewEventList = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.company);
  console.log(getData, "get datatata");

  useEffect(() => {
    dispatch(eventViewListByCompany(params.id));
  }, []);
  const handleDelete = () => {};

  const verify = (_id) => {
    console.log(_id, "1");
    const obj = {
      _id: _id,
      common: "accept",
    };
    dispatch(verifiedEvent(obj)); 
  };
  const reject = (_id) => {
    const obj = {
      _id: _id,
      common: "reject",
    };
    dispatch(verifiedEvent(obj));
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => {
        console.log(record, "record");
        return (
          <>
            <img src={record.image} style={{ width: "50px", height: "50px" }} />
          </>
        );
      },
    },
    {
      title: "Event-Name",
      dataIndex: "event_name",
      key: "event-name",
    },
    {
      title: "Short_Desc",
      dataIndex: "short_desc",
      key: "short_desc",
    },
    {
      title: "Long_Desc",
      dataIndex: "long_desc",
      key: "long_desc",
    },
    {
      title: "Posted-by",
      dataIndex: "posted_by",
      key: "posted_by",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "From-date-to-date",
      dataIndex: "from_date",
      key: "from_date",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status ? "green" : "red"}>
          {status ? "Active" : "Inactive"}
        </Tag>
      ),
    },
    {
      title: "Action",

      key: "action",
      render: (record) => {
        console.log(record?.action, "recordddd");
        return (
          <Space size="middle">
            <Link to={`/viewevent/${record._id}`}>
              <EyeTwoTone />
            </Link>
            <Link to={`/updateevent/${record._id}`}>
              <EditTwoTone />
            </Link>

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
        <Tag color="blue">Publish</Tag>
    ) : record.action === 1 ? (
        <>
            <Tag color="orange" onClick={() => verify(record._id)}>Verify</Tag>
            <Tag color="red" onClick={() => reject(record._id)}>Reject</Tag>
        </>
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

  const arr = [];

  if (Array.isArray(getData?.data?.data)) {
    getData.data.data.forEach((item, idx) => {
      console.log(item, "item");

      const obj = {
        sno: idx + 1,
        _id: item._id,
        event_name: item.event_name,
        short_desc: item.short_desc,
        long_desc: item.long_desc,
        posted_by: item.posted_by,
        type: item.type,
        from_date: item.from_date_to_date,
        tags: item.tags,
        status: item.status,
        action: item.is_verified,
        //   company_id:item.company_id._id,
        image: "http://localhost:4001/image/" + item.image + "/event",
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
  );
};

export default ViewEventList;
