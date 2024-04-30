import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';


const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items3 = [{
  key: `User`,
  icon: React.createElement(LaptopOutlined),
  label: `User`,
  children:[{ 
      key: "userKey",
      icon: React.createElement(LaptopOutlined),
      label: <Link to="/list">View List</Link>,
    },{
        key: "userKey",
        icon: React.createElement(LaptopOutlined),
        label: <Link to="/register">User Registration</Link>,
    }]
},
{
  key: `SubCategory`,
  icon: React.createElement(LaptopOutlined),
  label: `Subcategory`,
  children:[{ 
      key: "subcategorykey",
      label: <Link to="/subcategory">View SubCategory</Link>,
    },
  ]
}
];


const MainLayout = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items3}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <ul className='d-flex justify-content space-between'>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Contact</Breadcrumb.Item>
            
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default MainLayout;