import React from 'react';
import {Button, Form, Input, Select, Space} from "antd";
import { AlertOutlined} from '@ant-design/icons';
import './ConfigForm.css'

import axios from "axios";
import AddNewDeviceButton from "./AddNewDeviceButton";

const server = "http://127.0.0.1:8080";
export default class ConfigForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: []
        }
        this.onFinish = this.onFinish.bind(this);
        this.getSelectDevice = this.getSelectDevice.bind(this);
        let user = localStorage.getItem("user");
        axios.get(server + "/device/query/list/all/" + user).then(response => {
            console.log(response.data);
            this.setState({
                devices: response.data
            });
        });
    }

    onFinish(values) {
        let address = server + "/device/config";
        axios.post(address, values).then(response => {
            console.log(response);
            if (response.data === 1) {
                alert("修改配置成功!");
            } else {
                alert("配置修改失败，请重试!");
            }
        })
    }

    getSelectDevice() {
        let result = this.state.devices.map((item, index) => {
            return <Select.Option value={item.name}>{item.name}</Select.Option>
        });
        console.log(result);
        return result;
    }

    render() {
        return (
            <Form
                name="normal_login"
                className="config-form"
                initialValues={{ remember: true, prefix: '86', }}
                onFinish={this.onFinish}
            >
                <Form.Item
                    name="device"
                    label={"选择设备"}
                    rules={[{ required: true, message: '请选择设备!!!' }]}
                >
                    <Select defaultValue="请选择设备">
                        {this.getSelectDevice()}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="kind"
                    label={"设备类型"}
                    rules={[{ required: true, message: '请选择新的设备类型!!!' }]}
                >
                    <Select defaultValue="请选择设备">
                        <Select.Option value='1'>设备类型1</Select.Option>
                        <Select.Option value='2'>设备类型2</Select.Option>
                        <Select.Option value='3'>设备类型3</Select.Option>
                        <Select.Option value='4'>设备类型4</Select.Option>
                        <Select.Option value='5'>设备类型5</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="description"
                    label={"设备描述"}
                >
                    <Input.TextArea prefix={<AlertOutlined className="site-form-item-icon" />}
                            className={"input-box"}/>
                </Form.Item>

                <br/>
                <Form.Item>
                    <div style={{textAlign: 'center'}}>
                        <Space>
                            <Button  htmlType="submit" className="config-form-button">
                                修改配置
                            </Button>
                            <AddNewDeviceButton />
                        </Space>
                    </div>
                </Form.Item>
            </Form>
        );
    }
}