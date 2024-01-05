import React from 'react';
import {Menu, Layout, Breadcrumb, Badge, Avatar} from 'antd';
import {Link} from "react-router-dom";
import {
    PieChartOutlined,
    LogoutOutlined,
    LineChartOutlined,
    AlertFilled,
    HomeOutlined,
    NotificationOutlined,
    SlidersOutlined
} from '@ant-design/icons';
import {  } from 'antd';
import {  } from 'antd';


const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind();
    }
    logOut() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.reload();
    }

    render() {
        let name = localStorage.getItem("user");
        return (
            <Layout >
                <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
                    <Breadcrumb style={{ margin: '20px 0px' }}>
                    </Breadcrumb>
                    <Menu.Item margin={"10px,0px"}>
                        <Avatar src={<img src={url} alt="avatar" />} />
                            <text style={{ color: "white", fontSize: "24px"}}>&nbsp;&nbsp;&nbsp;{name}&nbsp;</text>
                    </Menu.Item>
                    <Breadcrumb style={{ margin: '20px 0px' }}>
                    </Breadcrumb>

                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to={"/main/user"} >个人信息</Link>
                    </Menu.Item>
                    <Breadcrumb style={{ margin: '20px 0px' }}>
                    </Breadcrumb>
                    <Menu.Item key="2" icon={<SlidersOutlined />}>
                        <Link to={"/main/config"} >设备配置</Link>
                    </Menu.Item>
                    <Breadcrumb style={{ margin: '20px 0px' }}>
                    </Breadcrumb>
                    <Menu.Item key="3" icon={<AlertFilled />}>
                        <Link to={"/main/show"} >查看设备</Link>
                    </Menu.Item>
                    <Breadcrumb style={{ margin: '20px 0px' }}>
                    </Breadcrumb>
                    <Menu.Item key="4" icon={<LineChartOutlined />}>
                        <Link to={"/main/message"} >设备趋势图</Link>
                    </Menu.Item>
                    <Breadcrumb style={{ margin: '20px 0px' }}>
                    </Breadcrumb>
                    <Menu.Item key="5" icon={<PieChartOutlined />}>
                        <Link to={"/main/statistic"} >统计信息</Link>
                    </Menu.Item>
                    <Breadcrumb style={{ margin: '20px 0px' }}>
                    </Breadcrumb>
                    <Menu.Item key="6" icon={<LogoutOutlined />} onClick={this.logOut}>
                        <>退出登录</>
                    </Menu.Item>

                </Menu>
            </Layout>
        );
    }
}
export default MainMenu;