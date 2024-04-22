import React from 'react';
import { LaptopOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import cookies from 'js-cookies';
const { Header, Sider, Content } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
let menu ;
let items3 = [];

  menu = 
  [
    {
    key: `Company Name`,
    icon: React.createElement(LaptopOutlined),
    label: `Company`,
    children:[
      { 
        key: "categorykey",
        label: <Link to="/companylist">companies</Link>,
      },
      { 
        key: "categorykey",
        label: <Link to="/companyregistration">create</Link>,
      },
    ],
    role:['superadmin']
  },
  {
    key: `Event`,
    icon: React.createElement(LaptopOutlined),
    label: `Event`,
    children:[
      { 
        key: "subcategorykey",
        label: <Link to="/eventlist">List</Link>,
      },
      { 
        key: "subcategorykey",
        label: <Link to="/eventregistration">Create</Link>,
      },
    ],
    role:['superadmin','admin']
  },
  {
    key: `User`,
    icon: React.createElement(UsergroupAddOutlined),
    label: `User`,
    children:[
      { 
        key: "subcategorykey",
        label: <Link to="/listofuser">List</Link>,
      },
      { 
        key: "subcategorykey",
        label: <Link to="/userregistration">Create</Link>,
      },
    ],
    role:['superadmin']
  }
  ];

  menu.forEach((item)=>{
    if(item.role.includes(cookies.getItem('role'))){
        items3.push(item);
    }
  })
 
 


const MainLayout = ({ children }) => {
  const role=localStorage.getItem("role")
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    if (token) {
      localStorage.removeItem('token');
      navigate("/");
    }
  }

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
        <ul>
          {token ? (
            <li className="nav-item text-white" onClick={handleLogout}>
              <a className="nav-link text-white" href="javascript:void(0)">
                Logout
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Login
              </Link>
            </li>
          )}
        </ul>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{ background: '#fff' }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items3}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
