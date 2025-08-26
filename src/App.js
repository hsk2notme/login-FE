import React from 'react';
import { Form, Input, Button, message, Typography, Col, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import 'antd/dist/reset.css';
import './App.css';

const { Title, Text } = Typography;

const LoginForm = () => {
  const onFinish = async (values) => {
    try {
      // Dùng axios để gọi API từ json-server
      const response = await axios.get(
        `http://localhost:3001/users?username=${values.username}&password=${values.password}`
      );
      if (response.data.length > 0) {
        const user = response.data[0];
        message.success(`Chào mừng ${user.name} quay trở lại!`);
      } else {
        message.error('Tên đăng nhập hoặc mật khẩu không đúng!');
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      message.error('Có lỗi xảy ra'); 
    }
  };

  return (
    <Row className="login-page">
      <Col span={14} className="left-panel">
      </Col>
      <Col span={10} className="right-panel">
        <div className="login-form-container">
          <Title level={2} style={{ fontSize: '32px', marginBottom: '16px', textAlign: 'center' }}>
            Welcome Back
          </Title>
          <Text type="secondary" style={{ fontSize: '16px', marginBottom: '32px', display: 'block', textAlign: 'center' }}>
            Please sign in to continue
          </Text>
        
          <Form
      name="login"
      onFinish={onFinish}
      layout="vertical"
      requiredMark={false}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Tên đăng nhập"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Mật khẩu"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          size="large"
          className="login-form-button"
        >
          Đăng nhập
        </Button>
      </Form.Item>
          </Form>
          
          <div className="signup-section" style={{ marginTop: '24px', textAlign: 'center' }}>
            <Text type="secondary" style={{ marginRight: '8px' }}>
              Bạn chưa có tài khoản?
            </Text>
            <Button type="link" className="signup-form-button">
              Đăng ký
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};



// Export component App
export default LoginForm;