import React from 'react'
import { Button, Form, Input, message, Upload } from 'antd';
import { useDispatch,useSelector } from 'react-redux';

import { UploadOutlined } from '@ant-design/icons';
import { createUser } from '../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';


const UserRegistration = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const getData=useSelector((state)=>state.user)
    console.log(getData,"getdatatata");

    const onFinish = (values) => {
        dispatch(createUser(values))
        console.log(values,' values ')
        navigate('/listofuser');
    }
  return (
    <>
      <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label=" Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your company name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contact Number"
                    name="contact_number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your contact number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
                    label=" Address"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your address !',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
    <Form.Item
                    label=" Role"
                    name="role"
                    rules={[
                        {
                            required: true,
                            message: 'roll !',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                

               

                {/* <Form.Item
                    label="Upload Logo"
                    name="logo"
                >
                    <Upload >
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item> */}

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
    </>
  )
}

export default UserRegistration