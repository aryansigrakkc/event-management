import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {loginCompany} from "../redux/slice/companySlice"
import  cookies  from 'js-cookies';

const Login = () => {
  const dispatch=useDispatch();
  const getData=useSelector((state)=>state.company)
  
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  useEffect(()=>{
    if(getData?.data?.status===true){
      localStorage.setItem("token",getData?.data?.data?.token);
      cookies.setItem('role',getData?.data?.data?.role)
    }

    if(token){
      navigate('/dashboard');
    }


  },[getData])

    const onFinish = (values) => {
      dispatch(loginCompany(values))
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <>
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-4 mx-auto">

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
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
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
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

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

            </div>
        </div>
    </div>
    </>
  )
}

export default Login