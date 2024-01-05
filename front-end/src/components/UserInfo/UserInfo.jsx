import React from 'react'
import {Descriptions, Space, PageHeader} from 'antd';
import axios from "axios";
import ChangeInfoButton from "./ChangeInfoButton";
import ChangePasswordButton from "./ChangePasswordButton";

const server = "http://localhost:8080";

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: "男",
            position: "浙江杭州",
            birthday: "2002.01.25",
            introduce:
                <div>
                    数据测试
                </div>
        }
        let address = server + "/user/" + localStorage.getItem("user");
        axios.get(address).then(response => {
            this.setState({
                username: response.data.name,
                email: response.data.email,
                phone: response.data.phone
            })
        });
    }
    render() {

        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="用户信息"
                />
                <br />

                <Descriptions
                    bordered
                    size={'default'}
                    column={1}
                >
                    <Descriptions.Item label="用户名">{this.state.username}</Descriptions.Item>
                    <Descriptions.Item label="性别">{this.state.gender}</Descriptions.Item>
                    <Descriptions.Item label="位置">{this.state.position}</Descriptions.Item>
                    <Descriptions.Item label="电子邮箱">{this.state.email}</Descriptions.Item>
                    <Descriptions.Item label="联系方式">{this.state.phone}</Descriptions.Item>
                    <Descriptions.Item label="生日">{this.state.birthday}</Descriptions.Item>
                    <Descriptions.Item label="相关信息">
                        {this.state.introduce}
                    </Descriptions.Item>
                </Descriptions>
                <br />
                <br />
                <br />
                <div style={{textAlign: 'center'}}>
                    <Space>
                        <ChangeInfoButton />
                        <ChangePasswordButton />
                    </Space>
                </div>
            </div>
        );
    }
}