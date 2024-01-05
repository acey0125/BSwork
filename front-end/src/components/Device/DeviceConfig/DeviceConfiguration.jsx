import React from 'react';
import {Layout, Breadcrumb, PageHeader} from 'antd';
import ConfigForm from "./ConfigForm";

const { Content} = Layout;


class DeviceConfiguration extends React.Component {
    render() {
        return (
            <Layout style={{ background:'#f5f5f5'}}>
                <Content style={{ margin: '0px 16px', textAlign: 'left'}}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    </Breadcrumb>
                    <div style={{ background:'#fff', padding: 14, minHeight: 600,  textAlign: 'left'}}>
                        <PageHeader
                            className="site-page-header"
                            title="修改设备配置"
                        />
                        <ConfigForm />
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default DeviceConfiguration;