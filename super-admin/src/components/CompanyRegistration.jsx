import React from 'react';
import { Button, Form, Input, message, Upload } from 'antd';
import { useDispatch } from 'react-redux';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { createCompany } from '../redux/slice/companySlice';
const CompanyRegistration = () => {
    const dispatch = useDispatch();
     const navigate = useNavigate();
    const onFinish = (values) => {
        
        const formData = new FormData()
        formData.append('company_name',values.company_name)
        formData.append('contact_number',values.contact_number)
        formData.append('Person_name',values.Person_name)
        formData.append('email',values.email)
        formData.append('pr_contact_number',values.pr_contact_number)
        formData.append('total_strength',values.total_strength)
        formData.append('logo',values.logo.file.originFileObj);
        dispatch(createCompany(formData))
          navigate('/companylist');

}

const props = {
    name: 'logo',
    multiple: false, // Allow only single file upload
    // action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
           
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) { 
       
    },
 };

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
                    label="Company Name"
                    name="company_name"
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
                    label="Person Name"
                    name="Person_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input person name!',
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
                    label="Person Contact Number"
                    name="pr_contact_number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input person contact number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Total Strength"
                    name="total_strength"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter total strength!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Upload Logo"
                    name="logo"
                >
                    <Upload >
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
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
        </>
    );
}


export default CompanyRegistration;
