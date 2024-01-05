import React from 'react';
import {Breadcrumb, Col, Layout, PageHeader, Row, Statistic} from "antd";
import axios from "axios";
import { Pie } from '@ant-design/charts';
import {CustomerServiceTwoTone, FireTwoTone, FundTwoTone} from "@ant-design/icons";
const { Content} = Layout;
const server = "http://127.0.0.1:8080";





class StatisticData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            active: 0,
            msg: 0
        }
        let user = localStorage.getItem("user");
        let values = {
            "token": localStorage.getItem("token")
        }
        axios.post(server + "/device/query/all/" + user, values).then(response => {
            this.setState({
                total: response.data
            });
        })
        axios.get(server + "/device/query/list/active/" + user).then(response => {
            this.setState({
                active: response.data
            })
        })
        axios.get(server + "/message/user/all/" + user).then(response => {
            this.setState({
                msg: response.data
            })
        })
    }

    render() {
        return (
            <Row gutter={16}>
                <Col span={8}>
                    <Statistic title="设备总数" value={this.state.total}
                               prefix={<FundTwoTone />}
                    />
                </Col>
                <Col span={8}>
                    <Statistic title="当前活跃设备数"
                               value={this.state.active}
                               suffix={"/ " + this.state.total}
                               prefix={<FireTwoTone />}
                    />
                </Col>
                <br/>
                <Col span={8}>
                    <Statistic title="消息总数"
                               value={this.state.msg}
                               prefix={<CustomerServiceTwoTone />}
                    />
                </Col>
            </Row>
        );
    }
}
class DevicePieDiagram extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pie: []
        };
        let user = localStorage.getItem("user");
        axios.get(server + "/device/statistic/" + user).then(response => {
            this.setState({
                pie: response.data
            })
            console.log(this.state.pie)
        })
    }

    render() {
        var config = {
            appendPadding: 10,
            data: this.state.pie,
            angleField: 'value',
            colorField: 'type',
            radius: 0.8,
            label: {
                type: 'outer',
                content: '{name} {percentage}',
            },
            interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
        };
        return (
            <div>
                <Pie {...config} />
            </div>
        );
    }
}
export default class DeviceStatisticInfo extends React.Component {
    render() {
        return (
            <Layout style={{ background:'#f5f5f5'}}>
                <Content style={{ margin: '0px 16px', textAlign: 'left'}}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    </Breadcrumb>
                    <div style={{ background:'#fff', padding: 14, minHeight: 600,  textAlign: 'left'}}>
                        <PageHeader
                            className="site-page-header"
                            title="查看设备统计信息"
                        />
                        <br />
                        <StatisticData />
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <DevicePieDiagram />
                    </div>
                </Content>
            </Layout>
        );
    }
}

