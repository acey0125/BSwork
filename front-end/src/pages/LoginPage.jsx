import React from 'react';
import LoginForm from "../components/LogIn/LoginForm";
import cover from "../img/R-C.jpg";
import {Avatar, Divider, Layout, Space} from "antd";
import {UserOutlined} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;


let back = {
    width: "100%",
    height: "875px",
    backgroundImage: `url(${cover})`,
    display: "flex",
    alignItems: 'center'
}

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Space size={1}
               direction="vertical"
               style={back}>
                <br/>
                <br/>
                <br/>
                <Avatar
                    marginY="60px"
                    size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 80,
                        xxl: 100,
                    }}
                    icon={<UserOutlined />}
                />
                <Divider fontSize="40px">Admin</Divider>
                <LoginForm history={this.props.history}/>
            </Space>

        )
    }
}
export default LoginPage;