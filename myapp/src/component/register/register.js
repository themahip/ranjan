import React from "react";
import { Form, Button, Checkbox,Input } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './register.css'

const Register=()=>{
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return(
    <div className="login_container">
      <div className="login_middle_container">
        <div className="login_inner_container">
        <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
    <h1>Register</h1>
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your Username!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>


    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Register
      </Button>
      Or <a href="">login!</a>
    </Form.Item>
  </Form>
        </div>
      
      </div>
    
    </div>

  )
    
}

export default Register;