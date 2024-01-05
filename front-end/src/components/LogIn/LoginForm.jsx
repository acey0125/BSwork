import {Form, Input, Button, Checkbox, Image} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import './LoginForm.css';
import '../../config.js';
import axios from "axios";

const server = "http://localhost:8080";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
        this.toRegister = this.toRegister.bind(this);
    }

    onFinish(values) {
        let address = server + "/user/login";
        let data = {
            "username": values.username,
            "password": values.password
        }
        axios.post(address, data).then(response => {
            console.log(response.data);
            if (response.data.code === "401") {
                alert("账号不存在或密码错误");
            } else {
                localStorage.setItem("user", response.data.name);
                localStorage.setItem("token", response.data.token);
                this.props.history.push('/main/user');
            }
        })
    }

    toRegister() {
        this.props.history.push('/register');
    }

    render() {
        return (
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
            >

                <Form.Item name={"title"} >
                    <br/>
                    <br/>
                    <h1>物联网设备管理平台</h1>
                    <br/>
                </Form.Item>

                <Form.Item
                    name="username"
                    label={"用户名称 :"}
                    rules={[{ required: true, message: '账号不能为空' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />}
                            className={"input-box"}/>
                </Form.Item>
                <br/>
                <Form.Item
                    name="password"
                    label={"输入密码 :"}
                    rules={[{ required: true, message: '密码不能为空' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        className={"input-box"}
                    />
                </Form.Item>
                <br/>
                <Form.Item>
                    <Button  htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    <Button className="login-form-button" onClick={this.toRegister}>
                        注册
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
export default LoginForm;


