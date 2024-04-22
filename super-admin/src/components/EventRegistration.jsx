import React from 'react';
import { Button, Checkbox, Form, Input, Upload, message, Select, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../redux/slice/eventSlice';

const { RangePicker } = DatePicker;
const { Option } = Select;

const EventRegistration = () => {
    const dispatch = useDispatch();
    const getData = useSelector((state) => state.event);

    const onFinish = (values) => {
        console.log(values, ' values ');
        const formData = new FormData();
        formData.append('event_name', values.event_name);
        formData.append('from_date_to_date', values.from_date_to_date.format('YYYY-MM-DD'));
        formData.append('long_desc', values.long_desc);
        formData.append('posted_by', values.posted_by);
        formData.append('short_desc', values.short_desc);
        formData.append('tags', values.tags);
        formData.append('image', values.image.file.originFileObj);
        formData.append('type', values.type);
        formData.append('types_of_event', values.types_of_event);
        dispatch(createEvent(formData));
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
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
                label="EventName"
                name="event_name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your event name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Short_desc"
                name="short_desc"
                rules={[
                    {
                        required: true,
                        message: 'short description!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Long_desc"
                name="long_desc"
                rules={[
                    {
                        required: true,
                        message: 'Long description!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Posted By"
                name="posted_by"
                rules={[
                    {
                        required: true,
                        message: 'Posted by!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Type"
                name="type"
                rules={[
                    {
                        required: true,
                        message: 'Please select the type of event!',
                    },
                ]}
            >
                <Select placeholder="Select the type of event">
                    <Option value="corporate">corporate</Option>
                    <Option value="festivals">festivals</Option>
                    {/* Add more options as needed */}
                </Select>
            </Form.Item>
            <Form.Item
                label="From date to date"
                name="from_date_to_date"
                rules={[
                    {
                        required: true,
                        message: 'Please select the date range!',
                    },
                ]}
            >
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                label="Tags"
                name="tags"
                rules={[
                    {
                        required: true,
                        message: ' Tags!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Type of Event"
                name="types_of_event"
                rules={[
                    {
                        required: true,
                        message: 'Please select the type of event!',
                    },
                ]}
            >
                <Select placeholder="Select the type of event">
                    <Option value="free">Free</Option>
                    <Option value="paid">Paid</Option>
                    {/* Add more options as needed */}
                </Select>
            </Form.Item>
            <Form.Item
                label="Image"
                name="image"
            >
                <Upload>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
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
    );
}

export default EventRegistration;
